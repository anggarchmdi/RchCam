import React from 'react'
import LogoImg from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    const handleRegister = () => {
        navigate('/register');
    }

  return (
    <div className='w-full container mx-auto shadow-md bg-slate-900 top-0 fixed z-20'>
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
               <button className='text-white transition-all transform hover:scale-90 duration-300 text-[1.1rem]' onClick={handleLogin}>Login</button>
               <span className='bg-white h-8 w-0.5'></span>
               <button className='text-white transition-all transform hover:scale-90 duration-300 text-[1.1rem]' onClick={handleRegister}>Daftar</button>
            </div>
    </div>
    </div>
  )
}

export default Navbar
