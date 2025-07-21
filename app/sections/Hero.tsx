"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Code, Zap, Terminal } from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [particles, setParticles] = useState([]);

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
    if(mousePosition || !mousePosition) {
      const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
      window.addEventListener("mousemove", updateMousePosition);
      return () => window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 600,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const techStack = [
    { name: "JavaScript", icon: "JS", color: "text-yellow-400" },
    { name: "TypeScript", icon: "TS", color: "text-blue-400" },
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Next.js", icon: "▲", color: "text-white" },
    { name: "Node.js", icon: "📗", color: "text-green-400" },
    { name: "Python", icon: "🐍", color: "text-green-300" },
  ];

  return (
    <motion.section
      id="hero"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
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

      {/* Mouse Follower */}
      {/* <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      /> */}

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="space-y-3 lg:space-y-4"
            >
              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm lg:text-base">
                  Ahmedabad, Gujarat, India
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                <span className="text-white">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Dhyey Tank
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 space-y-2"
              >
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Code className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400" />
                  <span>Software Developer</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                  <span>Full-Stack Engineer</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Terminal className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" />
                  <span>Problem Solver</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-lg text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              Building scalable full-stack applications with modern
              technologies. Passionate about clean code, developer experience,
              and solving real-world problems.
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-6 mb-16">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 ${tech.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-sm font-mono">{tech.icon}</span>
                    <span className="text-xs text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          {/* Only render on large screens and up */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
                {/* Main Circle */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      DT
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {[
                  {
                    icon: "⚛️",
                    position:
                      "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    delay: 0,
                  },
                  {
                    icon: "🔥",
                    position:
                      "top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2",
                    delay: 1,
                  },
                  {
                    icon: "💻",
                    position:
                      "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
                    delay: 2,
                  },
                  {
                    icon: "🚀",
                    position:
                      "top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2",
                    delay: 3,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-xl sm:text-2xl`}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
