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
        headers: {
          'Content-Type': 'application/json',
        },
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
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
      console.error('Contact form error:', error)
    }
  }

  const socialLinks = [
    {
      name: 'Download Resume',
      icon: FaFileDownload,
      href: '/Vivek_Resume_June_update_25.pdf',
      download: true,
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:viveknath62094@gmail.com',
    },
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
  ]

  const contactDetails = [
    {
      icon: FiMail,
      title: 'Email',
      description: 'viveknath62094@gmail.com',
      href: 'mailto:viveknath62094@gmail.com',
    },
    {
      icon: FiPhoneCall,
      title: 'Consultation slots',
      description: 'Book a quick call via calendly.com/vivek-tech',
      href: 'https://calendly.com/viveknath62094/30min',
    },
    {
      icon: FiClock,
      title: 'Typical response time',
      description: 'Within 24 hours · IST (UTC+5:30)',
    },
    {
      icon: FiMapPin,
      title: 'Based in',
      description: 'Bettiah, Bihar, India · Remote-friendly',
    },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/15 dark:via-gray-950 dark:to-secondary/15" />
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
            Let's collaborate
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Ready to build your next intelligent product?
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tell me about your mission, and I’ll help engineer the roadmap—from rapid prototypes to enterprise-ready experiences powered by AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg p-10 shadow-xl">
              <div className="absolute -top-24 -right-16 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-blob" />
              <div className="absolute -bottom-24 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Accelerate delivery with a partner who codes, designs, and thinks in product.
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you need a production-grade MVP, AI integration strategy, or modernization of an existing platform, we will craft a delivery plan tailored to your timeline.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Discovery workshops', 'Technical strategy', 'AI/ML implementation', 'Design systems'].map((chip) => (
                    <span
                      key={chip}
                      className="px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-700 rounded-full"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail) => {
                const DetailIcon = detail.icon
                const content = (
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-6 shadow-md hover:shadow-xl transition-all duration-300">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary">
                      <DetailIcon className="w-5 h-5" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-[0.15em]">
                      {detail.title}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                )

                if (detail.href) {
                  return (
                    <a key={detail.title} href={detail.href} target={detail.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  )
                }

                return (
                  <div key={detail.title}>{content}</div>
                )
              })}
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Prefer direct channels?
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.download ? '_self' : '_blank'}
                    rel={link.download ? undefined : 'noopener noreferrer'}
                    download={link.download}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:border-primary/50 hover:text-primary dark:hover:text-secondary transition-all"
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-16 -left-12 w-56 h-56 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/85 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/15" />
              <div className="relative p-10 space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Share your vision
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Drop a note about your idea, technical requirements, or the outcomes you are aiming for. I’ll respond with next steps and a tailored discovery plan.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="from_name" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        required
                        value={formData.from_name}
                        onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 px-4 py-3 text-gray-900 dark:text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        required
                        value={formData.from_email}
                        onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 px-4 py-3 text-gray-900 dark:text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-2">
                      Project focus or subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 px-4 py-3 text-gray-900 dark:text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-2">
                      How can I help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 px-4 py-3 text-gray-900 dark:text-white focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
                          aria-hidden="true"
                        />
                        Sending...
                      </span>
                    ) : (
                      'Send message'
                    )}
                  </button>
                  {status === 'success' && (
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      Message sent successfully! I’ll be in touch shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm font-medium text-red-500 dark:text-red-400">
                      {errorMessage || 'Failed to send message. Please try again.'}
                    </p>
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