import React from 'react';

const TechnicalExpertise = () => {
  return (
    <section id="technical-expertise" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-800 animate-slideIn">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Languages</h3>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Tools</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
        {/* Adjust to match technical experties.png */}
      </div>
    </section>
  );
};

export default TechnicalExpertise;
