import React from 'react';

const Academic = () => {
  return (
    <section id="academic" className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-slideIn pr-8 md:pr-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary">Academic</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Degree 1</h3>
            <p className="text-gray-600 dark:text-gray-300">University Name</p>
            <p className="text-sm text-gray-500">Year</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary">Degree 2</h3>
            <p className="text-gray-600 dark:text-gray-300">University Name</p>
            <p className="text-sm text-gray-500">Year</p>
          </div>
        </div>
        {/* Adjust to match academic.png and academic2.png */}
      </div>
    </section>
  );
};

export default Academic;
