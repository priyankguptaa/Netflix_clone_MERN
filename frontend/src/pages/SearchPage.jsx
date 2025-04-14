import React, { useState } from 'react'
import { useContentStore } from '../store/useAuthStore.js';
import Navbar from '../components/Navbar.jsx';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

function SearchPage() {

    const[activeTab,setActiveTab] = useState("all")
    const[searchTerm,setSearchTerm] = useState("")
  
    const [results,setResults] = useState([]);
    const{setContenttype }=useContentStore();

    // const handleTabClick = (tab)=>{
    //     setActiveTab(tab);
    //     tab === "movie"? setContenttype("movie") : setContenttype("tv");
    //     setResults([])
    // }

  const handleSearch = async(e)=>{
    e.preventDefault();
      try {
        const res = await axios.get(`api/v1/search/${searchTerm}`)
        console.log(res)
        setResults(res.data.content)
      } catch (error) {
        // if(error.response.status === 400){
        //     toast.error("nothing found,make sure you entered correct value")
        // }else{
          toast.error("an error occured")
          console.log(error.message)
        // }
      }
    
  }
  return (
    <div className ="bg-black min-h-screen text-white">
      <Navbar/>
        <div className='container mx-auto px-4 py-8'>
          <div className='flex justify-center items-center mb-4'>
          {/* <button 
            className={`py-2  px-4 rounded ${activeTab === "title" ? "bg-red-500" :"bg-gray-800"} hover:bg-red-700`}
            onClick={()=>handleTabClick("title")}
            >
              All
            </button>
            <button 
            className={`py-2  px-4 rounded ${activeTab === "movieName" ? "bg-red-500" :"bg-gray-800"} hover:bg-red-700`}
            onClick={()=>handleTabClick("movieName")}
            >
              Movies
            </button>
            <button 
            className={`py-2  px-4 rounded ${activeTab === "tvName" ? "bg-red-500" :"bg-gray-800"} hover:bg-red-700`}
            onClick={()=>handleTabClick("tvName")}
            >
              TVShows
            </button> */}
            </div>

            <form className='flex gap-2 items-stretch mb-8 max-w-2xl mx-auto' onSubmit={handleSearch}>
              <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={"Search for  " + activeTab}
                className='w-full p-2 rounded bg-gray-800 text-white'
              />
              <button className='bg-red-600 hover:bg-red-700 text-white p-2 rounded'>
                <Search className='size-6' />
              </button>
            </form>

              <div className='flex flex-wrap justify-evenly'>
                {results.map((result)=>{ 
                    if(!result?.primaryImage)return null;
                    return(
                      <div key ={result.id} className='bg-gray-800 p-4 rounded mb-[50px] w-[325px]'>
                         {activeTab === "movieName"?(
                          <Link to={"/movie/" +  result.original} onClick={()=>{setContenttype(activeTab)}}>
                          <img src={result.primaryImage} alt="" className='h-[390px] width-[100%] object-cover rounded-lg' />
                          <h2 className='mt-2'>{result.originalTitle}</h2>
                          </Link>
                         ):(
                          <Link to={'/watch/' + result.id}>
                          <img src={result.primaryImage} alt="" className='h-[390px] w-[100%] object-cover rounded-lg'/>
                          <h2 className='mt-2'>{result.originalTitle}</h2>
                          </Link >
                         )

                         } 
                    </div>
                   ) 
                  }
                  )
                }
              </div>
          
        </div>
    </div>
  )
}

export default SearchPage

