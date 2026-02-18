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
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/vivek-nath-tiwari-a27156262/',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:viveknath62094@gmail.com',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      href: 'https://x.com/TiwariViveknath',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/vivek_nath_tiwari/',
    },
  ]

  return (
    <footer className="section-footer relative overflow-hidden py-14">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-indigo-400 mb-2 font-semibold">
                Portfolio · Vivek Nath Tiwari
              </p>
              <h3 className="font-jakarta text-2xl font-bold text-white leading-snug max-w-md">
                Let&apos;s collaborate on the next one.
              </h3>
              <p className="mt-2 text-sm text-slate-400 max-w-sm">
                Open to full-time roles, freelance projects, and remote collaboration worldwide.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Connect with me</p>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all duration-200"
                    aria-label={link.name}
                  >
                    <link.icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-6">
            <p className="text-xs text-slate-500">
              &copy; 2024–{currentYear} Vivek Nath Tiwari. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors"
            >
              Back to top
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 hover:border-indigo-500">↑</span>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer