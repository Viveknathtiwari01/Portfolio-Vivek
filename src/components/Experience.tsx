'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern (AI & ML)',
      company: 'SmartData Enterprises in collaboration KarvaTech Solutions',
      location: 'Lucknow',
      period: 'Mar 2025 - Present',
      description: [
        'Completed a 6-month intensive training program focused on Full Stack Web Development integrated with AI & ML techniques.',
        'Built dynamic web applications using modern stacks including Streamlit and Flask.',
        'Worked on practical projects involving machine learning workflows such as data preprocessing, model building, and intelligent system integration.',
        'Applied key ML techniques using Python, TensorFlow, and Scikit-learn to build and deploy predictive and NLP-based solutions.',
        'Collaborated in cross-functional teams to design scalable, responsive, and AI-enhanced web platforms.',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'KarvaTech Solutions',
      location: 'Lucknow',
      period: 'Sep 2024 - Mar 2025 (6 months)',
      description: [
        'Successfully completed 6 months of hands-on experience in automation and design-focused projects.',
        'Designed and built a product catalog page and a responsive website for Coromass Crop Care Industries.',
        'Created a CRM system for LBSIMDS, streamlining operations and improving data management efficiency.',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'SoftPro India Computer Technology',
      location: 'Lucknow',
      period: 'Feb 2024 - May 2024 (3 months)',
      description: [
        'Learned and implemented new technologies to develop responsive and mobile-friendly web applications.',
        'Worked on small-scale projects, gaining practical experience in web development.',
        'Built a strong foundation in full-stack development by applying modern tools and frameworks.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Professional Experience</h2>
          <p className="paragraph max-w-3xl mx-auto">
            My professional journey has equipped me with hands-on experience in developing real-world
            applications and solving complex problems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                } relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                      {exp.location} • {exp.period}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="paragraph flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty div for spacing on the other side */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience