import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gambar1 from '../assets/Gambar-1.jpg';
import Gambar2 from '../assets/Gambar-2.png';
import Gambar3 from '../assets/Gambar-3.png';
import Gambar4 from '../assets/Gambar-4.png';

function LandingPage() {
  return (
    <>
      <Navbar />
      <div className='bg-slate-900 w-screen min-h-screen'>
        {/* Hero Section */}
        <div className="relative">
          <img src={Gambar1} alt="Hero" className="w-full h-screen object-cover opacity-50" />
          <div className="absolute bg-black/50 backdrop-blur top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold text-white mb-6 z-10">Sewa Kamera dengan Mudah</h1>
            <p className="text-xl text-gray-300 mb-10 z-10">
              Temukan kamera terbaik untuk kebutuhan fotografi Anda. Mudah, cepat, dan terpercaya.
            </p>
            <a href="/register" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition duration-300 z-10">
              Mulai Sewa Sekarang
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Kenapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <img src={Gambar2} alt="Kamera Terbaik" className="mb-4 rounded" />
              <h3 className="text-xl font-bold text-white mb-4">Pilihan Kamera Terbaik</h3>
              <p className="text-gray-300">
                Kami menyediakan berbagai jenis kamera dan lensa dengan kualitas terbaik untuk setiap kebutuhan Anda.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <img src={Gambar3} alt="Proses Sewa Mudah" className="mb-4 rounded" />
              <h3 className="text-xl font-bold text-white mb-4">Proses Sewa yang Mudah</h3>
              <p className="text-gray-300">
                Sewa kamera dalam hitungan menit. Prosesnya mudah, cepat, dan transparan.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <img src={Gambar4} alt="Pelayanan Terpercaya" className="mb-4 rounded" />
              <h3 className="text-xl font-bold text-white mb-4">Pelayanan Terpercaya</h3>
              <p className="text-gray-300">
                Kami menawarkan pelayanan pelanggan yang ramah dan selalu siap membantu Anda.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto py-16 px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Siap Sewa Kamera?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Daftar sekarang dan mulai sewa kamera favorit Anda untuk momen-momen spesial.
          </p>
          <a href="/register" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded transition duration-300">
            Daftar Sekarang
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
