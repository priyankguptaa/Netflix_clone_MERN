// import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import { Info, Play } from 'lucide-react'
import { useContentStore } from '../store/useAuthStore.js'
import { MOVIES_CATEGORIES, TVSHOWS_CATEGORIES } from '../utils/constants.js'
import MovieSlider from './MovieSlider.jsx'
import useGetPopularContent from '../hooks/useGetPopularContent.jsx'


function HomeScreen() {
    const {popularContent}= useGetPopularContent();
    const {contentType} = useContentStore();

    if(!popularContent) 
      return (
      <div className='h-screen text-white relative'>
        <Navbar/>
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center -z-10 shimmer'/>
      </div>
    );

  return (
    <>
      <div className= 'relative h-screen  text-white'>
        <Navbar/>
        <img src={popularContent?.primaryImage} alt="" className='absolute top-0 left-0 -z-50 object-cover w-full h-full' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 -z-50' aria-hidden='true'/>
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32'>  
            <div className='bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10'/>
              <div className='max-w-2xl'>
                <h1 className='mt-4 text-6xl font-extrabold text-balance'>
                  {popularContent?.originalTitle || popularContent?.primaryTitle}</h1>
                <p className='mt-2 text-lg'>{popularContent?.startYear} | {popularContent?.isAdult?"18+":"PG-13"}</p>
                <p className='mt-4 text-lg'>{popularContent?.description.length > 200? popularContent?.description.slice(0,200)+"...":popularContent?.description}</p>
                <div className='mt-8 flex'>
                  <Link to={`/watch/${popularContent?.id}`} className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center'>
                    <Play className='size-6 mr-2 fill-black' />
                    play
                  </Link>
                  <Link to={`/watch/${popularContent?.id}`} className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center'>
                    <Info className='size-6  mr-2 fill-black'/>
                    More Info
                  </Link>
                </div>
              </div>
            </div>
      </div>
      <div className='flex flex-col gap-10 bg-black py-10'>
        {contentType === "movie" ? (
          MOVIES_CATEGORIES.map((category) => <MovieSlider key={category} category={category}/>)
        ) : (
          TVSHOWS_CATEGORIES.map((category) => <MovieSlider key={category} category={category}/>)
        )}
      </div>
    </>
  )
}

export default HomeScreen
