import React, { useState } from 'react';
import { FaHome, FaCode, FaGraduationCap, FaBriefcase, FaPuzzlePiece, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', icon: FaHome, label: 'Home', href: '#home' },
    { id: 'skills', icon: FaCode, label: 'Skills', href: '#skills' },
    { id: 'academic', icon: FaGraduationCap, label: 'Academic', href: '#academic' },
    { id: 'experience', icon: FaBriefcase, label: 'Experience', href: '#experience' },
    { id: 'projects', icon: FaPuzzlePiece, label: 'Projects', href: '#projects' },
    { id: 'contact', icon: FaUser, label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="bg-white rounded-full shadow-lg border border-gray-100 p-4 flex flex-col items-center space-y-6">
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative p-3 rounded-full transition-all duration-300 group
                ${isActive
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }
              `}
              title={item.label}
            >
              <IconComponent className="text-lg" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                  {item.label}
                </div>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
              </div>
            </a>
          );
        })}

        {/* Connecting line */}
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gray-200 transform -translate-x-1/2 -z-10"></div>
      </div>
    </div>
  );
};

export default Sidebar;
