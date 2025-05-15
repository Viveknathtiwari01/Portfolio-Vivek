'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa'
import EducationModal from './EducationModal'

const About = () => {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false)

  const highlights = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Computer Science graduate with a strong foundation in software development and algorithms.',
      onClick: () => setIsEducationModalOpen(true),
    },
    {
      icon: FaLaptopCode,
      title: 'Experience',
      description: 'Passionate developer with experience in full-stack development and machine learning.',
      onClick: () => {
        const experienceSection = document.getElementById('experience');
        if (experienceSection) {
          experienceSection.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
    {
      icon: FaRocket,
      title: 'Goals',
      description: 'Committed to creating innovative solutions and staying current with emerging technologies.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">About Me</h2>
          <p className="paragraph max-w-3xl mx-auto">
            I'm a passionate software developer with a keen interest in building innovative solutions
            that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/IMG-20250428-WA0011.jpg"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Hello! I'm a software developer with a passion for creating elegant solutions to complex
                problems. My journey in tech started during my university years, and I've been hooked
                ever since.
              </p>
              <p>
                I specialize in full-stack development with a focus on modern web technologies and
                machine learning applications. I love learning new technologies and applying them to
                solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open
                source projects, or sharing my knowledge through technical blog posts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors duration-300 ${
                    item.onClick ? 'cursor-pointer' : ''
                  }`}
                  onClick={item.onClick}
                >
                  <item.icon className="w-8 h-8 text-primary-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <EducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
      />
    </section>
  )
}

export default About 