import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Prescripto",
      description: "Easy appointment scheduling and management for doctors, patients and admin with multiple dashboards",
      image: "/assets/prescripto.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Prebuild UI", "SchadCN"],
      category: "FullStack",
      github: "https://github.com/junaid-ash4275/prescripto"
    },
    {
      id: 2,
      title: "Job Portal",
      description: "Job portal for job seekers and employers with advanced search and filtering options",
      image: "/assets/job-portal.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS,", "Aceternity UI"],
      category: "FullStack",
      github: "https://github.com/junaid-ash4275/job-portal"
    },
    {
      id: 3,
      title: "Portfolio",
      description: "A modern portfolio website to showcase my projects, skills, and experience. Built with React, Node.js, and Tailwind CSS. Features responsive design and interactive UI.",
      image: "/assets/portfolio.png",
      technologies: ["React", "Node.js", "Tailwind CSS", "Shadcn UI"],
      category: "FullStack",
      link: "#home", // When this icon is clicked, just scroll to the top of app (same tab)
    },
    {
      id: 4,
      title: "AI Code Reviewer",
      description: "A code reviewer web application powered by AI to help developers improve their code quality and efficiency. It uses Language Model (LLM) to provide detailed, actionable feedback and suggestions for code improvements.",
      image: "/assets/ai-code-reviewer.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS", "Stripe", "Argon Dashboard UI", "Material UI"],
      category: "FullStack",
      link: "https://ai-code-reviewer-client.vercel.app/",

    }
  ];

  const maxCarouselPosition = Math.ceil(projects.length / 2) - 1;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % (maxCarouselPosition + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + (maxCarouselPosition + 1)) % (maxCarouselPosition + 1));
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-48">
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
            My Projects
          </div>
          <h2 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] 
            pt-4 sm:pt-5 md:pt-6 
            font-bold text-indigo-600 dark:text-white 
            tracking-tight leading-tight
            transition-all duration-300">
            My Recent Works
          </h2>
          <p className="
            text-gray-600 dark:text-gray-300
            text-sm sm:text-base md:text-lg 
            pt-2 sm:pt-3 md:pt-4 
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto
            leading-relaxed">
            Showcasing technical expertise through innovative and impactful projects
          </p>
        </div>

        
        {/* Project Category */}
        <div className="dark:bg-gray-800 py-4 px-6 flex items-center space-x-4 rounded-lg max-w-8xl mx-auto">
          <div className="w-1 h-16 bg-blue-500 rounded"></div>
          <div className="flex items-center -space-x-2">
            <FaReact className="text-blue-600 text-5xl animate-spin-slow relative z-30" />
            <SiNextdotjs className="text-black dark:text-white text-5xl relative z-20" />
            <FaNodeJs className="text-green-600 text-5xl relative z-30" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 transition-colors duration-300">FullStack Projects</h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 group-hover/section:text-gray-900 dark:group-hover/section:text-gray-200 transition-colors duration-300">End-to-end solutions with both frontend and backend</p>
          </div>
        </div>

        {/* cards */}
        <div className="relative mt-8 pt-8">
          {/* Left Navigation Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-0 -ml-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-indigo-600 dark:bg-indigo-600 border border-indigo-600 shadow-[2px_2px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(67,56,202,1)] focus:outline-none group transition-all duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-700"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Right Navigation Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-0 -mr-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-indigo-600 dark:bg-indigo-600 border border-indigo-600 shadow-[2px_2px_0px_0px_rgba(67,56,202,0.9)] hover:shadow-[3px_3px_0px_0px_rgba(67,56,202,1)] focus:outline-none group transition-all duration-300 hover:bg-indigo-700 dark:hover:bg-indigo-700"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_100%] lg:flex-[0_0_50%] mb-8 p-2 lg:pr-4"
                >
                  <div className="relative group p-8 bg-white dark:bg-gray-800 rounded-xl 
                        border-2 border-indigo-600 dark:border-gray-700 
                        shadow-[6px_6px_0px_0px_rgba(67,56,202,0.9)] 
                        hover:shadow-[8px_8px_0px_0px_rgba(67,56,202,1)] 
                        dark:shadow-[6px_6px_0px_0px_rgba(55,65,81,0.9)] 
                        dark:hover:shadow-[8px_8px_0px_0px_rgba(55,65,81,1)] 
                        transition-all duration-300 select-none flex flex-col 
                        h-full min-h-[34rem] hover:-translate-y-2 hover:-translate-x-1 
                        cursor-pointer"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99,102,241,0.2) 1px, transparent 0)`,
                      backgroundSize: '10px 10px'
                    }}>

                    {/* Project Image */}
                    <div className="relative h-96 w-full mb-6 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <div className="text-white text-center p-4">
                          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-2xl">🚀</span>
                          </div>
                          <p className="text-sm opacity-80">Image not available</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="flex gap-2">
                        {
                          project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                              <FaExternalLinkAlt className="w-4 h-4" />
                            </a>
                          ) : null
                        }
                        {
                          project.github ? (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                              <FiGithub className="w-5 h-5" />
                            </a>
                          ) : null
                        }
                      </div>
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-base mb-6 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="group relative flex items-center gap-2 px-1.5 py-1 rounded-lg
                border border-indigo-600/30 dark:border-indigo-600/30
                bg-white dark:bg-slate-900/90 dark:text-white
                hover:bg-indigo-50 dark:hover:bg-indigo-900/50
                hover:border-indigo-500 dark:hover:border-indigo-400
                hover:scale-125 hover:shadow-lg hover:z-10
                hover:-translate-y-1 hover:rotate-2
                transition-all duration-300 ease-in-out cursor-pointer select-none
                text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentProject
                  ? 'bg-blue-600 dark:bg-blue-400'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                aria-label={`Go to project group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
