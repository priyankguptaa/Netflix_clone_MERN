import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { useAuthStore } from '../store/useAuthStore.js';
import {Eye, EyeOff} from "lucide-react"

function SignUpPage() {
    const {searchParams} = new URL(document.location)
    const emailValue = searchParams.get("email")
    
    

    const [formData, setFormData] = useState({
        email:emailValue || "",
        username:"",
        password:"",
    });    

    const {signup} = useAuthStore()

    const handleSubmit = (e) => {
        e.preventDefault() 
        signup(formData)
    }


  return (
    
    <div className='bg-image h-screen w-full'> 
    <Header/> 
        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md '>
                <h1 className='text-center text-white text-2xl font-bold mb-4'>SignUp</h1>
                <form className ="space-y-4" onSubmit={handleSubmit}>
                    <label htmlFor="email" className='text-sm font-medium text-gray-300 block'>Email</label>
                    <input type="text"
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none 
                    focus:ring'
                    placeholder='you@example.com'
                    id='email'
                    value={formData.email}
                    onChange={(e) => setFormData({...formData,email:e.target.value})}
                    />
                    
                    <label htmlFor="username" className='text-sm font-medium text-gray-300 block'>Username</label>
                    <input type="text"
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none 
                    focus:ring'
                    placeholder='Enter your username'
                    id='username'
                    value ={formData.username}
                    onChange={(e)=>setFormData({...formData,username:e.target.value})}
                    />

                    <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>Password</label>

                    <div className='relative'>
                        
                    <input 
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none 
                    focus:ring'
                    type="password"
                    placeholder='*****'
                    id='password'
                    value={formData.password}
                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                    />
                    {/* {Showpassword ? 
                    (<EyeOff size="21" color="#fff" className='absolute z-index-10 right-[12px] top-[31%] cursor-pointer' onClick={passwordeye()}/> ):
                    (<Eye size="21" color="#fff" className='absolute z-index-10 right-[12px] top-[31%] cursor-pointer'/> )
                    } */}
                    
                    </div>

                    <button type="submit" className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 cursor-pointer'>
                        Signup
                    </button>
                </form>
                <div className='text-center text-gray-600'>
                    Already a member?
                    <Link to={"/signin"} className='ml-2 text-red-500 hover:underline'>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage
