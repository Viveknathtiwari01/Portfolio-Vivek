'use client'

import { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FiSun, FiMoon } from 'react-icons/fi'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)

    // Detect active section
    const sections = menuItems.map((item) => item.href.replace('#', ''))
    let current = 'home'
    for (const section of sections) {
      const el = document.getElementById(section)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) current = section
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    setMounted(true)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-black/[0.04] dark:shadow-black/20 border-b border-gray-200/60 dark:border-gray-700/60'
        : 'bg-white/60 dark:bg-gray-900/50 backdrop-blur-md border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="relative w-8 h-8 rounded-xl overflow-hidden ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all duration-300"
            >
              <Image src="/logo.png" alt="Logo" fill className="object-cover" priority />
            </motion.div>
            <span className="font-jakarta text-lg font-bold text-gray-900 dark:text-white">
              Vivek Nath Tiwari
              <span className="text-indigo-600 dark:text-indigo-400"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 rounded-xl group"
                >
                  {/* Active indicator pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${isActive
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}
                  >
                    {item.name}
                  </span>
                </a>
              )
            })}

            {/* Divider */}
            <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-2" />

            {/* Theme toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="p-2 rounded-xl text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {theme === 'dark' ? <FiSun className="w-[18px] h-[18px]" /> : <FiMoon className="w-[18px] h-[18px]" />}
                  </motion.span>
                </AnimatePresence>
              )}
            </motion.button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1.5">
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              whileTap={{ scale: 0.9, rotate: 180 }}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />)}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] w-full bg-current rounded-full origin-center"
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  className="block h-[2px] w-3/4 bg-current rounded-full"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block h-[2px] w-full bg-current rounded-full origin-center"
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
              <div className="rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg shadow-black/[0.04] dark:shadow-black/20 p-3 space-y-0.5">
                {menuItems.map((item, i) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                        ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      )}
                      {item.name}
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar