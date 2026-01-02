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
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary/10 via-white to-secondary/10 dark:from-primary/20 dark:via-gray-900 dark:to-secondary/20">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/70 dark:bg-gray-800/70 shadow-inner">
                    <FaGraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary dark:text-secondary">
                      Learning journey
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Academic timeline</h2>
                  </div>
                </div>
                <span className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">
                  Evidence of disciplined problem-solving and lifelong curiosity.
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
              <div className="relative p-6 md:p-8">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-gray-200 dark:via-gray-700 to-secondary/40" />
                <div className="space-y-10">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="relative pl-14"
                    >
                      <span className="absolute left-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-primary/30 text-sm font-semibold text-primary dark:text-secondary">
                        {education.length - index}
                      </span>
                      <div className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                              {edu.degree}
                            </h3>
                            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                              {edu.institution}
                            </p>
                          </div>
                          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 px-3 py-1 rounded-full">
                            {edu.period}
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="inline-flex items-center gap-2">
                            <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
                            {edu.location}
                          </span>
                          <span className="inline-flex items-center gap-2 text-primary dark:text-secondary font-medium">
                            <span className="inline-flex h-2 w-2 rounded-full bg-secondary/70" />
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default EducationModal