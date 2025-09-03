import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full hover:rotate-2 transition-transform z-50">
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;
