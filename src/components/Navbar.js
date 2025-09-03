import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 w-full">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700">
        <div 
          className="h-full bg-indigo-600 dark:bg-blue-400 transition-all duration-300" 
          style={{ width: `${scrollProgress || 0}%` }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto h-full px-0 xl:px-7 2xl:px-6 2xl:max-w-screen-2xl">
        <div className="px-6 py-3 flex justify-between items-center">

          {/* branding */}
          <div className="text-xl font-semibold p-0.5 rounded-sm border-2 border-indigo-600 dark:border-gray-500 
        shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] 
        dark:shadow-[3px_3px_0px_0px_rgba(107,114,128,0.9)] 
        dark:hover:shadow-[5px_5px_0px_0px_rgba(107,114,128,1)]
        hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)]
        transition-shadow duration-200 font-mono text-indigo-700 dark:text-gray-300">
            &lt;Junaid Ashraf /&gt;
          </div>

          {/* navigation */}
          <button
            onClick={toggleDarkMode}
            className="relative flex items-center px-2 py-2 text-sm rounded-lg border-2 border-indigo-600 shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] transition-all duration-300 ease-in-out select-none dark:bg-gray-800 dark:text-white hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)] dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)] hover:border-indigo-700 dark:hover:border-indigo-500 hidden md:flex"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="w-5 h-5 text-yellow-400" /> : <FaMoon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
