import { movieFromIMDB } from "../services/movie.services.js"

export const searchById = async(req ,res) => {
    const {id} = req.params
    try {
        const data = await movieFromIMDB(`https://imdb236.p.rapidapi.com/imdb/${id}`)
        console.log(data)
        return res.status(200).json({success:true, content:data})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({succes:false, message:"internal server error"})
    }
}