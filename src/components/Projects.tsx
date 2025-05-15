'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiScikitlearn,
  SiOpenai,
  SiGoogle,
  SiTailwindcss,
  SiStreamlit,
  SiNextdotjs,
} from 'react-icons/si'

const Projects = () => {
  const projects = [
    {
      title: 'Weather App',
      description: 'A weather forecast web application using OpenWeatherMap API with real-time weather data and responsive design.',
      techStack: [
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      ],
      github: 'https://github.com/Viveknathtiwari01/Weather-app',
      live: 'https://weather-app-demo.com',
      image: '/projects/weather-app.png',
    },
    {
      title: 'CHATVERSE',
      description: 'A chat application with real-time messaging, user authentication, one-to-one chat, group chat, real-time chat with ChatGPT using OpenAI API, real-time image generation using DALL-E API, and a clean UI.',
      techStack: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'OpenAI', icon: SiOpenai, color: '#000000' },
        { name: 'DALL-E', icon: SiOpenai, color: '#000000' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
        
      ],
      github: 'https://github.com/Viveknathtiwari01/CHATVERSE',
      image: '/projects/contacts-app.png',
    },
    {
      title: 'WhatsApp Chat Analyzer',
      description: 'Machine learning-based chat analysis tool for WhatsApp conversations. Analyzes the chat data and provides insights about the user with sentiment analysis, word frequency, and more.',
      techStack: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
        { name: 'Streamlit', icon: SiStreamlit, color: '#FF6F00' },
      ],
      github: 'https://github.com/Viveknathtiwari01/WhatsApp-Chat-Analysis',
      image: '/projects/chat-analyzer.png',
    },
    {
      title: 'AI Mock Interviewer',
      description: 'An AI-powered mock interviewer that helps you to prepare for your interviews with personalized suggestions.',
      techStack: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
        { name: 'Next Js', icon: SiNextdotjs, color: '#000000' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'OpenAI', icon: SiOpenai, color: '#000000' },
      ],
      github: 'https://github.com/Viveknathtiwari01/AI_MOCK_INTERVIEWER',
      image: '/projects/movies-app.png',
    },
    {
      title: 'AI-Powered Career Coach',
      description: 'An AI-powered career coach that helps you to find jobs insights, market trends, mock interview preparation, resume builder, and cover letter builder.',
      techStack: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Gemini API', icon: SiGoogle, color: '#000000' },
      ],
      github: 'https://github.com/yourusername/ai-interviewer',
      live: 'https://ai-career-coach-55ye.vercel.app/',
      image: '/projects/ai-interviewer.png',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Featured Projects</h2>
          <p className="paragraph max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills and experience in different
            technologies and domains.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="h-48 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-500/10 dark:to-secondary-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-600 dark:text-primary-400 opacity-20">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="paragraph">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: `${tech.color}20`,
                        color: tech.color,
                      }}
                    >
                      <tech.icon className="w-4 h-4" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 