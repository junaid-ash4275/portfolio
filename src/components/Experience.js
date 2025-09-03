import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-slideIn pr-8 md:pr-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary">Frontend Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">XPRT Computing</p>
            <p className="text-sm text-gray-500">2023 - Present</p>
            <p className="mt-2">Developed modern web applications using React and Node.js.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-primary">Backend Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">XPRT Computing</p>
            <p className="text-sm text-gray-500">2023 - Present</p>
            <p className="mt-2">Designed user interfaces with focus on usability and aesthetics.</p>
          </div>
        </div>
        {/* Adjust to match experiance1.png and experiance2.png */}
      </div>
    </section>
  );
};

export default Experience;
