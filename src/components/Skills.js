import React from 'react';
import { FiCode, FiServer, FiTool, FiFigma } from "react-icons/fi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaChrome,
  FaAngular,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiTypescript, SiReactbootstrap, SiRedux, SiExpress, SiMongodb, SiJsonwebtokens, SiSocketdotio, SiPostman, SiNetlify, SiVercel } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";


const mui = "/assets/mui.png";
const chadcn = "/assets/chadcn.png";
const reactIcons = "/assets/react-icons.png";
const axios = "/assets/axios.png";
const windSurf = "/assets/windSurf.png";
const cursorAI = "/assets/cursor.png";


const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
    { name: 'Next.js', icon: <RiNextjsFill className="text-black dark:text-white" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500" /> },
    { name: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-cyan-500" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
    { name: 'Material UI', icon: <img src={mui} width={20} height={20} alt="mui" className="text-blue-500" /> },
    { name: 'Shadcn UI', icon: <img src={chadcn} width={15} height={15} alt="chadcn" className="dark:invert" /> },
    { name: 'React Bootstrap', icon: <SiReactbootstrap className="text-purple-500" /> },
    { name: 'React Icons', icon: <img src={reactIcons} width={18} height={18} alt="react-icons" className="text-cyan-500" /> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion className="text-purple-500" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-500" /> },
    { name: 'Axios', icon: <img src={axios} width={18} height={18} alt="axios" className="dark:invert" /> },
    { name: 'Figma', icon: <FiFigma className="text-purple-500" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-black-500" /> },
    { name: 'Firebase', icon: <RiFirebaseFill className="text-yellow-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Postgress', icon: <BiLogoPostgresql className="text-blue-400" /> },
    { name: 'JSON Web Token', icon: <SiJsonwebtokens className="text-black-500" /> },
    { name: 'Web Sockets', icon: <SiSocketdotio className="text-black-500" /> },
    { name: 'Socket.io', icon: <SiSocketdotio className="text-black-500" /> }
  ];

  const toolsSkills = [
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
    { name: 'WindSurf', icon: <img src={windSurf} width={18} height={18} alt="windSurf" className="dark:invert" /> },
    { name: 'Cursor AI', icon: <img src={cursorAI} width={18} height={18} alt="cursorAI" className="dark:invert" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
    { name: 'Chrome DevTools', icon: <FaChrome className="text-blue-500" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-teal-400" /> },
    { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> }
  ];

  const SkillCard = ({ title, skills, icon, bgColor, iconBg }) => (
    <div className={`relative p-4 sm:p-6 rounded-lg border-2 border-indigo-600
              shadow-[4px_4px_0px_0px_rgba(67,56,202,0.9)]
              hover:shadow-[6px_6px_12px_0px_rgba(67,56,202,0.5)]
              dark:shadow-[4px_4px_0px_0px_rgba(55,65,81,0.9)]
              dark:hover:shadow-[6px_6px_12px_0px_rgba(55,65,81,0.5)]
              scale-100 hover:scale-[1.02] hover:border-indigo-700
              dark:hover:border-indigo-500
              transition-all duration-300 ease-in-out select-none h-full
              bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
              before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:before:bg-[radial-gradient(#4b5563_1.5px,transparent_1.5px)]
              before:bg-[length:20px_20px] before:opacity-30 before:rounded-lg before:-z-10
              overflow-hidden group`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/50 dark:to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.1)_0%,transparent_30%),radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.1)_0%,transparent_30%)]"></div>
      </div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className={`relative p-2.5 sm:p-3.5 rounded-lg bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600
            shadow-[2px_2px_0px_0px_rgba(67,56,202,0.5)]
            hover:shadow-[3px_3px_6px_0px_rgba(67,56,202,0.7)]
            hover:rotate-3
            transition-all duration-300 ease-in-out mr-4 text-white`}>
            {React.cloneElement(icon, { className: 'text-white' })}
          </div>
          <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-200">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {title === 'Frontend' && 'Building modern, responsive web applications with React ecosystem. Proficient in creating innovative and user-friendly interfaces.'}
          {title === 'Backend' && 'Developing server-side applications and RESTful APIs. Gaining experience in handling data, implementing robust authentication and authorization systems, and ensuring optimal performance. Focusing on fundamental error handling, middleware integration and secure protocols to design efficient and reliable backend architecture.'}
          {title === 'Tools' && 'Utilizing a robust set of tools for development, system management, version control, and seamless DevOps experiences.'}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`group relative flex items-center gap-2 px-1.5 py-1 rounded-lg
                border border-indigo-600/30 dark:border-indigo-600/30
                bg-white dark:bg-slate-900/90
                hover:bg-indigo-50 dark:hover:bg-indigo-900/50 dark:text-white
                hover:border-indigo-500 dark:hover:border-indigo-400
                hover:scale-125 hover:shadow-lg hover:z-10
                hover:-translate-y-1 hover:rotate-2
                transition-all duration-300 ease-in-out cursor-pointer select-none
                text-xs font-medium ${skill.color}`}
            >
              <span className="text-base">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 animate-slideIn py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full
            border-2 border-indigo-600 text-indigo-600 dark:text-gray-200
            shadow-[3px_3px_0px_0px_rgba(192,132,252,0.7)]
            bg-gradient-to-r from-indigo-100/80 to-violet-100/80
            dark:from-indigo-900/30 dark:to-violet-900/30
            transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(192,132,252,0.9)]
            text-sm sm:text-base mb-4">
            <span className="font-medium">🛠️ Skills & Technologies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4f46e5] dark:text-white mb-4">
            My Technical Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Mastering modern technologies to create efficient and scalable solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SkillCard
              title="Frontend"
              skills={frontendSkills}
              icon={
                <FiCode className="w-6 h-6 text-blue-600" />
              }
              bgColor="bg-white dark:bg-gray-800"
              iconBg="bg-blue-100 dark:bg-blue-900"
            />
          </div>

          <div>
            <SkillCard
              title="Backend"
              skills={backendSkills}
              icon={
                <FiServer className="w-6 h-6 text-purple-600" />
              }
              bgColor="bg-white dark:bg-gray-800"
              iconBg="bg-purple-100 dark:bg-purple-900"
            />
          </div>

          <div>
            <SkillCard
              title="Tools"
              skills={toolsSkills}
              icon={
                <FiTool className="w-6 h-6 text-orange-600" />
              }
              bgColor="bg-white dark:bg-gray-800"
              iconBg="bg-orange-100 dark:bg-orange-900"
            />
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
