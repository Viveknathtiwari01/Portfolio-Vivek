'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaAws,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiFirebase,
  SiSpring,
  SiPostman,
  SiVercel,
  SiClerk,
} from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
    {name:'C',icon:FaJs,color:'#A8B400',category:'Programming'},
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Programming' },
    {name:'Next.js',icon:SiNextdotjs,color:'#000000',category:'Frontend'},
    { name: 'Java Core', icon: FaJava, color: '#007396', category: 'Programming' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Programming' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'Programming' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
   {name:'Prisma ORM',icon:SiTypescript,color:'#2D3748',category:'Backend'},
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
    {name:'MongoDB Atlas',icon:SiMongodb,color:'#47A248',category:'Database'},
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'Frontend' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'Tools' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'Tools' },
    {name:'Postman',icon:SiPostman,color:'#FF6C37',category:'Tools'},
    {name:'Vercel',icon:SiVercel,color:'#000000',category:'Tools'},
    {name:'Clerk',icon:SiClerk,color:'#000000',category:'Tools'},
    { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', category: 'AI/ML' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', category: 'AI/ML' },
  ]

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Technical Skills</h2>
          <p className="paragraph max-w-3xl mx-auto">
            I have experience with a wide range of technologies and tools. Here are some of my key
            technical skills:
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category} className="w-full">
              <h3 className="heading-secondary text-center mb-8">{category}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ scale: 1.05 }}
                      className="card p-6 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-300 w-[200px]"
                    >
                      <div className="relative w-16 h-16 mb-4">
                        <div
                          className="absolute inset-0 rounded-full opacity-20"
                          style={{ backgroundColor: skill.color }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <skill.icon
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                          />
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </h4>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills