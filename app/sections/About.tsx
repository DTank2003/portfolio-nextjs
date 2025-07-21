"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Rocket,
  Users,
  Target,
  Trophy,
  BookOpen,
  Zap,
  Heart,
  Coffee,
  Music,
  Camera,
  Globe,
} from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [particles, setParticles] = useState<any []>([]);

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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.58, 1] as [number, number, number, number], // easeOut
      },
    },
  };

  const stats = [
    { number: "6+", label: "Modules Deployed", icon: Rocket },
    { number: "500+", label: "Users Impacted", icon: Users },
    { number: "95%", label: "Sprint Delivery", icon: Target },
    { number: "30%", label: "Performance Boost", icon: Zap },
  ];

  const interests = [
    {
      name: "Badminton",
      icon: Trophy,
      description: "National-level player & runner-up",
    },
    {
      name: "Photography",
      icon: Camera,
      description: "Capturing moments & stories",
    },
    { name: "Music", icon: Music, description: "Exploring different genres" },
    {
      name: "Travel",
      icon: Globe,
      description: "Learning through experiences",
    },
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: BookOpen },
    { id: "interests", label: "Beyond Code", icon: Heart },
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-yellow-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full filter blur-3xl"></div>
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
        id="about-section"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Software Developer with a passion for creating impactful solutions
            and pushing technological boundaries
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1 lg:p-2 border border-gray-700">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center sm:justify-start space-x-2 px-4 py-2 lg:px-6 lg:py-3 rounded-xl transition-all duration-300 text-sm lg:text-base ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto relative">
          {/* Story Tab */}
          <motion.div
            key={`story-${activeTab}`}
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{
              opacity: activeTab === "story" ? 1 : 0,
              x: activeTab === "story" ? 0 : -50,
              scale: activeTab === "story" ? 1 : 0.9,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${
              activeTab === "story"
                ? "block"
                : "absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Story Text */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: activeTab === "story" ? 1 : 0,
                  y: activeTab === "story" ? 0 : 30,
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Currently working as an{" "}
                    <strong className="text-white">
                      Associate Software Engineer
                    </strong>{" "}
                    at DRC Systems Limited in GIFT City, where I&apos;ve
                    engineered and deployed 6+ modules for a project management
                    tool, enhancing efficiency for 500+ users.
                  </p>
                  <p>
                    My journey started with a passion for problem-solving and
                    clean code. During my internship at{" "}
                    <strong className="text-white">
                      Reliance Industries Limited
                    </strong>
                    , I built RESTful APIs that improved asset management
                    efficiency by 25% and optimized database queries to reduce
                    system downtime.
                  </p>
                  <p>
                    I believe in the power of technology to solve real-world
                    problems. Whether it&apos;s building scalable web
                    applications or optimizing performance, I&apos;m always
                    looking for ways to make a meaningful impact through code.
                  </p>
                </div>

                <motion.div
                  className="flex items-center space-x-2 text-cyan-400"
                  whileHover={{ x: 10 }}
                >
                  <Coffee className="w-5 h-5" />
                  <span className="text-sm">
                    Fueled by coffee and curiosity
                  </span>
                </motion.div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeTab === "story" ? 1 : 0,
                  scale: activeTab === "story" ? 1 : 0.8,
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-6 lg:p-8 border border-gray-700">
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {[
                      {
                        title: "Education",
                        value: "Computer Engineering",
                        sub: "CGPA: 8.22/10",
                        color: "text-cyan-400",
                      },
                      {
                        title: "Experience",
                        value: "2+ Years",
                        sub: "Full-Stack Dev",
                        color: "text-purple-400",
                      },
                      {
                        title: "Projects",
                        value: "15+ Completed",
                        sub: "Web & Mobile",
                        color: "text-pink-400",
                      },
                      {
                        title: "Location",
                        value: "Gujarat, India",
                        sub: "Remote Friendly",
                        color: "text-green-400",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className="bg-gray-800/50 rounded-xl p-3 lg:p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: activeTab === "story" ? 1 : 0,
                          y: activeTab === "story" ? 0 : 20,
                        }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <div
                          className={`${item.color} font-semibold mb-2 text-sm lg:text-base`}
                        >
                          {item.title}
                        </div>
                        <div className="text-xs lg:text-sm text-gray-300">
                          {item.value}
                        </div>
                        <div className="text-xs text-gray-400">{item.sub}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Tab */}
          {/* <motion.div
            key={`skills-${activeTab}`}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{
              opacity: activeTab === "skills" ? 1 : 0,
              x: activeTab === "skills" ? 0 : 50,
              scale: activeTab === "skills" ? 1 : 0.9,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${
              activeTab === "skills"
                ? "block"
                : "absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{
                    opacity: activeTab === "skills" ? 1 : 0,
                    y: activeTab === "skills" ? 0 : 30,
                    scale: activeTab === "skills" ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </motion.div>
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-4">
                    {skill.category}
                  </h4>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        className="text-gray-300 text-xs lg:text-sm py-1 px-2 bg-gray-700/50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: activeTab === "skills" ? 1 : 0,
                          x: activeTab === "skills" ? 0 : -20,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.1 + itemIndex * 0.05,
                        }}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Interests Tab */}
          <motion.div
            key={`interests-${activeTab}`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{
              opacity: activeTab === "interests" ? 1 : 0,
              y: activeTab === "interests" ? 0 : 50,
              scale: activeTab === "interests" ? 1 : 0.9,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${
              activeTab === "interests"
                ? "block"
                : "absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 text-center border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{
                    opacity: activeTab === "interests" ? 1 : 0,
                    scale: activeTab === "interests" ? 1 : 0.8,
                    rotate: activeTab === "interests" ? 0 : -5,
                  }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5, rotate: 2 }}
                >
                  <motion.div
                    className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <interest.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg lg:text-xl font-bold text-white mb-2">
                    {interest.name}
                  </h4>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
