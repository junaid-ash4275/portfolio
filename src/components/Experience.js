import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "React Developer",
      company: "XPRT Computing",
      location: "Lahore, Pakistan",
      dateRange: "Aug 2023 - Present",
      isRemote: false,
      description: "Building innovative solutions and delivering value across diverse roles and industries"
    },
    {
      id: 2,
      title: ".NET Developer",
      company: "XPRT Computing",
      location: "Lahore, Pakistan",
      dateRange: "Feb 2024 - Present",
      isRemote: false,
      description: "Developed modern web applications with focus on performance and user experience"
    },
    {
      id: 3,
      title: "MERN Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      dateRange: "Jan 2022 - Present",
      isRemote: true,
      description: "Created responsive web applications and collaborated with cross-functional teams"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 animate-slideIn py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            border-2 border-indigo-600 text-indigo-600 dark:text-indigo-200
            shadow-[3px_3px_0px_0px_rgba(99,102,241,0.7)]
            bg-gradient-to-r from-indigo-100/80 to-violet-100/80
            dark:from-indigo-900/40 dark:to-violet-900/40
            transform transition-all duration-300
            hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(99,102,241,0.9)]
            text-sm sm:text-base font-medium">
            💼 Work Experience
          </div>
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem]
            pt-4 sm:pt-5 md:pt-6
            font-bold text-indigo-600 dark:text-white
            tracking-tight leading-tight
            transition-all duration-300">
            My Professional Journey
          </h2>
          <p className="
            text-gray-600 dark:text-gray-300
            text-sm sm:text-base md:text-lg
            pt-2 sm:pt-3 md:pt-4
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto
            leading-relaxed">
            Building innovative solutions and delivering value across diverse roles and industries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500/0 via-indigo-600 to-indigo-500/0 hidden sm:block"></div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={experience.id} className="relative">
                  {/* Connecting lines - positioned relative to timeline center */}
                  {isLeft ? (
                    <div className="hidden sm:block h-[2px] w-[10%] absolute left-[40%] top-1/2 -translate-y-1/2 bg-gradient-to-l from-indigo-600 to-transparent dark:from-indigo-600 dark:to-gray-900"></div>
                  ) : (
                    <div className="hidden sm:block h-[2px] w-[10%] absolute left-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-transparent dark:from-indigo-600 dark:to-gray-900"></div>
                  )}

                  {/* Timeline item container */}
                  <div className={`relative flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} items-center min-h-56`}>
                    {/* Content Card */}
                    <div className={`w-full sm:w-[45%] max-w-2xl relative bg-white dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-600
                      shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
                      hover:shadow-[6px_6px_0px_0px_rgba(67,56,202,1)]
                      dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
                      dark:hover:shadow-[6px_6px_0px_0px_rgba(55,65,81,1)]
                      transition-all duration-300 select-none rounded-xl dark:bg-gray-800/90 p-6 sm:p-6 transform-gpu cursor-pointer ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)] rounded-xl pointer-events-none"></div>
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shadow-sm mb-4">
                        {experience.dateRange}
                      </div>

                      <div className="experience-title text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                        {experience.isRemote ? (
                          <span className="ml-2 text-sm font-normal bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                            🌐 Remote
                          </span>
                        ) : (
                          <span className="ml-2 text-sm font-normal bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                            On-site
                          </span>
                        )}
                      </div>

                      <div className="experience-company text-indigo-600 dark:text-indigo-300 font-medium mb-1">
                        🏢 {experience.company}
                      </div>

                      <div className="experience-location text-gray-600 dark:text-gray-300 text-sm mb-4">
                        📍 {experience.location}
                      </div>

                      <div className="experience-description text-gray-700 dark:text-gray-300">
                        {experience.description}
                      </div>
                    </div>

                    {/* Enhanced Timeline Dot with multi-layered pulse effect */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3 h-3 hidden sm:flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Outer pulse ring */}
                        <div
                          className="absolute -inset-3 rounded-full bg-indigo-600/20 animate-pulse"
                          style={{ transform: 'scale(0.8)' }}
                        ></div>
                        {/* Middle pulse ring */}
                        <div
                          className="absolute -inset-2 rounded-full bg-indigo-500/30 animate-pulse"
                          style={{
                            transform: 'scale(0.6)',
                            animationDuration: '2s',
                            animationDelay: '0.2s'
                          }}
                        ></div>
                        {/* Main dot with inner pulse */}
                        <div className="w-full h-full rounded-full bg-indigo-600 dark:bg-indigo-400 relative">
                          <div
                            className="absolute inset-0 rounded-full shadow-[0_0_5px_2px_rgba(99,102,241,0.8)] animate-pulse"
                            style={{
                              animationDuration: '1.5s',
                              animationDelay: '0.3s'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
