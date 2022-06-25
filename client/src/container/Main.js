import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Browse from '../pages/Browse';
import Exchange from '../pages/Exchange';
import College from '../pages/College';
import Student from '../pages/Student';
import Donate from '../pages/Donate';

function Main() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/college' element={<College />} />
        <Route path='/student' element={<Student />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
