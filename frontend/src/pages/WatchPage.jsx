import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContentStore } from '../store/useAuthStore.js';
import Navbar from '../components/Navbar.jsx';
import axios from "axios";



const WatchPage = () => {
	const { id } = useParams();
	const [trailers, setTrailers] = useState([]);
	const { contentType } = useContentStore();



	useEffect(() => {
        const getTrailers = async () => {
            
			try {
				const res = await axios.get(`/api/v1/searchbyid/${id}`)
				setTrailers(res.data.content);
                
			} catch (error) {
                console.log(error.message)
			}
		};

		getTrailers();
	}, [contentType, id]);
        console.log(trailers)

	return (
		<div className='bg-black min-h-screen text-white'>
			<div className='mx-auto container px-4 py-8 h-full'>
				<Navbar />
             
				<div className='flex flex-col md:flex-row justify-between gap-20 max-w-6xl mx-auto mt-10 md:flex-wrap'>
                <img
						src={trailers?.primaryImage}
						alt='Poster image'
						className='max-h-[600px] rounded-md'
					/>
                
					<div className='mb-4 md:mb-0'>
						<h2 className='text-5xl font-bold text-balance'>{trailers?.originalTitle || trailers?.primaryTitle}</h2>

						<p className='mt-2 text-lg'>
							{trailers?.adult ? (
								<span className='text-red-600'>18+</span>
							) : (
								<span className='text-green-600'>PG-13</span>
							)}{" "}
						</p>
                        <p className='mt-2 text-lg'>{trailers?.releaseDate}	</p>
						<p className='mt-4 text-lg mb-6'>{trailers?.description}</p>
                        <p className="text-lg">IMDB Movie Url: <Link to={trailers?.url} className='text-lg text-blue-600 underline'> {trailers?.url}</Link>    
                        </p>
                        
					</div>
					
				</div>
                
         
                
                                 				
			</div>
		</div>
	);
};
export default WatchPage;