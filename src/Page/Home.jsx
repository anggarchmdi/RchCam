import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/pilihan')
  }
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-slate-900 container mx-auto px-8 py-8">
      {/* button add data */}
      <div className="text-white mb-8 mt-16">
           <button onClick={handleCreate} className='bg-blue-700 px-4 py-2 rounded-xl font-semibold transition-all transform hover:scale-95 duration-500 hover:bg-blue-800' >Tambah Data</button>
      </div>
        {/* Table Penyewa */}
        <h2 className="text-2xl font-bold text-white mb-4 mt-12">Data Penyewa Kamera</h2>
        <div className="overflow-x-hidden mb-8">
          <table className="min-w-full bg-slate-800 text-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4">No</th>
                <th className="py-2 px-4">Nama Penyewa</th>
                <th className="py-2 px-4">Alamat</th>
                <th className="py-2 px-4">Tanggal Sewa</th>
                <th className="py-2 px-4">Tanggal Kembali</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* Data penyewa akan di-map di sini */}
              <tr>
                <td className="py-2 px-4 text-center">1</td>
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">Jakarta</td>
                <td className="py-2 px-4">01-10-2024</td>
                <td className="py-2 px-4">05-10-2024</td>
                <td className="py-2 px-4 text-center">
                  <span className="px-2 py-1 bg-green-500 text-xs rounded-full">Sudah Kembali</span>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded ml-2 hover:bg-red-600">Hapus</button>
                </td>
              </tr>
              {/* Tambahkan data lain di sini */}
            </tbody>
          </table>
        </div>

        {/* Table Kamera Ready */}
        <h2 className="text-2xl font-bold text-white mb-4">Daftar Kamera Ready</h2>
        <div className="overflow-x-hidden">
          <table className="min-w-full bg-slate-800 text-white rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4">No</th>
                <th className="py-2 px-4">Nama Kamera</th>
                <th className="py-2 px-4">Tipe</th>
                <th className="py-2 px-4">Harga Sewa/Hari</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* Data kamera yang ready akan di-map di sini */}
              <tr>
                <td className="py-2 px-4 text-center">1</td>
                <td className="py-2 px-4">Canon EOS R5</td>
                <td className="py-2 px-4">Mirrorless</td>
                <td className="py-2 px-4 text-center">Rp 500.000</td>
                <td className="py-2 px-4 text-center">
                  <span className="px-2 py-1 bg-green-500 text-xs rounded-full">Ready</span>
                </td>
                <td className="py-2 px-4 text-center">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded ml-2 hover:bg-red-600">Hapus</button>
                </td>
              </tr>
              {/* Tambahkan data lain di sini */}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
