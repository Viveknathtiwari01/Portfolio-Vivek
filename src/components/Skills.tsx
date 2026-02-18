"use client";

import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaHtml5,
  FaCss3Alt, FaJs, FaDocker, FaAws, FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiBootstrap,
  SiTensorflow, SiScikitlearn, SiMysql, SiPostgresql, SiRedux,
  SiFirebase, SiSpring, SiPostman, SiVercel, SiClerk, SiPrisma,
  SiJira, SiJenkins, SiWordpress, SiSonarqube, SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "Frontend" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
    { name: "Express.js", icon: SiExpress, color: "#000000", category: "Backend" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "Languages" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "Languages" },
    { name: "Python", icon: FaPython, color: "#3776AB", category: "Languages" },
    { name: "Java", icon: FaJava, color: "#007396", category: "Languages" },
    { name: "C", icon: FaJs, color: "#A8B400", category: "Languages" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Database" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00", category: "AI / ML" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E", category: "AI / ML" },
    { name: "Pandas", icon: SiScikitlearn, color: "#6148c7", category: "AI / ML" },
    { name: "NumPy", icon: SiScikitlearn, color: "#47c5ee", category: "AI / ML" },
    { name: "Matplotlib", icon: SiScikitlearn, color: "#C72C48", category: "AI / ML" },
    { name: "NLP / NLTK", icon: SiScikitlearn, color: "#F7931E", category: "AI / ML" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939", category: "DevOps & Tools" },
    { name: "Docker", icon: FaDocker, color: "#2496ED", category: "DevOps & Tools" },
    { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD", category: "DevOps & Tools" },
    { name: "GitHub", icon: FaGitAlt, color: "#151414", category: "DevOps & Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "DevOps & Tools" },
    { name: "Vercel", icon: SiVercel, color: "#000000", category: "DevOps & Tools" },
    { name: "Jira", icon: SiJira, color: "#0052CC", category: "DevOps & Tools" },
    { name: "Clerk", icon: SiClerk, color: "#000000", category: "DevOps & Tools" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B", category: "DevOps & Tools" },
  ];

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="section-skills section-accent relative py-20 overflow-hidden">

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge">Skills</span>
          <h2 className="section-title">Technical toolkit</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Frontend craft, backend systems, and AI fluency for building resilient platforms.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 font-bold text-xs shadow-sm">
                  {category.substring(0, 2)}
                </span>
                <h3 className="font-jakarta text-lg font-bold text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 via-gray-200 dark:via-gray-700 to-transparent" />
              </div>

              {/* Skill grid */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3"
              >
                {skills
                  .filter((s) => s.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="group relative glass-card p-3.5 overflow-hidden cursor-default transition-shadow duration-300"
                      style={{ ['--skill-color' as string]: skill.color }}
                    >
                      {/* Left accent bar */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-2xl"
                        style={{ backgroundColor: skill.color }}
                      />
                      <div className="flex items-center gap-3 pl-1">
                        <div className="relative h-10 w-10 flex-shrink-0">
                          <span
                            className="absolute inset-0 rounded-xl opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-300"
                            style={{ backgroundColor: skill.color }}
                          />
                          <div className="relative flex h-full w-full items-center justify-center rounded-xl">
                            <skill.icon
                              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                              style={{ color: skill.color }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
