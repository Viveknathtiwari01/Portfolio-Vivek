"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const calculateMonthsBetween = (startDate: Date, endDate: Date): number => {
    return (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) + 1;
  };

  const parseDateString = (dateStr: string): Date | null => {
    const months: Record<string, number> = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };
    const [month, year] = dateStr.split(" ");
    if (months[month] !== undefined && !isNaN(Number(year))) {
      return new Date(Number(year), months[month], 1);
    }
    return null;
  };

  const formatDuration = (period: string, startDateStr?: string): string => {
    if (period.includes("Present") && startDateStr) {
      const months = calculateMonthsBetween(new Date(startDateStr), new Date());
      return `${months} mo${months !== 1 ? "s" : ""}`;
    }
    const [start, end] = period.split(" - ");
    if (start && end) {
      const s = parseDateString(start);
      const e = end === "Present" ? new Date() : parseDateString(end);
      if (s && e) {
        const months = calculateMonthsBetween(s, e);
        return `${months} mo${months !== 1 ? "s" : ""}`;
      }
    }
    return "";
  };

  const experiences = [
    {
      title: "Associate Software Analyst",
      company: "smartData Enterprises Inc",
      location: "Mohali, Punjab",
      period: "Oct 2025 - Present",
      startDate: "2025-10-06",
      description: [
        "Developing enterprise-level apps using MERN stack with scalable, efficient architecture.",
        "Implementing AI/ML models into production to enhance UX and business intelligence.",
        "Collaborating with cross-functional teams on robust backend services and REST APIs.",
        "Optimizing performance and enforcing quality through code reviews and best practices.",
        "Working with CI/CD pipelines, containerization, and modern DevOps tooling.",
      ],
      skills: ["MERN Stack", "AI/ML", "REST APIs", "Microservices", "Docker", "AWS"],
    },
    {
      title: "AI/ML Trainee (Full Stack)",
      company: "SmartData + KarvaTech Solutions",
      location: "Lucknow",
      period: "Feb 2025 - Jun 2025",
      startDate: "2025-02-01",
      description: [
        "Completed a 5-month intensive program blending full-stack web dev with AI/ML techniques.",
        "Built web applications using Python, Streamlit, Flask, and integrated ML models.",
        "Applied TensorFlow, Scikit-learn, and NLP libraries for predictive and text-based AI solutions.",
      ],
      skills: ["Python", "ML", "Streamlit", "Flask", "TensorFlow", "NLP"],
    },
    {
      title: "Full Stack Developer Intern",
      company: "KarvaTech Solutions",
      location: "Lucknow",
      period: "Sep 2024 - Mar 2025",
      startDate: "2024-09-01",
      description: [
        "Built a responsive product catalog for Coromass Crop Care Industries.",
        "Developed a custom CRM for LBSIMDS to optimize lead management and automate workflows.",
        "Worked across the full lifecycle — from UI design to backend integration.",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
    },
    {
      title: "Web Developer Intern",
      company: "SoftPro India",
      location: "Lucknow",
      period: "Feb 2024 - May 2024",
      startDate: "2024-02-01",
      description: [
        "Developed responsive, mobile-friendly web applications with modern technologies.",
        "Gained practical full-stack experience and problem-solving skills on real projects.",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="section-experience section-accent relative py-20 overflow-hidden">

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Experience</span>
          <h2 className="section-title">Career Journey</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Key roles and achievements across my professional timeline.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/40 via-gray-200 dark:via-gray-700 to-secondary-500/40" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const duration = formatDuration(exp.period, exp.startDate);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-1.5 sm:left-3.5 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-900 border-2 border-primary-500 dark:border-secondary-500 shadow-sm">
                    <FaBriefcase className="w-2.5 h-2.5 text-primary-600 dark:text-secondary-400" />
                  </span>

                  {/* Card */}
                  <div className="glass-card p-5 sm:p-6">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-l-2xl" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-jakarta text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-sm">
                          <span className="font-medium text-primary-600 dark:text-secondary-400">
                            {exp.company}
                          </span>
                          <span className="text-gray-300 dark:text-gray-600">•</span>
                          <span className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                            <FaMapMarkerAlt className="mr-1 text-[10px]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary-600 dark:text-secondary-400 bg-primary-500/10 dark:bg-secondary-500/10 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                        {duration && (
                          <span className="px-2 py-1 text-[10px] font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full whitespace-nowrap">
                            {duration}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500/60 dark:bg-secondary-500/60 flex-shrink-0" />
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
