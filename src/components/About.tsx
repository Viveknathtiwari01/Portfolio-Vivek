'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { FiCpu, FiTarget, FiUsers } from 'react-icons/fi'
import EducationModal from './EducationModal'
import GoalsModal from './GoalsModal'

const About = () => {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false)
  const [isGoalsModalOpen, setIsGoalsModalOpen] = useState(false)

  const stats = [
    { value: '1.5+', label: 'Years building web & AI products' },
    { value: '6+', label: 'AI/ML prototypes shipped' },
    { value: '10+', label: 'Cross-functional teams' },
  ]

  const focusAreas = [
    {
      icon: FaLaptopCode,
      title: 'Full-stack engineering',
      description: 'Modular, production-ready apps with Next.js, TypeScript, and the MERN stack.',
      points: [
        'Scalable APIs & microservice architecture',
        'Component libraries aligned to brand systems',
        'Performance budgets & accessibility baked in',
      ],
    },
    {
      icon: FiCpu,
      title: 'AI-first product thinking',
      description: 'Bringing intelligence to interfaces with ML models and usable product flows.',
      points: [
        'MLOps-friendly experimentation pipelines',
        'NLP-powered UX with LLMs',
        'Data storytelling for actionable insights',
      ],
    },
    {
      icon: FiUsers,
      title: 'Human-centered collaboration',
      description: 'Translating ideas into delightful, measurable outcomes with stakeholders.',
      points: [
        'Tight feedback loops with product & design',
        'Mentoring on modern tooling & DevOps',
        'Transparent communication across time zones',
      ],
    },
  ]

  const highlightCards = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Academic journey and certifications that shaped my engineering mindset.',
      onClick: () => setIsEducationModalOpen(true),
      cta: 'View timeline',
    },
    {
      icon: FaLaptopCode,
      title: 'Projects',
      description: 'From AI wellness platforms to data-rich dashboards — products I\'ve launched.',
      href: '#projects',
      cta: 'Explore projects',
    },
    {
      icon: FaRocket,
      title: 'Goals',
      description: 'Leading product squads that merge AI, automation, and design systems at scale.',
      onClick: () => setIsGoalsModalOpen(true),
      cta: 'Next chapter',
    },
  ]

  return (
    <section id="about" className="section-about section-accent relative py-20 overflow-hidden">

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge">About me</span>
          <h2 className="section-title">Crafting intelligent digital journeys</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            I build immersive product experiences that balance clean engineering with AI-driven intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left column — bio + cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Bio card */}
            <div className="glass-card p-7 sm:p-8">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-transparent dark:bg-secondary-500/15 rounded-full blur-3xl animate-blob" />
              <div className="absolute -bottom-24 -left-8 w-56 h-56 bg-transparent dark:bg-primary-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-secondary-400 bg-primary-500/10 dark:bg-secondary-500/10 rounded-full">
                    MERN · AI/ML · DevOps
                  </span>
                  <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
                    Product-minded engineer
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a Software Analyst at smartData Enterprises Inc, shaping intelligent platforms that fuse MERN-stack craftsmanship with AI-driven experiences.
                  </p>
                  <p>
                    My playbook blends rigorous engineering with rapid experimentation — automating workflows, integrating MLOps pipelines, and launching features that make data approachable.
                  </p>
                  <p>
                    From enterprise dashboards to AI wellness products, I translate requirements into resilient architectures and measurable impact.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 backdrop-blur-md p-4 overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <p className="text-2xl font-extrabold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">{stat.value}</p>
                      <p className="mt-1.5 text-[11px] font-medium text-gray-600 dark:text-gray-400 leading-snug">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Focus areas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className={`glass-card p-5 ${index === 2 ? 'lg:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shadow-sm">
                      <area.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-jakarta text-base font-semibold text-gray-900 dark:text-white">{area.title}</h3>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{area.description}</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-primary-500/70 dark:bg-secondary-500/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — profile image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-900/70 backdrop-blur-md">
              <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-tr dark:from-primary-500/15 dark:via-transparent dark:to-secondary-500/20" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/profile_3.jpg"
                  alt="Vivek Nath Tiwari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-xl border border-primary-500/20 dark:border-secondary-500/20 bg-white dark:bg-gray-900 shadow-lg p-4 space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow">
                  <FiTarget className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-secondary-400">
                    Currently at
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    smartData Enterprises Inc, Mohali
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                Delivering AI-augmented applications, streamlining DevOps, and architecting secure data flows.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {highlightCards.map((card) => {
            const CardIcon = card.icon
            const inner = (
              <div className="relative flex flex-col gap-3">
                {/* Left accent strip */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-2xl" />
                <div className="pl-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shadow-sm">
                    <CardIcon className="w-5 h-5" />
                  </span>
                  <h3 className="mt-3 font-jakarta text-lg font-bold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2.5 transition-all duration-200">
                    {card.cta} <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </div>
            )

            const cardClass = 'group glass-card p-5 cursor-pointer'

            if (card.href) {
              return (
                <a key={card.title} href={card.href} className={cardClass}>
                  {inner}
                </a>
              )
            }

            return (
              <div key={card.title} onClick={card.onClick} className={cardClass}>
                {inner}
              </div>
            )
          })}
        </motion.div>
      </div>

      <EducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
      />
      <GoalsModal
        isOpen={isGoalsModalOpen}
        onClose={() => setIsGoalsModalOpen(false)}
      />
    </section>
  )
}

export default About