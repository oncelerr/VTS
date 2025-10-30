import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

const App = () => {
    return React.createElement(
        'div', 
        { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" },
        React.createElement(Navbar, null),
        React.createElement(Hero, null),
        React.createElement(Features, null),
        React.createElement(Footer, null)
    );
};

export default App;
