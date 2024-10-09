import React from 'react'
import LogoImg from '../assets/Logo.png'

function Navbar() {
  return (
    <div className='w-full container mx-auto shadow-md'>
    <div className="p-2 grid grid-cols-2">
        <div className="flex justify-start">
            {/* Logo */}
            <div className="rounded-full w-10 h-10 flex gap-2 items-center">
                <img src={LogoImg} alt="Logo" className='w-full bg-cover rounded-full' />
                <h1 className='text-[1.3rem] font-semibold text-white'>RchCamera</h1>
            </div>
        </div>
            {/* Button */}
            <div className="flex justify-end ml-auto items-center gap-4 mr-4">
               <button className='text-white transition-all transform hover:scale-90 duration-300 text-[1.1rem]'>Login</button>
               <span className='bg-white h-8 w-0.5'></span>
               <button className='text-white transition-all transform hover:scale-90 duration-300 text-[1.1rem]'>Daftar</button>
            </div>
    </div>
    </div>
  )
}

export default Navbar
