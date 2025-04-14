import { movieFromIMDB } from "../services/movie.services.js"

export const getPopularTv = async (req , res)=>{
    try {
    const data = await movieFromIMDB('https://imdb236.p.rapidapi.com/imdb/most-popular-tv');
    const popularTv = data[Math.floor(Math.random() * data?.length)];
    res.json({success:true, content:popularTv})
    } catch (error) {
        res.status(500).json({success:false, message:"internal server error"})
        console.log(error.message)
    }
}


// export const getMovieTrailers = async(req, res)=>{
//     const {id} = req.params;
//     try {
//         const data =  await movieFromIMDB(`https://imdb236.p.rapidapi.com/imdb/${id}/trailer`)
//         console.log(data)
//         res.json({succes:true, trailer:data})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({succes:false})

//     }
// }

// export const getMoviedetails = async(req,res)=>{
//     try {
//         const {id} = req.params
//         const data = await movieFromIMDB(``)
//         console.log(data)
//         res.status(200).json({success:true, details:data})
//     } catch (error) {
//         console.log(error)
//         res.status(500),json({sucesss:false,message:error.message})
//     }
// }

// export const getSimilarMovie = async(req,res) => {
//     try {
//         const {id} = req.params
//         const data = await movieFromIMDB("")
//     } catch (error) {
        
//     }
// }

export const getTvByCategory = async(req,res)=>{
    try {
        const {category} = req.params
        const data = await movieFromIMDB(`https://imdb236.p.rapidapi.com/imdb/${category}`)
            res.status(200).json({success:true, content:data})
    } catch (error) {
        console.log(error)
        res.status(500).json({succes:false, message:"internal server error"})
    }
}