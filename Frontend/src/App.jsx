import React from 'react';
import Home from './pages/Home';
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Auth from './pages/Auth';
import About from './pages/About';

import AddSpot from './pages/AddSpot';
import KonkanHarvest from './pages/KonkanHarvest';
import BookingPage from './pages/BookingPage';
import PlaceDetail from './components/PlaceDetail';  
import BookStay from './pages/BookStay'; 

function App() {
  return(
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />  
        
    
        <Route path="/auth" element={<Auth />} /> 

        <Route path="/about" element={<About />} />
        <Route path="/addSpot" element={<AddSpot />} />
        <Route path="/konkanharvest" element={<KonkanHarvest />} />
        <Route path="/book/:placeName" element={<BookingPage />} />
        <Route path="/place/:placeName" element={<PlaceDetail />} />
        <Route path="/book-stay/:placeName" element={<BookStay />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;