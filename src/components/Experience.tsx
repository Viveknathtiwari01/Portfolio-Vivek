"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  // Function to calculate months between two dates
  const calculateMonthsBetween = (startDate: Date, endDate: Date): number => {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    
    return (endYear - startYear) * 12 + (endMonth - startMonth) + 1; // +1 to include current month
  };

  // Function to format date string to include total months
  const formatExperiencePeriod = (period: string, startDateStr?: string): string => {
    if (period.includes('Present')) {
      // For current job, use the existing monthsAtCurrentJob
      const startDate = startDateStr ? new Date(startDateStr) : new Date(2025, 9, 6);
      const months = calculateMonthsBetween(startDate, new Date());
      return `${period} • ${months} month${months !== 1 ? 's' : ''}`;
    }
    
    // For past jobs, parse the period to calculate months
    const [start, end] = period.split(' - ');
    if (start && end) {
      const startDate = parseDateString(start);
      const endDate = end === 'Present' ? new Date() : parseDateString(end);
      
      if (startDate && endDate) {
        const months = calculateMonthsBetween(startDate, endDate);
        return `${period} • ${months} month${months !== 1 ? 's' : ''}`;
      }
    }
    
    return period;
  };

  // Helper function to parse date strings like 'Oct 2025'
  const parseDateString = (dateStr: string): Date | null => {
    const months: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const parts = dateStr.split(' ');
    if (parts.length === 2) {
      const month = months[parts[0]];
      const year = parseInt(parts[1]);
      if (!isNaN(month) && !isNaN(year)) {
        return new Date(year, month, 1);
      }
    }
    return null;
  };

  const experiences = [
    {
      title: "Associate Software Analyst",
      company: "SmartData Enterprisez",
      location: "Mohali, Punjab, India",
      period: "Oct 2025 - Present",
      startDate: "2025-10-06",
      icon: <FaBriefcase className="text-primary text-xl" />,
      description: [
        "Developing and maintaining enterprise-level applications using MERN stack with a focus on scalable and efficient solutions.",
        "Implementing AI/ML models into production applications to enhance user experience and business intelligence.",
        "Collaborating with cross-functional teams to design and deploy robust backend services and APIs.",
        "Optimizing application performance and ensuring code quality through code reviews and best practices.",
        "Working with modern DevOps tools and practices including CI/CD pipelines and containerization."
      ],
      skills: ["MERN Stack", "AI/ML Integration", "REST APIs", "Microservices", "Docker", "AWS"]
    },
    {
      title: "AI/ML Trainee (Full Stack Development)",
      company: "SmartData Enterprises in collaboration with KarvaTech Solutions",
      location: "Lucknow, India",
      period: "Feb 2025 - Jun 2025",
      startDate: "2025-02-01",
      endDate: "2025-06-30",
      icon: <FaBriefcase className="text-primary text-xl" />,
      description: [
        "Completed a 5-month intensive training program focused on Full Stack Web Development with integrated AI & Machine Learning techniques.",
        "Gained hands-on experience in building web applications using Python, Streamlit, Flask, and integrating machine learning models.",
        "Applied key machine learning concepts using Python, TensorFlow, Scikit-learn, and NLP libraries to build predictive and text-based AI solutions.",
        "Developed dynamic and responsive web applications using modern tech stacks including Streamlit, Flask, and REST APIs.",
      ],
      skills: ["Python", "Machine Learning", "Streamlit", "Flask", "TensorFlow", "NLP"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "KarvaTech Solutions",
      location: "Lucknow, India",
      period: "Sep 2024 - Mar 2025",
      startDate: "2024-09-01",
      endDate: "2025-03-31",
      icon: <FaBriefcase className="text-primary text-xl" />,
      description: [
        "Developed a responsive product catalog website for Coromass Crop Care Industries using modern frontend frameworks.",
        "Built a custom CRM system for LBSIMDS to optimize lead management and automate workflows.",
        "Worked across the full development lifecycle—from UI design to backend integration—ensuring scalable solutions.",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"]
    },
    {
      title: "Web Developer Intern",
      company: "SoftPro India Computer Technology",
      location: "Lucknow, India",
      period: "Feb 2024 - May 2024",
      startDate: "2024-02-01",
      endDate: "2024-05-31",
      icon: <FaBriefcase className="text-primary text-xl" />,
      description: [
        "Developed responsive and mobile-friendly web applications using modern web technologies.",
        "Gained practical experience in full-stack development and implemented new technologies in real projects.",
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
  ];

  return (
    <section id="experience" className="relative pt-24 pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 dark:from-primary/10 dark:via-gray-900 dark:to-secondary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="section-container relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary text-sm font-medium rounded-full mb-5 border border-primary/20 dark:border-secondary/20 backdrop-blur-sm">
              Professional Timeline
            </span>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-5">
              Career Journey
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring my professional evolution through key roles and achievements
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
              >
                {/* Year badge */}
                <div className={`absolute hidden md:flex items-center justify-center w-64 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg z-10 ${
                  index % 2 === 0 ? 'md:-left-20' : 'md:-right-20'
                }`}>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    {formatExperiencePeriod(exp.period, exp.startDate)}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-gray-100 dark:border-gray-700 max-w-4xl mx-auto ${
                  index % 2 === 0 ? 'md:ml-32' : 'md:mr-32'
                }`}>
                  {/* Gradient accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
                  
                  <div className="p-6 md:p-7">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center mt-1">
                          <span className="text-lg font-medium text-primary dark:text-secondary">
                            {exp.company}
                          </span>
                          <span className="mx-3 text-gray-300 dark:text-gray-600">•</span>
                          <span className="flex items-center text-gray-500 dark:text-gray-400">
                            <FaMapMarkerAlt className="mr-1.5 text-sm" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="md:hidden bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary text-xs px-4 py-1.5 rounded-full">
                        {formatExperiencePeriod(exp.period, exp.startDate)}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex group">
                          <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-primary/80 dark:bg-secondary/80 mr-3 group-hover:scale-150 transition-transform"></div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {exp.skills && (
                      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-primary/5 to-secondary/5 text-gray-700 dark:text-gray-200 rounded-full border border-gray-100 dark:border-gray-600/50 backdrop-blur-sm hover:from-primary/10 hover:to-secondary/10 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-2xl opacity-50"></div>
                </div>
                
                {/* Connector line */}
                <div className={`absolute hidden md:block top-1/2 w-16 h-0.5 bg-gradient-to-r ${
                  index % 2 === 0 ? 'left-0 from-gray-300 to-primary/30' : 'right-0 from-secondary/30 to-gray-300'
                }`}></div>
              </motion.div>
            ))}
          </div>
          
          {/* Animated elements */}
          <div className="absolute -top-10 right-1/4 w-3 h-3 rounded-full bg-primary/80 dark:bg-secondary/80 animate-pulse"></div>
          <div className="absolute -bottom-10 left-1/4 w-4 h-4 rounded-full bg-secondary/60 dark:bg-primary/60 animate-pulse animation-delay-1000"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-10 left-10 w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/10 animate-float"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 rounded-full bg-secondary/20 dark:bg-secondary/10 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 rounded-full bg-primary/20 dark:bg-primary/10 animate-float animation-delay-3000"></div>
      </div>
    </section>
  );
};

export default Experience;
