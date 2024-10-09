import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import Home from './Page/Home';
import Update from './Page/Update';
import NotFound from './Page/NotFound';
import Login from './Page/Login'
import Register from './Page/Register';

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
        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
