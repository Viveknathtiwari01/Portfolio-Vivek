"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiJavascript,
  SiHtml5, SiCss3, SiTensorflow, SiScikitlearn, SiOpenai, SiGoogle,
  SiTailwindcss, SiStreamlit, SiNextdotjs, SiPostgresql, SiClerk,
  SiFlask, SiDocker, SiFiles, SiTypescript, SiPrisma, SiMysql,
  SiPandas, SiSequelize, SiPlotly, SiNumpy, SiDatadog,
} from "react-icons/si";
import { BsFiletypePdf } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      title: "WhatsApp Chat Analysis — AI Insight Tool",
      description:
        "ML project analyzing exported WhatsApp chats for sentiment trends, emoji usage, word clouds, and activity patterns using NLP.",
      techStack: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Pandas", icon: SiPandas, color: "#704ff4" },
        { name: "Matplotlib", icon: SiPlotly, color: "#3b6ee6" },
        { name: "Seaborn", icon: SiSequelize, color: "#00B4D8" },
        { name: "NLTK", icon: SiNumpy, color: "#A54399" },
        { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
        { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
      ],
      github: "https://github.com/Viveknathtiwari01/WhatsApp_Chat_Anaysis_Updated",
      live: "https://whatsapp-chat-anaysis-vivek.streamlit.app/upload_file",
      image: "/projects/WhatsappChat.png",
    },
    {
      title: "Disease Diagnosis AI — Health Predictor",
      description:
        "AI system predicting diseases from user-input symptoms using custom-trained ML algorithms with a web interface.",
      techStack: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
        { name: "Pandas", icon: SiPandas, color: "#856beb" },
        { name: "NumPy", icon: SiNumpy, color: "#1caada" },
        { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
        { name: "Matplotlib", icon: SiPlotly, color: "#3b6ee6" },
      ],
      github: "https://github.com/Viveknathtiwari01/Disease-detection-system",
      live: "https://disease-detection-system-vivek.streamlit.app/",
      image: "/projects/disease_detection.png",
    },
    {
      title: "FitFussion — AI Wellness Platform",
      description:
        "Full-stack wellness app for habits, mood, goals, and personalized meal/workout plans with an AI coach powered by Gemini 2.0.",
      techStack: [
        { name: "Next.js", icon: SiNextdotjs, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Clerk", icon: SiClerk, color: "#3B49DF" },
        { name: "MySQL", icon: SiMysql, color: "#39b7d3" },
        { name: "Express", icon: SiExpress, color: "#47A248" },
        { name: "Prisma", icon: SiPrisma, color: "#10A37F" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "Gemini", icon: SiGoogle, color: "#4285F4" },
      ],
      github: "https://github.com/Viveknathtiwari01/Personalized-health-website",
      live: "https://wellnex.vercel.app/",
      image: "/projects/FitFussion.png",
    },
    {
      title: "HireMind — AI Career Coach",
      description:
        "AI career coach providing job insights, market trends, mock interviews, and resume/cover letter building.",
      techStack: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#61DAFB" },
        { name: "Gemini", icon: SiGoogle, color: "#4285F4" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "NeonDB", icon: SiPostgresql, color: "#336791" },
        { name: "Clerk", icon: SiClerk, color: "#E34F26" },
      ],
      github: "https://github.com/Viveknathtiwari01/AI_MOCK_INTERVIEWER",
      live: "https://ai-career-coach-55ye.vercel.app/",
      image: "/projects/hiremind.png",
    },
    {
      title: "Quotation Generation System",
      description:
        "Dynamic web app for customizable quotations with PDF upload/parsing, AI content analysis, and real-time PDF generation.",
      techStack: [
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Flask", icon: SiFlask, color: "#FF0000" },
        { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
        { name: "ReportLab", icon: SiFiles, color: "#FF0000" },
        { name: "pdf2image", icon: BsFiletypePdf, color: "#FF0000" },
      ],
      live: "https://pragati-enterprises.dev-server.karvatech.com/login?next=%2F",
      image: "/projects/pragati.png",
    },
    {
      title: "CHATVERSE — Real-time Chat App",
      description:
        "Chat app with real-time messaging, group chat, ChatGPT integration via OpenAI API, and DALL-E image generation.",
      techStack: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      ],
      github: "https://github.com/Viveknathtiwari01/CHATVERSE",
      image: "/projects/chatverse.png",
    },
    {
      title: "AI Mock Interviewer",
      description:
        "AI-powered mock interviewer with personalized suggestions to help prepare for technical interviews.",
      techStack: [
        { name: "Next.js", icon: SiNextdotjs, color: "#61DAFB" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
      ],
      github: "https://github.com/Viveknathtiwari01/AI_MOCK_INTERVIEWER",
      image: "/projects/ai-interviewer.png",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather forecast app using OpenWeatherMap API with responsive design and error handling.",
      techStack: [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      ],
      github: "https://github.com/Viveknathtiwari01/Weather-app",
      image: "/projects/weather-app.png",
    },
  ];

  return (
    <section id="projects" className="section-projects section-accent relative py-20 overflow-hidden">

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Projects</span>
          <h2 className="section-title">Featured work</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Platforms, AI experiments, and full-stack solutions shaped end-to-end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group glass-card flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-44">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-br dark:from-primary-500/15 dark:via-transparent dark:to-secondary-500/20" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 gap-4">
                <h3 className="font-jakarta text-base font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-secondary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border border-gray-100 dark:border-gray-700"
                      style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
                    >
                      <tech.icon className="w-3 h-3" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-secondary-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" /> Live
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
