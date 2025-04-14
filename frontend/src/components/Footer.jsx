
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='py-6 md:px-8 md:py-0 bg-black text-white border-gray-800'>
        <div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
            <p className=" text-balance text-center text-sm ">
                Built by
                <Link to={"https://github.com/priyankguptaa"}>Priyank Gupta</Link>    
                .The source code is available on{" "}
                <Link to={"https://github.com/priyankguptaa"}>Github</Link>
            </p>    
        </div>
    </footer>
    
  )
}

export default Footer
