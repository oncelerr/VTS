import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    
    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = async () => {
            try {
                const response = await window.axios.get('/api/user');
                if (response.status === 200) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        
        // Check system preference for dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
        
        checkAuth();
    }, []);
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className="w-full py-4 px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center">
                <a href="/" className="text-red-600 dark:text-red-500 text-2xl font-bold">
                    {/* Laravel logo can be added here */}
                    Laravel
                </a>
            </div>
            
            <div className="flex items-center space-x-4">
                <button 
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
                
                {isAuthenticated ? (
                    <a 
                        href="/dashboard" 
                        className="px-5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-sm hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-gray-100 transition-colors"
                    >
                        Dashboard
                    </a>
                ) : (
                    <div className="flex items-center space-x-2">
                        <a 
                            href="/login" 
                            className="px-5 py-1.5 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-sm transition-colors"
                        >
                            Log in
                        </a>
                        <a 
                            href="/register" 
                            className="px-5 py-1.5 border border-gray-300 dark:border-gray-600 rounded-sm hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-gray-100 transition-colors"
                        >
                            Register
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
