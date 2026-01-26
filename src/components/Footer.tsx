'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Viveknathtiwari01',
      wrapperClass:
        'bg-black text-white border-gray-900/40 hover:bg-gray-800 hover:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.65)]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/vivek-nath-tiwari-a27156262/',
      wrapperClass:
        'bg-[#0A66C2] text-white border-[#0A66C2]/40 hover:bg-[#0A66C2]/90 hover:shadow-[0_12px_30px_-12px_rgba(10,102,194,0.75)]',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:viveknath62094@gmail.com',
      wrapperClass:
        'bg-white text-primary border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-[0_12px_30px_-12px_rgba(252,196,45,0.65)] dark:bg-gray-900 dark:text-secondary dark:hover:bg-secondary/10',
    },
    {
      name: 'X (Twitter)',
      icon: FaXTwitter,
      href: 'https://x.com/TiwariViveknath',
      wrapperClass:
        'bg-black text-white border-black/40 hover:bg-black/85 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.75)]',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/vivek_nath_tiwari/',
      wrapperClass:
        'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white border-transparent hover:opacity-90 hover:shadow-[0_12px_30px_-12px_rgba(221,42,123,0.75)]',
    },
  ]

  return (
    <footer className="relative overflow-hidden py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/15 dark:via-gray-950 dark:to-secondary/15" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-70 dark:opacity-40 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-secondary/10 blur-3xl opacity-70 dark:opacity-40 animate-blob animation-delay-2000" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary dark:text-secondary mb-4">
                Portfolio · Vivek Nath Tiwari
              </p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight max-w-xl">
                Building intelligent digital journeys—let’s collaborate on the next one.
              </h3>
            </div>

            <div className="flex flex-col items-start gap-6">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Connect with me
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${link.wrapperClass}`}
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; 2024-{currentYear} Vivek Nath Tiwari. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
            >
              <span>Back to top</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
                ↑
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer