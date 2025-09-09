import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Academic from './components/Academic';
// import TechnicalExpertise from './components/TechnicalExpertise';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false); // Default to dark mode
  const [loading, setLoading] = useState(true);

  //this useEffects handles scoll progress bar
  useEffect(() => {
    const handleScroll = () => {
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000); // Simulate loading time
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={darkMode ? 'dark' : ''} style={{ backgroundColor: darkMode ? '#0f172a' : '#ffffff' }}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="bg-white dark:bg-gray-900">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Academic />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
