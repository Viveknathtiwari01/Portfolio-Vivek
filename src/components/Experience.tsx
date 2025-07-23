"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "AI/ML Trainee (Full Stack Development)",
      company: "SmartData Enterprises in collaboration KarvaTech Solutions",
      location: "Lucknow",
      period: "Feb 2025 - Jun 2025",
      description: [
        "Completed a 5-month intensive training program focused on Full Stack Web Development with integrated AI & Machine Learning techniques.",
        "Gained hands-on experience in building web applications using Python, Streamlit, Flask, and integrating machine learning models.",
        "Applied key machine learning concepts using Python, TensorFlow, Scikit-learn, and NLP libraries to build predictive and text-based AI solutions.",
        "Developed dynamic and responsive web applications using modern tech stacks including Streamlit, Flask, and REST APIs.",
        "Collaborated in cross-functional teams to design scalable, responsive, and AI-enhanced web platforms.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "KarvaTech Solutions",
      location: "Lucknow",
      period: "Sep 2024 - Mar 2025 (6 months)",
      description: [
        "Completed a 6-month internship with hands-on experience in full-stack web development, automation, and UI/UX-focused projects.",
        "Designed and developed a responsive product catalog website for Coromass Crop Care Industries using modern frontend frameworks.",
        "Built a custom CRM system for LBSIMDS to optimize lead management, automate workflows, and improve data handling efficiency.",
        "Worked across the full development lifecycle—from UI design to backend integration—ensuring scalable and maintainable solutions.",
        "Collaborated with cross-functional teams to deliver production-ready features and strengthen project planning, debugging, and deployment skills.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "SoftPro India Computer Technology",
      location: "Lucknow",
      period: "Feb 2024 - May 2024 (3 months)",
      description: [
        "Learned and implemented new technologies to develop responsive and mobile-friendly web applications.",
        "Worked on small-scale projects, gaining practical experience in web development.",
        "Built a strong foundation in full-stack development by applying modern tools and frameworks.",
      ],
    },
  ];

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
            My professional journey has equipped me with hands-on experience in
            developing real-world applications and solving complex problems.
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
                  index % 2 === 0 ? "flex-row-reverse" : ""
                } relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
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
  );
};

export default Experience;
