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
            I'm a passionate software developer with a strong interest in machine learning and AI, dedicated to building innovative, intelligent solutions that solve real-world problems and create meaningful impact.
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
                src="/profile_3.jpg"
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
                Hello! I'm a software developer deeply passionate about building intelligent and elegant solutions that merge the power of modern web technologies with machine learning.
              </p>
              <p>
                My journey in tech began during my university days, where I discovered a keen interest in AI and data-driven applications. Since then, I’ve been dedicated to developing full-stack applications and integrating machine learning models to solve real-world problems.
              </p>
              <p>
                I specialize in full-stack development and have hands-on experience with machine learning frameworks like Scikit-learn, TensorFlow, and NLP libraries. I enjoy exploring the intersection of AI and user experience to deliver smart, impactful products.
              </p>
              <p>
                When I'm not coding, you’ll find me experimenting with new AI models, contributing to open-source projects, or writing technical blogs to share what I learn with the community.
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