import axios from "axios"
import dotenv from "dotenv";

dotenv.config()
  
 export const movieFromIMDB = async(url)=> {
    const options = {
        headers: {
          'x-rapidapi-key': process.env.RAPID_API_KEY,
          'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
      };
       const response = await axios.get(url,options)
        if(response.status !== 200){
            throw new error('failed to fetch data from IMDB'+ response.statusText)
        }
       return response.data
    }


  


