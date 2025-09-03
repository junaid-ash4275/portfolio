import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 animate-slideIn pr-8 md:pr-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-300">Description of project 1.</p>
            <a href="#" className="text-primary hover:underline">View Project</a>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-300">Description of project 2.</p>
            <a href="#" className="text-primary hover:underline">View Project</a>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary">Project 3</h3>
            <p className="text-gray-600 dark:text-gray-300">Description of project 3.</p>
            <a href="#" className="text-primary hover:underline">View Project</a>
          </div>
        </div>
        {/* Adjust to match project1.png and project2.png */}
      </div>
    </section>
  );
};

export default Projects;
