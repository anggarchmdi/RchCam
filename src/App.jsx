import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Page/LandingPage';
import Home from './Page/Home';
import Update from './Page/Update';
import NotFound from './Page/NotFound';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/update' element={<Update />} />
        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
