import React from 'react';
import { FaUniversity, FaCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

const Academic = () => {
  return (
    <section id="academic" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-slideIn py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border-2 border-indigo-600 text-indigo-600 dark:text-gray-200 shadow-[3px_3px_0px_0px_rgba(192,132,252,0.7)] bg-gradient-to-r from-indigo-100/80 to-violet-100/80 dark:from-indigo-900/30 dark:to-violet-900/30 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(192,132,252,0.9)] text-sm sm:text-base mb-6">
            <span className="text-indigo-600 dark:text-gray-200 text-sm sm:text-base font-medium">🎓 Education & Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            My Academic Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-md md:max-w-xl mx-auto">
            Building a strong foundation through continuous learning and professional development
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Education Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">Education</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Formal academic degrees showcasing foundational knowledge.
            </p>

            <div className="space-y-4">
              {/* Degree 1 */}
              <div className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-indigo-600 dark:border-gray-700 shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)] dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 w-full absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]">
                <div className="flex items-start space-x-4">
                  <div className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      B.S Computer Science
                    </h4>
                    <div className="w-full lg:w-auto lg:ml-auto flex flex-col lg:flex-row lg:justify-end items-center space-y-4 lg:space-x-4 lg:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <FaUniversity className="w-4 h-4 mr-1 text-indigo-600" />
                        The University of Lahore, Lahore
                      </span>
                      <span className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-1 text-indigo-600" />
                        2019 - 2023
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Degree 2 */}
              <div className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-indigo-600 dark:border-gray-700 shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)] dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 w-full absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]">
                <div className="flex items-start space-x-4">
                  <div className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Diploma in Information Technology
                    </h4>
                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <FaUniversity className="w-4 h-4 mr-1 text-indigo-600" />
                        Punjab institute of IT, Lahore
                      </span>
                      <span className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-1 text-indigo-600" />
                        2022 - 2023
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-indigo-600 dark:border-gray-700 shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)] dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 w-full absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]">
                <div className="flex items-start space-x-4">
                  <div className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      FSc Pre-Engineering
                    </h4>
                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <FaUniversity className="w-4 h-4 mr-1 text-indigo-600" />
                        Fedral Board of Education, Lahore
                      </span>
                      <span className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-1 text-indigo-600" />
                        2016 - 2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">Certifications</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Professional certifications demonstrating specialized development skills.
            </p>

            <div className="space-y-4">
              {/* Certification 1 */}
              <div className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-indigo-600 dark:border-gray-700 shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)] dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 w-full absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]">
                <div className="flex items-start space-x-4">
                  <div className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6">
                    <LiaCertificateSolid className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Certified Cloud Native Developer
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <FaUniversity className="w-4 h-4 mr-1 text-indigo-600" />
                          PIAIC
                        </span>
                        <span className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 mr-1 text-indigo-600" />
                          2024
                        </span>
                      </div>
                      {/* <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                        View Credentials
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-indigo-600 dark:border-gray-700 shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)] dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 w-full absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]">
                <div className="flex items-start space-x-4">
                  <div className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6">
                    <LiaCertificateSolid className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Certificate of Completion AI Course
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <FaUniversity className="w-4 h-4 mr-1 text-indigo-600" />
                          Udemy
                        </span>
                        <span className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 mr-1 text-indigo-600" />
                          2023
                        </span>
                      </div>
                      {/* <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                        View Credentials
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-indigo-600 dark:border-gray-700 shadow-[3px_3px_0px_0px_rgba(67,56,202,0.9)] sm:shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[4px_4px_0px_0px_rgba(67,56,202,1)] sm:hover:shadow-[5px_5px_0px_0px_rgba(67,56,202,1)] dark:shadow-[3px_3px_0px_0px_rgba(55,65,81,0.9)] sm:dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)] dark:hover:shadow-[4px_4px_0px_0px_rgba(55,65,81,1)] sm:dark:hover:shadow-[5px_5px_0px_0px_rgba(55,65,81,1)] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-indigo-50 dark:hover:bg-gray-750 w-full absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]">
                <div className="flex items-start space-x-4">
                  <div className="hidden p-2 sm:p-3 bg-indigo-600 rounded-lg w-10 h-10 sm:w-12 sm:h-12
                        md:flex items-center justify-center transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-6">
                    <LiaCertificateSolid className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Cursor AI Course
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <FaUniversity className="w-4 h-4 mr-1 text-indigo-600" />
                          Coursera
                        </span>
                        <span className="flex items-center">
                          <FaCalendarAlt className="w-4 h-4 mr-1 text-indigo-600" />
                          2023
                        </span>
                      </div>
                      {/* <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline ml-12">
                        View Credentials
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
