import React, { useState, useEffect, useRef } from 'react';
import { FaProjectDiagram, FaBriefcase, FaLaptopCode, FaTools, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiHome, FiCode, FiBriefcase } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuGraduationCap, LuContact } from "react-icons/lu";

const Home = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show scroll button when user scrolls down with debounce for better performance
  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30);

  const jobTitles = [
    'React Developer',
    'Full Stack Developer',
    'Next.js Developer',
    'Web Developer'
  ];

  const currentText = jobTitles[currentIndex];
  const timeoutRef = useRef(null);

  const navigationItems = [
    { id: 'home', icon: FiHome, label: 'Home', href: '#home' },
    { id: 'skills', icon: FiCode, label: 'Skills', href: '#skills' },
    { id: 'experience', icon: FiBriefcase, label: 'Experience', href: '#experience' },
    { id: 'projects', icon: IoExtensionPuzzleOutline, label: 'Projects', href: '#projects' },
    { id: 'academic', icon: LuGraduationCap, label: 'Academic', href: '#academic' },
    { id: 'contact', icon: LuContact, label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    if (isDeleting) {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setTypingSpeed(30);
      }
    } else {
      if (displayText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(30);
        }, 2000);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, currentText, isDeleting, typingSpeed]);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add scroll event listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add some offset

      // Get all sections
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
        top: 0,
        bottom: 0,
        height: 0
      }));

      // Calculate positions
      sections.forEach(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          section.top = rect.top + window.scrollY;
          section.height = rect.height;
          section.bottom = section.top + section.height;
        }
      });

      // Find the section in view
      const currentSection = sections.find(section =>
        section.top <= scrollPosition &&
        section.bottom > scrollPosition
      );

      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden pb-32">

      <div className='container relative pb-40 flex flex-col md:flex-row items-center justify-center mt-10 mx-auto px-4 md:px-8 lg:px-12'>
        {/* Left Content */}
        <div className="w-full md:w-1/2 animate-slide-up">
          <div className="welcome-text mb-2 font-semibold text-sm text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 py-3 px-4 rounded-full inline-block transition-all duration-300 hover:scale-80 hover:shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900/50">
            Welcome to my portfolio
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">
            Hi, I'm <span className="text-indigo-600 dark:text-white-400">Junaid Ashraf</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium mb-6 h-12 md:h-14 flex items-center dark:text-white">
            I'm a <span className="text-indigo-600 font-bold dark:text-indigo-400 ml-2">{displayText}</span>
            <span className="ml-1 animate-pulse">|</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
            Experienced React Frontend Developer specializing in crafting scalable,
            high-performance web applications. Dedicated to creating seamless
            user experiences through innovative solutions, solving complex
            problems, and tackling intricate technical challenges with passion and
            precision.
          </p>

          {/* Buttons and Social Links */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#resume"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-3 rounded-md flex items-center gap-2 transition-all"
            >
              <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>

            <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-3 md:gap-4 animate-slide-right">
              <a href="https://wa.me/923151728837" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-700 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                <FaWhatsapp className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#6d28d9] transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" />
              </a>
              <a href="https://github.com/junaid-ash4275" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-700 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                <FiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#6d28d9] transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" />
              </a>
              <a href="https://linkedin.com/in/junaid-ashraf-b927b21a1" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-700 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                <FiLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#6d28d9] transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" />
              </a>
              <a href="mailto:junaid.ashraf4275@gmail.com" className="group w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-700 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                <MdOutlineEmail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#6d28d9] transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" />
              </a>
              <a href="tel:+923151728837" className="group w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-700 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out">
                <MdOutlineLocalPhone className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-[#6d28d9] transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Code Snippet */}
        <div className="w-full md:w-3/6">
          <div className="code-editor-container">
            {/* Code Editor Header */}
            <div className="code-editor-header">
              <div className="code-editor-dots">
                <span className="code-editor-dot-red"></span>
                <span className="code-editor-dot-yellow"></span>
                <span className="code-editor-dot-green"></span>
              </div>
              <div className="code-editor-language">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="code-editor-language-icon">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <span className="code-editor-language-text">JavaScript</span>
              </div>
            </div>

            {/* Code Content */}
            <pre className="code-editor-content">
              <div className="code-editor-background"></div>
              <code className="block">
                <span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-green-600 dark:text-green-400">Programmer</span> <span className="text-blue-600 dark:text-blue-400">=</span> <span className="text-green-600 dark:text-green-400">{`{`}</span>
                <br />  <span className="text-purple-600 dark:text-purple-400">name</span><span className="text-blue-600 dark:text-blue-400">:</span> <span className="text-orange-600 dark:text-orange-400">"Junaid Ashraf"</span><span className="text-blue-600 dark:text-blue-400">,</span>
                <br />  <span className="text-purple-600 dark:text-purple-400">title</span><span className="text-blue-600 dark:text-blue-400">:</span> <span className="text-orange-600 dark:text-orange-400">"Frontend Developer | Junior MERN Stack Dev"</span><span className="text-blue-600 dark:text-blue-400">,</span>
                <br />  <span className="text-purple-600 dark:text-purple-400">skills</span><span className="text-blue-600 dark:text-blue-400">:</span> <span className="text-green-600 dark:text-green-400">{`[`}</span>
                <br />    <span className="text-orange-600 dark:text-orange-400">"React"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"Next.js"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"TypeScript"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"JavaScript"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"Tailwind CSS"</span><span className="text-blue-600 dark:text-blue-400">,</span>
                <br />    <span className="text-orange-600 dark:text-orange-400">"Node.js"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"Express"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"MongoDB"</span><span className="text-blue-600 dark:text-blue-400">,</span> <span className="text-orange-600 dark:text-orange-400">"REST APIs"</span>
                <br />  <span className="text-green-600 dark:text-green-400">{`]`}</span><span className="text-blue-600 dark:text-blue-400">,</span>
                <br />  <span className="text-purple-600 dark:text-purple-400">openToWork</span><span className="text-blue-600 dark:text-blue-400">:</span> <span className="text-blue-600 dark:text-blue-400">true</span><span className="text-blue-600 dark:text-blue-400">,</span>
                <br />  <span className="text-purple-600 dark:text-purple-400">hireable</span><span className="text-blue-600 dark:text-blue-400">:</span> <span className="text-green-600 dark:text-green-400">function</span><span className="text-green-600 dark:text-green-400">()</span> <span className="text-green-600 dark:text-green-400">{`{`}</span>
                <br />    <span className="text-blue-600 dark:text-blue-400">return</span> <span className="text-green-600 dark:text-green-400">(</span>
                <br />      <span className="text-purple-600 dark:text-purple-400">this</span><span className="text-orange-600 dark:text-orange-400">.skills.includes</span><span className="text-green-600 dark:text-green-400">(</span><span className="text-orange-600 dark:text-orange-400">"React"</span><span className="text-green-600 dark:text-green-400">)</span> <span className="text-orange-600 dark:text-orange-400">&&</span>
                <br />      <span className="text-purple-600 dark:text-purple-400">this</span><span className="text-orange-600 dark:text-orange-400">.skills.includes</span><span className="text-green-600 dark:text-green-400">(</span><span className="text-orange-600 dark:text-orange-400">"TypeScript"</span><span className="text-green-600 dark:text-green-400">)</span> <span className="text-orange-600 dark:text-orange-400">&&</span>
                <br />      <span className="text-purple-600 dark:text-purple-400">this</span><span className="text-orange-600 dark:text-orange-400">.skills.length <span className="text-blue-600 dark:text-blue-400">{'>='}</span> 5</span>
                <br />    <span className="text-green-600 dark:text-green-400">)</span><span className="text-blue-600 dark:text-blue-400">;</span>
                <br />  <span className="text-green-600 dark:text-green-400">{`}`}</span>
                <br /><span className="text-green-600 dark:text-green-400">{`}`}</span><span className="text-blue-600 dark:text-blue-400">;</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Stats Tiles */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="w-full px-4">
            <div className="grid grid-cols-4 gap-4 w-full max-w-8xl mx-auto">
              {/* Projects Completed */}
              <div className="tile-container">
                <div className="tile-content">
                  <div className="tile-icon projects">
                    <FaProjectDiagram className="text-white" size={20} />
                  </div>
                  <div className="tile-text">
                    <span className="tile-number">10+</span>
                    <span className="tile-label text-gray-600 dark:text-gray-300">Projects Completed</span>
                  </div>
                </div>
              </div>

              {/* Years of Experience */}
              <div className="tile-container">
                <div className="tile-content">
                  <div className="tile-icon experience">
                    <FaBriefcase className="text-white" size={20} />
                  </div>
                  <div className="tile-text">
                    <span className="tile-number">3+</span>
                    <span className="tile-label text-gray-600 dark:text-gray-300">Years of Experience</span>
                  </div>
                </div>
              </div>

              {/* Skills & Technologies */}
              <div className="tile-container">
                <div className="tile-content">
                  <div className="tile-icon skills">
                    <FaLaptopCode className="text-white" size={20} />
                  </div>
                  <div className="tile-text">
                    <span className="tile-number">16+</span>
                    <span className="tile-label text-gray-600 dark:text-gray-300  ">Skills & Technologies</span>
                  </div>
                </div>
              </div>

              {/* Tools Used */}
              <div className="tile-container">
                <div className="tile-content">
                  <div className="tile-icon tools">
                    <FaTools className="text-white" size={20} />
                  </div>
                  <div className="tile-text">
                    <span className="tile-number">10+</span>
                    <span className="tile-label text-gray-600 dark:text-gray-300">Tools Used</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Integrated Sidebar Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 dark:border-gray-700 py-6 px-3 flex flex-col items-center">
          <div className="relative flex flex-col items-center">
            {/* Removed top spacer since we don't want any line above the first icon */}
            <div className="h-0 w-1 bg-transparent"></div>

            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;

              return (
                <React.Fragment key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`
                      relative p-2.5 rounded-full transition-all duration-300 group
                      ${isActive
                        ? 'bg-indigo-500 text-white shadow-lg scale-110'
                        : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                      }
                    `}
                    title={item.label}
                  >
                    <IconComponent className="text-lg" />

                    {/* Tooltip */}
                    <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {item.label}
                      </div>
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800 dark:border-l-gray-700"></div>
                    </div>
                  </a>

                  {/* Connecting line between items - positioned below each icon */}
                  {index < navigationItems.length - 1 && (
                    <div className="h-6 w-0.5 bg-gray-300 dark:bg-gray-500"></div>
                  )}
                </React.Fragment>
              );
            })}

            {/* Removed bottom spacer since we don't want any line below the last icon */}
            <div className="h-0 w-1 bg-transparent"></div>

            {/* Active indicator line */}
            <div
              className="absolute left-1/2 w-0.5 bg-indigo-500 transition-all duration-500 -z-10"
              style={{
                height: `${(100 / navigationItems.length) * 0.8}%`,
                top: `${(100 / navigationItems.length) * 0.1 +
                  (100 / navigationItems.length) * navigationItems.findIndex(item => item.id === activeSection)
                  }%`,
                transform: 'translateX(-50%)',
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button with smooth transitions */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out transform ${
        showScrollButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          className="flex items-center px-2 py-2 text-sm border border-indigo-600
            shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
            dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
            transition-all duration-300 ease-in-out select-none
            dark:bg-gray-800 dark:text-white p-3 bg-white text-black rounded-full
            hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Home;
