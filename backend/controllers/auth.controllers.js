import { generateTokenAndCookie } from "../lib/generateToken.js";
import User from "../models/auth.models.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res)=>{
    try {
        const {username, email, password} = req.body
        
        if(!email || !password || !username){
            return res.status(400).json({success:false, message:"All fields are required"})
        }

        const emailregex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])/;
        
        if(!emailregex.test(email)){
            return res.status(400).json({success:false, message:"Please enter valid email"})
        }

        if(password.length < 6 ){
            return res.status(400).json({success:false, message:"password must be atleast 6 character"})
        }
        
        const existingUserByEmail = await User.findOne({email:email})
            
        if(existingUserByEmail){
            return res.status(400).json({success:false, message:"emailid already exist"})
        }        

        const existingUserByusername = await User.findOne({username:username})
            
        if(existingUserByusername){
            return res.status(400).json({success:false, message:"username already exist"})
        }      
         const salt = await bcryptjs.genSalt(10);
         const hashedPassword = await bcryptjs.hash(password, salt);
        

        const PROFILE_PICS = ["/avatar1.png","/avatar2.png","/avatar3.png"]

        const image = PROFILE_PICS[Math.floor(Math.random()* PROFILE_PICS.length)]

        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            image
        })        
        generateTokenAndCookie(newUser._id, res)
        await newUser.save()
        return res.status(200).json({success:true,
            user:{
            ...newUser._doc,
            password:""
        }})
                
        
    } catch (error) {
        console.log("internal server error", error.message)
        res.status(500).json({message:"internal server error"})
    }
}

export const signin = async (req, res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(404).json({success:false,message:"fields cannot be empty"})
        } 
        const user = await User.findOne({email:email})
        
        if(!user){
            return res.status(404).json({success:false,message:"invalid credentials"})
        }

        const comparedPassword = await bcryptjs.compare(password, user.password)

        if (!comparedPassword){
            res.status(404).json({message:"invalid details"})
        }
        generateTokenAndCookie(user._id, res);
        res.status(200).json({success:true,
            user:{
                ...user._doc,
                password:""
            }
        })
        } catch (error) {
        console.log({message:"error in signup", error:error.message})
        res.status(500).json({message:"error in signup", error:error.message})
    }
}

export const logout = async (req, res)=>{
    try {
        res.clearCookie("jwt-netflix")
        res.status(200).json({status:"true", message:"logout successful"})
    } catch (error) {
        console.log("Error in logout controller",error.message)
        res.status(500).json({message:"internal server error", error:error.message})
    }
}


export const authCheck= async(req,res)=>{
    try {
        res.status(200).json({success:true, user:req.user})
    } catch (error) {
        console.log("error in authcheck contoller", error.message)
        res.status(500).json({success:false,message:"internal server error"})
    }

}

