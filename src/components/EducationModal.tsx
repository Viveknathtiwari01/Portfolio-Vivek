'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGraduationCap, FaMapMarkerAlt, FaStar, FaCalendarAlt } from 'react-icons/fa'

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
      period: 'August 2023-August 2025',
      grade: 'CGPA: 8.68',
      emoji: '🎓',
      color: '#6366f1',
    },
    {
      degree: 'Bachelors of Computer Applications (BCA)',
      institution: 'Patna University, Patna College',
      location: 'Patna, India',
      period: 'July 2019-December 2022',
      grade: 'CGPA: 8.71/10',
      emoji: '📚',
      color: '#6366f1',
    },
    {
      degree: 'Intermediate (12th)',
      institution: 'GOVT Shri Harihar High School Patilar',
      location: 'Bihar, India',
      period: 'July 2017-March 2019',
      grade: 'Percentage: 81.6%',
      emoji: '📖',
      color: '#6366f1',
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'Shri Harihar High School Patilar',
      location: 'Bihar, India',
      period: 'June 2017',
      grade: 'Percentage: 85.4%, Mathematics: 100/100',
      emoji: '🏫',
      color: '#6366f1',
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
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl shadow-indigo-500/10 border border-gray-200/60 dark:border-gray-700/60"
          >
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 z-10" />

            {/* Background */}
            <div className="absolute inset-0 bg-white dark:bg-gray-900" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-violet-50/30 dark:from-indigo-950/30 dark:via-transparent dark:to-violet-950/20" />

            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="absolute right-4 top-4 z-20 p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200/50 dark:border-gray-700/50"
            >
              <FaTimes className="w-4 h-4" />
            </motion.button>

            {/* Header */}
            <div className="relative p-7 md:p-8 pb-5 md:pb-6">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                  className="relative p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25"
                >
                  <FaGraduationCap className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 animate-pulse" />
                </motion.div>
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-[11px] uppercase tracking-[0.3em] font-bold text-indigo-600 dark:text-indigo-400"
                  >
                    Learning journey
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white"
                  >
                    Academic timeline
                  </motion.h2>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-lg"
              >
                Evidence of disciplined problem-solving and lifelong curiosity.
              </motion.p>
            </div>

            {/* Divider */}
            <div className="relative mx-7 md:mx-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

            {/* Content */}
            <div className="relative overflow-y-auto max-h-[calc(90vh-12rem)]">
              <div className="p-7 md:p-8 pt-6 space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20, y: 10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      delay: 0.15 + index * 0.1,
                    }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200 dark:hover:border-indigo-500/30"
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: edu.color }}
                    />

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                      style={{ backgroundColor: edu.color }}
                    />

                    <div className="relative p-5 md:p-6 pl-6 md:pl-7">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {/* Emoji badge */}
                          <motion.span
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg flex-shrink-0"
                            style={{ backgroundColor: `${edu.color}15` }}
                          >
                            {edu.emoji}
                          </motion.span>
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                              {edu.degree}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <span
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 border"
                          style={{
                            color: edu.color,
                            backgroundColor: `${edu.color}12`,
                            borderColor: `${edu.color}25`,
                          }}
                        >
                          <FaCalendarAlt className="w-2.5 h-2.5" />
                          {edu.period}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1.5 rounded-lg">
                          <FaMapMarkerAlt className="w-3 h-3 text-gray-400" />
                          {edu.location}
                        </span>
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg"
                          style={{
                            color: edu.color,
                            backgroundColor: `${edu.color}10`,
                          }}
                        >
                          <FaStar className="w-3 h-3" />
                          {edu.grade}
                        </span>
                      </div>
                    </div>
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