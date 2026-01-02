'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiCpu, FiGlobe, FiZap } from 'react-icons/fi'

const Hero = () => {
  const stats = [
    { label: 'AI-assisted products launched', value: '10+' },
    { label: 'Clients collaborated with Globally', value: '14' },
    { label: 'Average sprint velocity increase', value: '32%' },
  ]

  const focusChips = ['Generative AI', 'MERN Stack', 'Product Strategy', 'DevOps Automation']

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/10 dark:from-primary/20 dark:via-gray-950 dark:to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_45%)]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md px-6 py-2 text-sm font-medium text-primary dark:text-secondary shadow-md">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <FiZap className="w-4 h-4" />
              </span>
              Associate Software Analyst · SmartData Enterprisez
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Designing AI-native product journeys with crafted engineering.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                I help product teams ship resilient platforms faster—blending full-stack craftsmanship, machine learning, and delightful UX to turn ambitious ideas into measurable outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {focusChips.map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 rounded-full backdrop-blur-md"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-primary flex items-center gap-2">
                Start a project
              </a>
              <a
                href="/Vivek_Resume_June_update_25.pdf"
                className="button-secondary flex items-center gap-2"
                download
              >
                Download résumé
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-5 shadow-md"
                >
                  <p className="text-3xl font-semibold text-primary dark:text-secondary">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-24 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -left-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="relative rounded-[36px] overflow-hidden border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
              <div className="relative aspect-[4/5]">
                <Image
                  src="/vivek_1.jpg"
                  alt="Vivek Nath Tiwari portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                />
              </div>
            </div>

            <div className="absolute -bottom-12 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-primary/20 dark:border-secondary/20 bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                  <FiCpu className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:text-secondary">
                    Currently building with
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    SmartData Enterprisez · Mohali, India
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Shipping secure, data-rich platforms with CI/CD automation, generative AI integrations, and performance-first UX.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary dark:text-secondary">
                <FiGlobe className="w-4 h-4" />
                Available for remote-first collaboration in 2026.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors"
          >
            Scroll to journey
            <span className="mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0-5-5m5 5 5-5" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero