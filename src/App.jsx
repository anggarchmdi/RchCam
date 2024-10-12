import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import Home from './Page/Home';
import Update from './Page/Update';
import NotFound from './Page/NotFound';
import Login from './Page/Login'
import Register from './Page/Register';
import Pilihan from './Page/Pilihan';
import AddClient from './Page/AddClient';
import AddCamera from './Page/AddCamera';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/update' element={<Update />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/pilihan' element={<Pilihan />} />
        <Route path='/add-client' element={<AddClient />} />
        <Route path='/add-camera' element={<AddCamera />} />
        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
