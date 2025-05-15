'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGraduationCap } from 'react-icons/fa'

interface EducationModalProps {
  isOpen: boolean
  onClose: () => void
}

const EducationModal = ({ isOpen, onClose }: EducationModalProps) => {
  const education = [
    {
      degree: 'Masters of Computer Applications (MCA)',
      institution: 'Dr. A. P. J. Abdul Kalam Technical University',
      location: 'Lucknow, India',
      period: 'August 2023-Present',
      grade: 'CGPA: 8.48 (3rd Sem aggregate)',
    },
    {
      degree: 'Bachelors of Computer Applications',
      institution: 'Patna University, Patna College',
      location: 'Patna, India',
      period: 'July 2019-December 2022',
      grade: 'CGPA: 8.71/10',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'GOVT Shri Harihar High School Patilar',
      location: 'Bihar, India',
      period: 'July 2017-March 2019',
      grade: 'Percentage: 81.6%',
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'Shri Harihar High School Patilar',
      location: 'Bihar, India',
      period: 'June 2017',
      grade: 'Percentage: 85.4%, Mathematics: 100/100',
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary-500/10">
                  <FaGraduationCap className="w-8 h-8 text-primary-500" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
              <div className="p-6 md:p-8 space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                      {edu.degree}
                    </h3>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center">
                        <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="mt-3 text-primary-500 font-medium text-lg">{edu.grade}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default EducationModal 