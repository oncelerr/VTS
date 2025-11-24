import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Pages/Homepage/Home';
import Services from './Pages/Services/Services';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Talent from './Pages/Talent/Talent';
import Teams from './Pages/Teams/Teams';
import Roles from './Pages/Roles/Roles';
import Approach from './Pages/Approach/Approach';
import Judgement from './Pages/Judgement/Judgement';
import Case from './Pages/Case/Case';
import Inner from './components/Inner/Inner';
import Story from './Pages/Story/Story';
import Team from './Pages/Team/Team'
import Contact from './Pages/Contact/Contact';


// Component to handle animated route transitions
function AnimatedRoutes() {
    const location = useLocation();

    const ExternalRedirect = ({ url }) => {
        React.useEffect(() => {
            window.location.href = url;
        }, [url]);

        return <div></div>;
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Inner><Home /></Inner>} />
                <Route path="/services" element={<Inner><Services /></Inner>} />
                <Route path="/talent" element={<Inner><Talent /></Inner>} />
                <Route path="/teams" element={<Inner><Teams /></Inner>} />
                <Route path="/approach" element={<Inner><Approach /></Inner>} />
                <Route path="/roles" element={<Inner><Roles /></Inner>} />
                <Route path="/judgement-model" element={<Inner><Judgement /></Inner>} />
                <Route path="/case-study" element={<Inner><Case /></Inner>} />
                <Route path="/our-story" element={<Inner><Story /></Inner>} />
                <Route path="/our-team" element={<Inner><Team /></Inner>} />
                <Route path="/contact" element={<Inner><Contact /></Inner>} />
                <Route
                    path="/cms"
                    element={
                        <Inner>
                            <ExternalRedirect url="https://cms.hivecore.live/login" />
                        </Inner>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}

// Mount React app with routing
const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
        </BrowserRouter>
    );
}
