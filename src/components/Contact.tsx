'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { FiMail, FiPhoneCall, FiMapPin, FiClock } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ from_name: '', from_email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send. Please try again.')
      console.error('Contact form error:', error)
    }
  }

  const socialLinks = [
    { name: 'Download Resume', icon: FaFileDownload, href: '/Vivek_Resume_June_update_25.pdf', download: true },
    { name: 'Email', icon: FaEnvelope, href: 'mailto:viveknath62094@gmail.com' },
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Viveknathtiwari01' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/vivek-nath-tiwari-a27156262/' },
  ]

  const contactDetails = [
    { icon: FiMail, title: 'Email', description: 'viveknath62094@gmail.com', href: 'mailto:viveknath62094@gmail.com' },
    { icon: FiPhoneCall, title: 'Consultation', description: 'Book via Calendly', href: 'https://calendly.com/viveknath62094/30min' },
    { icon: FiClock, title: 'Response time', description: 'Within 24 hours · IST' },
    { icon: FiMapPin, title: 'Based in', description: 'Bihar, India · Remote-friendly' },
  ]

  const inputClass =
    'w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/70 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-colors outline-none'

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="section-bg" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Tell me about your project and I'll help engineer the roadmap.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Value prop */}
            <div className="glass-card p-6 sm:p-7">
              <div className="absolute -top-16 -right-12 w-40 h-40 bg-transparent dark:bg-secondary-500/15 rounded-full blur-3xl animate-blob" />
              <div className="absolute -bottom-16 -left-8 w-48 h-48 bg-transparent dark:bg-primary-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
              {/* Left accent strip */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-2xl" />
              <div className="relative space-y-4 pl-2">
                <h3 className="font-jakarta text-lg font-bold text-gray-900 dark:text-white">
                  Partner who codes, designs, and thinks in product.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you need a production-grade MVP, AI integration, or platform modernization — let's craft a plan tailored to your timeline.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Discovery', 'Strategy', 'AI/ML', 'Design systems'].map((chip) => (
                    <span key={chip} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact details grid */}
            <div className="grid grid-cols-2 gap-3">
              {contactDetails.map((detail, i) => {
                const DetailIcon = detail.icon
                const inner = (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="group relative glass-card p-4 h-full overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-500/8"
                  >
                    {/* Left accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 shadow-sm group-hover:shadow-md group-hover:shadow-indigo-500/10 transition-all duration-300">
                      <DetailIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <p className="mt-3 text-xs font-bold text-gray-900 dark:text-white uppercase tracking-[0.1em]">{detail.title}</p>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{detail.description}</p>
                  </motion.div>
                )
                if (detail.href) {
                  return <a key={detail.title} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{inner}</a>
                }
                return <div key={detail.title}>{inner}</div>
              })}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="relative glass-card p-4 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-violet-500 opacity-50" />
              <p className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-[0.08em]">Direct channels</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.download ? '_self' : '_blank'}
                    rel={link.download ? undefined : 'noopener noreferrer'}
                    download={link.download}
                    className="group/link inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/70 px-3.5 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:shadow-sm"
                  >
                    <link.icon className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:scale-110" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-transparent dark:bg-secondary-500/15 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-12 -left-8 w-44 h-44 bg-transparent dark:bg-primary-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="glass-card overflow-hidden">
              {/* Top gradient accent bar */}
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-violet-500" />
              <div className="absolute inset-0 bg-transparent dark:bg-gradient-to-tr dark:from-primary-500/5 dark:via-transparent dark:to-secondary-500/10" />
              <div className="relative p-6 sm:p-8 space-y-5">
                <div>
                  <h3 className="font-jakarta text-lg font-semibold text-gray-900 dark:text-white">Share your vision</h3>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">I'll respond with next steps and a tailored plan.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="from_name" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1.5">Name</label>
                      <input type="text" id="from_name" required value={formData.from_name} onChange={(e) => setFormData({ ...formData, from_name: e.target.value })} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1.5">Email</label>
                      <input type="email" id="from_email" required value={formData.from_email} onChange={(e) => setFormData({ ...formData, from_email: e.target.value })} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1.5">Subject</label>
                    <input type="text" id="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-400 mb-1.5">Message</label>
                    <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed" aria-busy={status === 'loading'}>
                    {status === 'loading' ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                        Sending…
                      </span>
                    ) : 'Send message'}
                  </button>

                  {status === 'success' && (
                    <p className="text-xs font-medium text-green-600 dark:text-green-400">Sent! I'll be in touch shortly.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-xs font-medium text-red-500 dark:text-red-400">{errorMessage || 'Failed to send. Please try again.'}</p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact