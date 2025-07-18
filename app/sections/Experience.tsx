"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Briefcase, Calendar, Building, Check } from "lucide-react";

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const experiences = [
    {
      id: 1,
      company: "DRC Systems Limited",
      role: "Associate Software Engineer",
      period: "Jan 2025 – Present",
      description:
        "Contributing to the development of a project management tool, enhancing user efficiency through modular design, real-time communication, and Agile delivery practices.",
      responsibilities: [
        "Engineered and deployed 6+ modules for a project management tool used by 500+ users",
        "Collaborated in Agile sprints with 95% on-time sprint delivery",
        "Integrated REST APIs and WebSockets to reduce data sync delays by 30%",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "WebSockets",
        "REST APIs",
        "Agile",
      ],
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      company: "Reliance Industries Limited",
      role: "Summer Software Intern",
      period: "May 2023 – June 2023",
      description:
        "Contributed to backend infrastructure for asset management by building performant APIs and optimizing database interactions for better system uptime.",
      responsibilities: [
        "Built 5 RESTful API endpoints for asset management",
        "Created scalable backend schemas aligned with enterprise IT standards",
        "Optimized MySQL queries, reducing system downtime by 10%",
      ],
      technologies: ["Node.js", "Express", "MySQL", "REST APIs", "Postman"],
      gradient: "from-orange-400 to-amber-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section
      id="experience"
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            <Briefcase className="w-4 h-4" />
            <span>Professional Journey</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </motion.h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My professional journey showcasing technical expertise, leadership,
            and problem-solving skills
          </p>
        </motion.div>

        {/* Experience Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
            {experiences.map((experience, index) => (
              <motion.button
                key={experience.id}
                onClick={() => setActiveExperience(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeExperience === index
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {experience.company}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Experience Display */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start sm:-mb-5 md:-mb-5 lg:mb-5"
        >
          {/* Experience Details */}
          <motion.div
            key={`experience-${activeExperience}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <motion.div
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${experiences[activeExperience].gradient} text-white`}
                  whileHover={{ scale: 1.05 }}
                >
                  {experiences[activeExperience].period}
                </motion.div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                {experiences[activeExperience].role}
              </h3>

              <p
                className={`text-xl font-medium bg-gradient-to-r ${experiences[activeExperience].gradient} bg-clip-text text-transparent`}
              >
                {experiences[activeExperience].company}
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                {experiences[activeExperience].description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Key Responsibilities & Achievements
              </h4>
              <ul className="space-y-3">
                {experiences[activeExperience].responsibilities.map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 mt-1 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  )
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experiences[activeExperience].technologies.map(
                  (tech, index) => (
                    <motion.span
                      key={`tech-${activeExperience}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Experience Visual */}
          <motion.div
            key={`visual-${activeExperience}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-full lg:block hidden"
          >
            <div className="sticky top-24">
              <div className="relative group">
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${experiences[activeExperience].gradient} flex items-center justify-center mb-6`}
                    >
                      <Building className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experiences[activeExperience].company}
                    </h3>

                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{experiences[activeExperience].period}</span>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

                    <div className="space-y-4">
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">
                          Role Impact
                        </h4>
                        <p className="text-gray-400">
                          Contributed to company growth through technical
                          leadership and innovative solutions, delivering
                          projects with measurable impact.
                        </p>
                      </div>

                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">
                          Career Growth
                        </h4>
                        <p className="text-gray-400">
                          Developed expertise in modern web technologies while
                          mentoring junior team members and improving
                          development processes.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
