import React, { useState } from 'react'
import {ChevronRight} from 'lucide-react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function AuthScreen() {
    const [email,setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/signup?email=" + email)
    }

  return (
    
    <div className='bg-image'>
        <Header/>
        <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Unlimited movies, TV shows, and more</h1>
            <p className='text-lg mb-4'>Watch anywhere.Cancel anytime</p>
            <p className='mb-4'>Ready to watch?Enter your email to create or restart your membership.</p>

            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-4 w-1/2'>
                <input className='p-2 rounded flex-1 bg-black/80 border border-gray-700 text-white' 
                    type="text"
                    id="email"
                    value={email}
                    placeholder='you@example.com'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center '>
                    Get Started
                    <ChevronRight className='size-8 md:size-10'/>
                </button>
            </form>
        </div>

        <div className='h-2 w-full bg-[#201f1f]'/>

        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                <div className='flex-1 md:text-left text-center'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>Enjoy on your tv</h2>
                    <p className='text-lg md:text-xl' >
                        Watch on Smart Tv's, Playstation, Xbox, Chromecast, Apple Tv, Blu-ray players, and more.
                    </p>
                </div>
                <div className='flex-1 relative'>
                    <img src="./tv.png" alt="tv image" className='mt-4 z-20 relative'/>
                    <video className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2' 
                        playsInline
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src='./hero-vid.m4v' type='video/mp4' 
                        className=''/>
                    </video>
                </div>
            </div>
        </div>

        <div className='h-2 w-full bg-[#201f1f]'/>

        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
            <div className='flex-1'>
                <div className='relative'>
                    <img src="./stranger-things-lg.png" alt="tv image" className='mt-4'/>
                    <div className='absolute flex items-center gap-2 bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-25 border border-slate-500 rounded-md px-2'>
                        <img src="/stranger-things-sm.png" alt="image" className='h-full'/>
                        <div className='flex justify-between items-center w-full'>
                            <div className='flex flex-col gap-0'>
                                <span className='text-lg font-bold'>Stranger Things</span>
                                <span className='text-sm text-blue-500'>Downloading...</span>
                            </div>
                            <img src="/download-icon.gif" alt="" className='h-12'/>
                        </div>
                    </div>
                </div>
                    
                </div>
                <div className='flex-1 md:text-left text-center'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>Download your shows to watch offline</h2>
                    <p className='text-lg md:text-xl' >
                        Save your favourite easily and always have something to watch
                    </p>
                </div>                
            </div>
        </div>

        <div className='h-2 w-full bg-[#201f1f]'/>

        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                <div className='flex-1 md:text-left text-center'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>Watch everywhere</h2>
                    <p className='text-lg md:text-xl' >
                        Stream unlimited movies and Tv shows on Phone, Tablet, laptop, and Tv.
                    </p>
                </div>
                <div className='flex-1 relative overflow-hidden'>
                    <img src="./device-pile.png" alt="tv image" className='mt-4 z-20 relative'/>
                    <video className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 max-w-[63%]' 
                        playsInline
                        autoPlay={true}
                        muted
                        loop
                    >
                        <source src='./video-devices.m4v' type='video/mp4' 
                        className=''/>
                    </video>
                </div>
            </div>
        </div>

        <div className='h-2 w-full bg-[#201f1f]'/>

        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
            <div className='flex-1'>
                <div className='relative'>
                    <img src="./kids.png" alt="tv image" className='mt-4'/>
                    
                </div>
                    
                </div>
                <div className='flex-1 md:text-left text-center'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>Create profiles for kids</h2>
                    <p className='text-lg md:text-xl' >
                        Send kids on adventures with their favourite characters in a space made just for them
                    </p>
                </div>                
            </div>
        </div>
    </div>    
    
  )
}

export default AuthScreen
