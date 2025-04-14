import { movieFromIMDB } from "../services/movie.services.js"

export const getPopularMovies = async (req , res)=>{
    try {
    const data = await movieFromIMDB('https://imdb236.p.rapidapi.com/imdb/most-popular-movies');
    const popularMovie = data[Math.floor(Math.random() * data?.length)];
    res.json({success:true, content:popularMovie})
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error.message)
    }
}


export const getMoviesByCategory = async(req,res)=>{
    try {
        const {category} = req.params
        const data = await movieFromIMDB(`https://imdb236.p.rapidapi.com/imdb/${category}`)
            res.status(200).json({success:true, content:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({succes:false, message:"internal server error"})
    }
}

