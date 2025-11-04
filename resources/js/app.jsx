import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';

// Mount React app with routing
const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes here as needed */}
                {/* Example: <Route path="/about" element={<About />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
