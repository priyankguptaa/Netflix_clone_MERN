import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { useAuthStore } from '../store/useAuthStore.js';

function SignInPage() {
    
  const [formData, setFormData] = useState({
      email:"",
      password:"",
  });

    const {signin} = useAuthStore()

    const handleSubmit = (e)=>{
      e.preventDefault()
      signin(formData)
  }

  return (
    <div className='bg-image h-screen w-full'> 
    <Header/>     
        <div className='flex justify-center items-center mt-20 mx-3'>
            <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md '>
                <h1 className='text-center text-white text-2xl font-bold mb-4'>SignIN</h1>
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
                    
                    <label htmlFor="password" className='text-sm font-medium text-gray-300 block'>Password</label>
                    <input 
                    className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none 
                    focus:ring'
                    type="password"
                    placeholder='*****'
                    id='password'
                    value={formData.password}
                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                    />

                    <button type="submit" className='w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 cursor-pointer'>
                        Signin
                    </button>
                </form>
                <div className='text-center text-gray-600'>
                    Not a member?
                    <Link to={"/signup"} className='ml-2 text-red-500 hover:underline'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignInPage
