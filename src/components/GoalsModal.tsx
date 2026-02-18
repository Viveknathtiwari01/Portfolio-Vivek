'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
    FaTimes,
    FaRocket,
    FaBrain,
    FaUsers,
    FaChartLine,
    FaDatabase,
} from 'react-icons/fa'
import {
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
} from 'react-icons/si'

interface GoalsModalProps {
    isOpen: boolean
    onClose: () => void
}

const GoalsModal = ({ isOpen, onClose }: GoalsModalProps) => {
    const currentStack = [
        { icon: SiReact, name: 'React', color: '#61DAFB' },
        { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
        { icon: SiExpress, name: 'Express', color: '#64748b' },
        { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
        { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    ]

    const goals = [
        {
            category: 'Near-term',
            items: [
                {
                    icon: FaBrain,
                    title: 'Integrate AI into Full-Stack Products',
                    description:
                        'Combine my MERN expertise with AI/ML — embedding LLMs, intelligent search, and data-driven features into production applications.',
                    tags: ['LLMs', 'RAG', 'MERN + AI'],
                    color: '#6366f1',
                },
                {
                    icon: FaChartLine,
                    title: 'Ship Scalable SaaS Products',
                    description:
                        'Build and launch end-to-end SaaS platforms with robust backends, clean APIs, and performance-first UX that drive real user impact.',
                    tags: ['SaaS', 'REST APIs', 'MySQL'],
                    color: '#8b5cf6',
                },
            ],
        },
        {
            category: 'Long-term',
            items: [
                {
                    icon: FaUsers,
                    title: 'Lead Engineering Teams',
                    description:
                        'Grow into a tech lead role — mentoring developers, owning architectural decisions, and shipping high-quality products at pace.',
                    tags: ['Tech Leadership', 'Mentoring', 'Architecture'],
                    color: '#6366f1',
                },
                {
                    icon: FaDatabase,
                    title: 'Architect for Scale & Resilience',
                    description:
                        'Design distributed, cloud-native systems that handle millions of users — mastering DevOps, microservices, and data infrastructure.',
                    tags: ['Cloud-Native', 'DevOps', 'Microservices'],
                    color: '#8b5cf6',
                },
            ],
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
                                    <FaRocket className="w-7 h-7 text-white" />
                                </motion.div>
                                <div>
                                    <motion.p
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.15 }}
                                        className="text-[11px] uppercase tracking-[0.3em] font-bold text-indigo-600 dark:text-indigo-400"
                                    >
                                        Vision & direction
                                    </motion.p>
                                    <motion.h2
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white"
                                    >
                                        Professional goals
                                    </motion.h2>
                                </div>
                            </div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-lg"
                            >
                                Where I&apos;m heading — building on my current stack to create larger impact.
                            </motion.p>

                            {/* Current stack pills */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="mt-3 flex items-center gap-2 flex-wrap"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">Currently working with</span>
                                {currentStack.map((tech) => {
                                    const TechIcon = tech.icon
                                    return (
                                        <span
                                            key={tech.name}
                                            className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60"
                                        >
                                            <TechIcon className="w-3 h-3" style={{ color: tech.color }} />
                                            <span className="text-gray-600 dark:text-gray-400">{tech.name}</span>
                                        </span>
                                    )
                                })}
                            </motion.div>
                        </div>

                        {/* Divider */}
                        <div className="relative mx-7 md:mx-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

                        {/* Content */}
                        <div className="relative overflow-y-auto max-h-[calc(90vh-12rem)]">
                            <div className="p-7 md:p-8 pt-6 space-y-8">
                                {goals.map((section, sIdx) => (
                                    <div key={section.category}>
                                        {/* Category header */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + sIdx * 0.15 }}
                                            className="flex items-center gap-3 mb-4"
                                        >
                                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20">
                                                {sIdx === 0 ? '🎯' : '🚀'} {section.category}
                                            </span>
                                            <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 dark:from-indigo-500/20 to-transparent" />
                                        </motion.div>

                                        {/* Goal cards */}
                                        <div className="space-y-3">
                                            {section.items.map((goal, gIdx) => {
                                                const GoalIcon = goal.icon
                                                return (
                                                    <motion.div
                                                        key={goal.title}
                                                        initial={{ opacity: 0, x: -20, y: 10 }}
                                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 300,
                                                            damping: 25,
                                                            delay: 0.25 + sIdx * 0.15 + gIdx * 0.08,
                                                        }}
                                                        whileHover={{ y: -2, scale: 1.01 }}
                                                        className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200 dark:hover:border-indigo-500/30"
                                                    >
                                                        {/* Left accent bar */}
                                                        <div
                                                            className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                                                            style={{ backgroundColor: goal.color }}
                                                        />

                                                        {/* Hover glow */}
                                                        <div
                                                            className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                                                            style={{ backgroundColor: goal.color }}
                                                        />

                                                        <div className="relative p-5 md:p-6 pl-6 md:pl-7">
                                                            <div className="flex items-start gap-3.5">
                                                                {/* Icon */}
                                                                <motion.span
                                                                    whileHover={{ scale: 1.15, rotate: 5 }}
                                                                    className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0 shadow-sm transition-shadow duration-300 group-hover:shadow-md"
                                                                    style={{
                                                                        backgroundColor: `${goal.color}12`,
                                                                        color: goal.color,
                                                                    }}
                                                                >
                                                                    <GoalIcon className="w-4.5 h-4.5" />
                                                                </motion.span>
                                                                <div className="flex-1 min-w-0">
                                                                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 leading-snug">
                                                                        {goal.title}
                                                                    </h3>
                                                                    <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                                        {goal.description}
                                                                    </p>

                                                                    {/* Tags */}
                                                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                                                        {goal.tags.map((tag) => (
                                                                            <span
                                                                                key={tag}
                                                                                className="inline-flex items-center text-[10px] font-semibold px-2 py-1 rounded-md border"
                                                                                style={{
                                                                                    color: goal.color,
                                                                                    backgroundColor: `${goal.color}08`,
                                                                                    borderColor: `${goal.color}20`,
                                                                                }}
                                                                            >
                                                                                {tag}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default GoalsModal
