import jsonwebtoken from "jsonwebtoken";
import User from "../models/auth.models.js";
 
export const protectRoute = async(req, res, next)=>{
    try {
        const token = req.cookies["jwt-netflix"];
        if(!token){
            return res.status(401).json({success:false, message:"unauthorized user"})
        } 
        const decoded = jsonwebtoken.verify(token, process.env.SECRET_REFRESH_TOKEN)
        if(!decoded){
            return res.status(401).json({success:false, message:"unauthorized user"})
        } 
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(401).json({success:false, message:"user not found"})
        }
        req.user = user;        
        next()
        
    } catch (error) {
        console.log("Error in protection route",error.message)
        return res.status(500).json({success:false, message:"Internal server error"})
        
    }
}	
		
