"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Code2, Database, Zap, Terminal, Wrench, Layers } from "lucide-react";

export default function SkillsSection() {
  type SkillCategoryKey = keyof typeof skillCategories;

  type SkillCategoryType = (typeof skillCategories)[SkillCategoryKey];

  const [activeCategory, setActiveCategory] = useState<SkillCategoryKey>("languages");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  // const ref = React.useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  // Equivalent to: "languages" | "frameworks" | "databases" | "tools"

  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (mousePosition || !mousePosition) {
      const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    }
  }, [mousePosition]);

  const skillCategories = {
    languages: {
      title: "Languages",
      icon: Code2,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "JavaScript", level: 95, icon: "JS", color: "text-yellow-400" },
        { name: "TypeScript", level: 90, icon: "TS", color: "text-blue-400" },
        { name: "Python", level: 85, icon: "🐍", color: "text-green-400" },
        { name: "Java", level: 80, icon: "☕", color: "text-red-400" },
        { name: "C++", level: 75, icon: "C++", color: "text-purple-400" },
        { name: "SQL", level: 85, icon: "🗃️", color: "text-orange-400" },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "React", level: 95, icon: "⚛️", color: "text-cyan-400" },
        { name: "Next.js", level: 90, icon: "▲", color: "text-white" },
        { name: "Node.js", level: 88, icon: "📗", color: "text-green-400" },
        { name: "Express", level: 85, icon: "🚀", color: "text-gray-400" },
        { name: "Django", level: 80, icon: "🎸", color: "text-green-500" },
        {
          name: "Redux Toolkit",
          level: 85,
          icon: "🔄",
          color: "text-purple-400",
        },
        { name: "Tailwind CSS", level: 92, icon: "🎨", color: "text-teal-400" },
      ],
    },
    databases: {
      title: "Databases",
      icon: Database,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "MongoDB", level: 88, icon: "🍃", color: "text-green-400" },
        { name: "MySQL", level: 85, icon: "🐬", color: "text-blue-400" },
        { name: "PostgreSQL", level: 80, icon: "🐘", color: "text-blue-500" },
        { name: "SQLite", level: 75, icon: "💾", color: "text-gray-400" },
        { name: "Prisma ORM", level: 85, icon: "⚡", color: "text-indigo-400" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-400 to-red-400",
      skills: [
        { name: "Git", level: 90, icon: "🌿", color: "text-red-400" },
        { name: "Docker", level: 75, icon: "🐳", color: "text-blue-400" },
        { name: "GitHub", level: 92, icon: "🐙", color: "text-white" },
        { name: "GitLab", level: 80, icon: "🦊", color: "text-orange-400" },
        { name: "Postman", level: 85, icon: "📮", color: "text-orange-500" },
        { name: "Jira", level: 80, icon: "📋", color: "text-blue-500" },
        { name: "Figma", level: 78, icon: "🎨", color: "text-pink-400" },
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0, 0, 0.58, 1] as [number, number, number, number], // easeOut cubic-bezier
        delay: 0.5,
      },
    }),
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-400 text-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-4 h-4" />
            <span>Technical Expertise</span>
          </motion.div>

          {/* <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"> */}
          {/* <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </motion.h2>
          {/* </span> */}
          {/* </h2> */}

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical stack and proficiency
            levels across different domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {(
            Object.entries(skillCategories) as [
              SkillCategoryKey,
              SkillCategoryType
            ][]
          ).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-400 hover:text-white hover:border-cyan-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Skills List */}
          <div className="space-y-6">
            <motion.h3
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold bg-gradient-to-r ${skillCategories[activeCategory].color} bg-clip-text text-transparent`}
            >
              {skillCategories[activeCategory].title}
            </motion.h3>

            <div className="space-y-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className={`text-lg ${skill.color}`}>
                        {skill.icon}
                      </span>
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400 font-mono">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full`}
                      variants={skillBarVariants}
                      initial="hidden"
                      animate="visible"
                      custom={skill.level}
                    />
                    <motion.div
                      className="absolute top-0 right-0 w-1 h-full bg-white opacity-50 rounded-full"
                      animate={{
                        x: [0, 4, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className="relative hidden lg:block">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 p-8 overflow-hidden"
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-2xl"></div>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Skills Visualization */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {skillCategories[activeCategory].skills
                    .slice(0, 6)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative"
                      >
                        <motion.div
                          className="w-26 h-26 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-2xl group-hover:border-cyan-400 transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -5 }}
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        >
                          <span className={skill.color}>{skill.icon}</span>
                        </motion.div>

                        {/* Skill Level Indicator */}
                        <motion.div
                          className={`absolute -bottom-1 w-8 h-8 rounded-full  bg-gradient-to-r ${skillCategories[activeCategory].color} flex items-center justify-center text-xs font-bold text-white`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {Math.floor(skill.level / 10)}
                        </motion.div>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-4 h-4 text-cyan-400" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Languages", value: "6+", icon: Code2 },
            { label: "Frameworks", value: "10+", icon: Layers },
            { label: "Databases", value: "5+", icon: Database },
            { label: "Tools", value: "15+", icon: Wrench },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-gray-700 mb-4 group-hover:border-cyan-400 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
