import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 animate-slideIn pr-8 md:pr-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
        {/* Adjust to match skills.png */}
      </div>
    </section>
  );
};

export default Skills;
