import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Services from './Pages/Services/Services';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Talent from './Pages/Talent/Talent';
import Teams from './Pages/Teams/Teams';

// Mount React app with routing
const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/talent" element={<Talent />} />
                <Route path="/teams" element={<Teams />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
