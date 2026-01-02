'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { FiCpu, FiTarget, FiUsers } from 'react-icons/fi'
import EducationModal from './EducationModal'

const About = () => {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false)

  const stats = [
    {
      value: '1.5+',
      label: 'Years crafting modern web apps & product experiences',
    },
    {
      value: '6+',
      label: 'AI/ML prototypes shipped to production readiness',
    },
    {
      value: '10+',
      label: 'Cross-functional teams partnered',
    },
  ]

  const focusAreas = [
    {
      icon: FaLaptopCode,
      title: 'Full-stack craftsmanship',
      description:
        'Designing modular, production-ready experiences with Next.js, TypeScript, and the MERN stack.',
      points: [
        'Microservice-ready architecture & scalable APIs',
        'Component libraries that match brand systems',
        'Performance budgets & accessibility baked-in',
      ],
    },
    {
      icon: FiCpu,
      title: 'AI-first product thinking',
      description:
        'Bringing intelligence to interfaces by blending ML models with usable product flows.',
      points: [
        'MLOps-friendly experimentation pipelines',
        'Natural language UX powered by LLMs & NLP',
        'Data storytelling for actionable insights',
      ],
    },
    {
      icon: FiUsers,
      title: 'Human-centered collaboration',
      description:
        'Partnering with stakeholders to translate ideas into delightful and measurable outcomes.',
      points: [
        'Tight feedback loops with product & design teams',
        'Mentoring teammates on modern tooling & DevOps',
        'Transparent communication across time zones',
      ],
    },
  ]

  const highlightCards = [
    {
      icon: FaGraduationCap,
      title: 'Education Timeline',
      description:
        'Explore my academic path and the certifications that shaped my engineering mindset.',
      onClick: () => setIsEducationModalOpen(true),
    },
    {
      icon: FaLaptopCode,
      title: 'Signature Projects',
      description:
        'From AI wellness platforms to data-rich dashboards—discover the products I have launched.',
      href: '#projects',
    },
    {
      icon: FaRocket,
      title: 'Future Goals',
      description:
        'Leading product squads that merge AI, automation, and design systems for global scale.',
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary text-sm font-medium rounded-full mb-5 border border-primary/20 dark:border-secondary/20 backdrop-blur-sm">
            Get to know me
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Crafting intelligent digital journeys
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I build immersive product experiences that balance clean engineering with AI-driven intelligence—turning ambitious ideas into scalable, human-centered solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-10"
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg shadow-xl">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-blob" />
              <div className="absolute -bottom-32 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

              <div className="relative p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 rounded-full">
                    MERN • AI/ML • DevOps
                  </span>
                  <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
                    Product-minded engineer
                  </span>
                </div>

                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I’m an Associate Software Analyst at SmartData Enterprisez, shaping intelligent platforms that fuse MERN-stack craftsmanship with AI-driven experiences.
                  </p>
                  <p>
                    My playbook blends rigorous engineering with rapid experimentation—automating workflows, integrating MLOps pipelines, and launching usable features that make data approachable.
                  </p>
                  <p>
                    From enterprise dashboards to AI wellness products, I translate requirements into resilient architectures, purposeful interfaces, and measurable impact.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md p-5 shadow-sm"
                    >
                      <p className="text-3xl font-bold text-primary dark:text-secondary">{stat.value}</p>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                    index === 2 ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                      <area.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{area.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary/70 dark:bg-secondary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsEducationModalOpen(true)}
                className="button-primary"
              >
                View Education Journey
              </button>
              <a href="#projects" className="button-secondary">
                See Featured Projects
              </a>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white/80 dark:bg-gray-900/70 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-secondary/20" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/profile_3.jpg"
                  alt="Vivek Nath Tiwari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-10 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-primary/20 dark:border-secondary/20 bg-white dark:bg-gray-900 shadow-xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <FiTarget className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-secondary uppercase tracking-[0.2em]">
                    Currently Building At
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    SmartData Enterprisez, Mohali
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Delivering AI-augmented applications, streamlining DevOps with Jenkins, and architecting secure data flows across cloud-native environments.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {highlightCards.map((card) => {
            const CardIcon = card.icon

            if (card.href) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex flex-col gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                      <CardIcon className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {card.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-secondary">
                      Explore projects
                      <span className="text-lg">→</span>
                    </span>
                  </div>
                </a>
              )
            }

            return (
              <div
                key={card.title}
                onClick={card.onClick}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                  card.onClick ? 'cursor-pointer' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                    <CardIcon className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-secondary">
                    {card.onClick ? 'Open timeline' : 'Charting the next chapter'}
                    <span className="text-lg">→</span>
                  </span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>

      <EducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
      />
    </section>
  )
}

export default About