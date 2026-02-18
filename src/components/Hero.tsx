'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiCpu, FiGlobe, FiZap } from 'react-icons/fi'

const Hero = () => {
  const stats = [
    { label: 'Products launched', value: '10+' },
    { label: 'Clients worldwide', value: '14' },
    { label: 'Sprint velocity boost', value: '32%' },
  ]

  const focusChips = ['Generative AI', 'MERN Stack', 'Product Strategy', 'DevOps']

  return (
    <section id="home" className="section-hero relative overflow-hidden pt-28 pb-24">

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            {/* Current role badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700 dark:text-indigo-400 shadow-sm">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white shadow">
                <FiZap className="w-3 h-3" />
              </span>
              Software Analyst · smartData Enterprises Inc., Mohali
            </div>

            {/* Gold medal highlight */}
            <div className="w-full max-w-xl rounded-2xl border border-amber-200 dark:border-amber-400/20 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-400/10 dark:via-gray-900/65 dark:to-orange-500/10 p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-2xl border border-amber-200/70 dark:border-amber-400/20 bg-white/90 dark:bg-gray-900/60 shadow-sm">
                  <Image
                    src="/medal.jpeg"
                    alt="Gold medal achievement"
                    fill
                    className="object-contain p-1"
                    sizes="128px"
                    quality={90}
                    priority
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-700 dark:text-amber-300">
                    Achievement
                  </p>
                  <h2 className="font-jakarta text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                    Gold Medalist · MCA 2023–25
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Top rank for outstanding academic performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="font-jakarta text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 dark:text-white leading-[1.12]">
                Building{' '}
                <span className="text-gradient">AI-native</span>{' '}
                products with crafted engineering.
              </h1>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                I help teams ship resilient platforms faster — blending full-stack craftsmanship, machine learning, and thoughtful UX.
              </p>
            </div>

            {/* Focus chips */}
            <div className="flex flex-wrap gap-2">
              {focusChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 rounded-full shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">
                Start a project
              </a>
              <a href="/Vivek_Resume_June_update_25.pdf" className="button-secondary" download>
                Download résumé
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="relative group rounded-xl border border-gray-200/60 dark:border-gray-700 bg-white dark:bg-gray-900/70 p-4 overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-violet-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl font-extrabold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">{stat.value}</p>
                  <p className="mt-1.5 text-[11px] font-medium text-gray-500 dark:text-gray-400 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            {/* Dark-mode only glows */}
            <div className="absolute -top-16 -right-8 w-48 h-48 bg-transparent dark:bg-violet-500/15 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-16 -left-8 w-56 h-56 bg-transparent dark:bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/70 shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/vivek_1.jpg"
                  alt="Vivek Nath Tiwari"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg p-5 space-y-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow">
                  <FiCpu className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                    Currently at
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    smartData Enterprises Inc · Mohali
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Shipping secure, data-rich platforms with CI/CD, generative AI, and performance-first UX.
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                <FiGlobe className="w-3.5 h-3.5" />
                Open to remote collaboration in 2026.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-xs text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Scroll
            <span className="mt-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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