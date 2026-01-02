"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiFirebase,
  SiSpring,
  SiPostman,
  SiVercel,
  SiClerk,
  SiPrisma,
  SiJira,
  SiJenkins,
  SiWordpress,
  SiSonarqube,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
    { name: "C", icon: FaJs, color: "#A8B400", category: "Programming" },
    {
      name: "Python",
      icon: FaPython,
      color: "#3776AB",
      category: "Programming",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      category: "Frontend",
    },
    {
      name: "Java Core",
      icon: FaJava,
      color: "#007396",
      category: "Programming",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      category: "Programming",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E",
      category: "Programming",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#000000",
      category: "Backend",
    },
    {
      name: "Prisma ORM",
      icon: SiPrisma,
      color: "#2D3748",
      category: "Database",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      category: "Database",
    },
    { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database" },
    {
      name: "MongoDB Atlas",
      icon: SiMongodb,
      color: "#47A248",
      category: "Database",
    },
    { name: "Jira", icon: SiJira, color: "#0052CC", category: "Tools" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939", category: "DevOps" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B", category: "CMS" },
    { name: "SonarQube", icon: SiSonarqube, color: "#4E9BCD", category: "DevOps" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      color: "#7952B3",
      category: "Frontend",
    },
    { name: "GitHub", icon: FaGitAlt, color: "#151414ff", category: "Tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "Tools" },
    { name: "Vercel", icon: SiVercel, color: "#000000", category: "Tools" },
    { name: "Clerk", icon: SiClerk, color: "#000000", category: "Tools" },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      color: "#FF6F00",
      category: "AI/ML",
    },
    {
      name: "Scikit-learn",
      icon: SiScikitlearn,
      color: "#F7931E",
      category: "AI/ML",
    },
    {
      name: "Pandas",
      icon: SiScikitlearn,
      color: "#6148c7ff",
      category: "AI/ML",
    },
    {
      name: "NumPy",
      icon: SiScikitlearn,
      color: "#47c5eeff",
      category: "AI/ML",
    },
    {
      name: "Matplotlib",
      icon: SiScikitlearn,
      color: "#C72C48",
      category: "AI/ML",
    },
    { name: "NLP", icon: SiScikitlearn, color: "#F7931E", category: "AI/ML" },
    { name: "NLTK", icon: SiScikitlearn, color: "#F7931E", category: "AI/ML" },
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
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
            Technical toolkit
          </span>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Skills that power product experiences
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A blend of frontend craft, backend systems, and AI fluency used to build resilient, intelligent platforms.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category} className="w-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary dark:text-secondary font-semibold text-sm">
                  {category.substring(0, 2)}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 via-gray-200 dark:via-gray-700 to-transparent" />
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12">
                          <span
                            className="absolute inset-0 rounded-2xl opacity-20"
                            style={{ backgroundColor: skill.color }}
                          />
                          <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-white dark:bg-gray-900">
                            <skill.icon
                              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: skill.color }}
                            />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mt-1">
                            {category}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
