import { useEffect, useRef, useState } from "react";
import { useContentStore } from "../store/useAuthStore.js"
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronLeft,ChevronRight } from "lucide-react";

function MovieSlider({category}) {
    const {contentType} = useContentStore();
    const [content,setContent]= useState([])
    const [showArrow,setShowArrow] = useState(false)

    const sliderRef = useRef()

    const formattedCategoryName = 
    category.replaceAll("-"," ").toUpperCase() 
    const formattedContentType = contentType === 'movie' ? "" : "SHOWS"

    useEffect(()=>{
        const getContent = async()=>{
            const res = await axios.get(`/api/v1/${contentType}/${category}`)
            setContent(res.data.content)
        }
        getContent()
    },[contentType,category])

    const scrollLeft= ()=>{
        if(sliderRef.current){
            sliderRef.current.scrollBy({left: -sliderRef.current.offsetWidth, behavior:'smooth'});
        }
    }
    const scrollRight= ()=>{
        sliderRef.current.scrollBy({left:sliderRef.current.offsetWidth, behavior:'smooth'});
        
    }


  return (
    <div className="bg-black text-white relative px-5 md:px-20"
    onMouseEnter={()=>setShowArrow(true)}
    onMouseLeave={()=> setShowArrow(false)}
    >
      <h2 className="mb-4 text-2xl font-bold">
        {formattedCategoryName}{formattedContentType}
      </h2>

      <div className="flex space-x-4 overflow-x-scroll no-scrollbar" ref={sliderRef}>
        {
            content.map((item) => {
                    if(!item?.primaryImage)return null;
                    return(
              <Link to={`/watch/${item.id}`} className="relative group" key={item.id}>
                    <div className="rounded-lg overflow-hidden h-[240px] w-[257px]">
                        <img src={item.primaryImage} alt="movie-img" className="transition-transform duration-300 ease-in-out group-hover:scale-125 h-[100%] w-[100%] object-cover"  />
                    </div>
                    <p className="mt-2 text-center">{item?.originalTitle || item?.primaryTitle}</p>
                </Link>)
})
        }
      </div>
      {showArrow && (
        <>
        <button className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex justify-center items-center size-12 rounded-full bg-black bg-opacity-50 text-white z-10 hover:bg-opacity-75" onClick={scrollLeft}>
            <ChevronLeft size={24}/>
        </button>
        <button className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex justify-center items-center size-12 rounded-full bg-black bg-opacity-50 text-white z-10 hover:bg-opacity-75" onClick={scrollRight}>
            <ChevronRight size={24}/>
        </button>
        </>
      )}
    </div>
  )
}

export default MovieSlider
