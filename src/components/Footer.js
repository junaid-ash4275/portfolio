import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">About</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#academic" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Academics</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">Work</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#technical-expertise" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Technical Expertise</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resume</a>
              </li>
              <li>
                <a href="mailto:ashrafjunaid.73@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold uppercase tracking-wider text-gray-900 dark:text-gray-100">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://linkedin.com/in/junaid-ashraf-b927b21a1" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/junaid-ash4275" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
              </li>
              <li>
                <a href="https://x.com/JunaidA59754315" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">X (Twitter)</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {year} Junaid Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
