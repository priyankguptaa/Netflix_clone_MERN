import User from "../models/auth.models.js"
import { movieFromIMDB } from "../services/movie.services.js";

export const searchMovieName = async(req,res)=>{
    const{title} = req.params;
    try {
        const response = await movieFromIMDB(`https://imdb236.p.rapidapi.com/imdb/search?originalTitle=${title}`)
        if(response.length === 0){
            return res.status(400).send(null)
        }
        
        await User.findByIdAndUpdate(req.user._id,{
            $push: {
                searchHistory: {
                    id:response.results[0].id,
                    image:response.results[0].primaryImage,
                    title:response.results[0].originalTitle,
                    searchType:"title",
                    createdAt:new Date()
                }
            }
        })
        res.status(200).json({success:true, content:response.results})

    } catch (error) {
        console.log(error)
        res.status(500).json({succes:false, message:"internal server error"})
    }
}

export const getSearchHistory = async (req,res) => {
try {
    res.status(200).json({success:true, content: req.user.searchHistory})
} catch (error) {
    res.status(200).json({success:true, message: "Internal server error"})  
}
}

export const removeItemFromSearchHistory = async(req,res) => {
    let {id} = req.params;

    try {
    await User.findByIdAndUpdate(req.user._id,{
        $pull:{
            searchHistory:{ id: id}
        },
    });
    res.status(200).json({success:true, message: "Item removed from watchHistory"})
    } catch (error) {
        console.log("Error removed from searchHistory", error.message)
        res.status(200).json({success:true, message: "Internal server error"})  
    }
    }


   