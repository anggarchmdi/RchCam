import React from 'react'
import Navbar from '../components/Navbar'
import orangImg from '../assets/orang.jpg'
import kameraImg from '../assets/Kamera.jpg'
import { useNavigate } from 'react-router-dom'

function Pilihan() {
  const navigate = useNavigate();

  const handleAddClient = () => {
    navigate('/add-client')
  }

  const handleAddCamera = () => {
    navigate('/add-camera')
  }

  return (
    <>
    <Navbar />
    <div className="w-screen h-screen bg-slate-900 container mx-auto flex justify-center items-center overflow-y-auto md:overflow-y-hidden">
        <div className="w-auto h-auto">
            <div className="grid mt-48 md:mt-0 md:grid-cols-2 gap-4">
                {/* card */}
                <div className="relative duration-300 w-96 h-96 rounded-lg flex flex-col justify-center items-center p-2 md:p-0">
                    <img src={orangImg} alt="" className='rounded-lg object-cover opacity-75' />
                <div className="p-2 md:p-0 w-full h-full absolute z-10 bg-black/50 rounded-lg flex flex-col justify-center items-center text-white backdrop-blur-sm">
                <h1 className='text-[1.3rem] text-center p-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, earum.</h1>
                <button onClick={handleAddClient} className='bg-blue-600 px-4 py-2 rounded-lg bottom-3 absolute hover:bg-blue-700 transition-all transform hover:scale-95 duration-300 font-semibold'>Tambah Penyewa</button>
                </div>
                </div>
                {/* card */}
                <div className="relative duration-300 w-96 h-96 rounded-lg flex flex-col justify-center items-center md:p-0 p-2">
                  <img src={kameraImg} alt="" className='rounded-lg object-cover w-auto opacity-75' />
                <div className="p-2 md:p-0 absolute rounded-lg w-full h-full z-10 bg-black/50 flex justify-center items-center text-white backdrop-blur-sm">
                  <h1 className='text-[1.3rem] text-center p-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, in!</h1>
                  <button onClick={handleAddCamera} className='bg-blue-600 px-4 py-2 rounded-lg bottom-3 absolute hover:bg-blue-700 font-semibold transition-all transform hover:scale-95 duration-300'>Tambah Kamera</button>
                </div>
                </div>
            </div>
        {/* card  */}
        </div>

    </div>
    </>
  )
}

export default Pilihan
