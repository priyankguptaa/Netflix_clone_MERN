import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore.js';

function Header() {
  const {user} = useAuthStore();
  return (
    <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to ={"/"}>
            <img src="/netflix-logo.png" alt="logo" className='w-52'/>
        </Link>
        {user ? "" :
        <nav className='bg-red-600 text-lg lg:text-lg px-1 lg:px-5 py-1 md:py-2 rounded flex justify-center items-center '>
          <Link to={"/signin"} className='text-white'>Signin</Link>
        </nav>
         }
    </header>
  )
}

export default Header;