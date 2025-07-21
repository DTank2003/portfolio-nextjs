"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Github,
  Play,
  Code2,
  TrendingUp,
  GraduationCap,
  MessageSquare,
  CreditCard,
  BarChart3,
  Users,
  Shield,
  Smartphone,
  Globe,
  ChevronDown,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const controls = useAnimation();
  // const ref = React.useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const projects = [
    {
      id: 1,
      title: "FinManager",
      subtitle: "Personal Finance Manager",
      description:
        "A comprehensive finance tracker with transaction monitoring, account management, and real-time market updates. Features multi-currency support and AI-powered sentiment analysis.",
      technologies: [
        "React",
        "TypeScript",
        "MySQL",
        "Prisma",
        "Recharts",
        "Tailwind CSS",
        "Node.js",
        "Redux Toolkit",
      ],
      highlights: [
        { icon: TrendingUp, text: "Live market updates" },
        { icon: BarChart3, text: "Interactive dashboards" },
        { icon: Shield, text: "Secure transactions" },
        { icon: Globe, text: "Multi-currency support" },
      ],
      github: "https://github.com/DTank2003/Advanced-Finance-Manager",
      demo: "#",
      category: "Full-Stack",
      status: "Live",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      id: 2,
      title: "EduVerse",
      subtitle: "E-Learning Platform",
      description:
        "A modern e-learning platform with secure authentication, payment integration, and adaptive video streaming. Features interactive quizzes and automated certificate generation.",
      technologies: [
        "Next.js",
        "NextAuth",
        "Prisma",
        "NeonDB",
        "HLS.js",
        "Stripe",
        "Tailwind CSS",
      ],
      highlights: [
        { icon: GraduationCap, text: "Interactive learning" },
        { icon: Play, text: "Adaptive streaming" },
        { icon: CreditCard, text: "Payment integration" },
        { icon: Users, text: "Multi-user support" },
      ],
      github: "https://github.com/DTank2003/EduVerse--E-Learning-Platform",
      demo: "#",
      category: "Full-Stack",
      status: "Live",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      id: 3,
      title: "BlogConnect",
      subtitle: "Interactive Blog Platform",
      description:
        "A feature-rich blog platform with intuitive content creation tools, commenting system, and social features. Built with Python Django for robust backend functionality.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      highlights: [
        { icon: MessageSquare, text: "Interactive comments" },
        { icon: Users, text: "User engagement" },
        { icon: Code2, text: "Clean architecture" },
        { icon: Smartphone, text: "Mobile responsive" },
      ],
      github: "https://github.com/DTank2003/Django-Blog_Application",
      demo: "#",
      category: "Full-Stack",
      status: "Live",
      gradient: "from-purple-400 to-pink-500",
    },
    // {
    //   id: 4,
    //   title: "HealthTrack",
    //   subtitle: "Fitness & Wellness App",
    //   description:
    //     "A comprehensive health tracking application with workout planning, nutrition logging, and health analytics. Includes AI-powered recommendations and progress tracking.",
    //   technologies: [
    //     "React Native",
    //     "Firebase",
    //     "Redux",
    //     "Node.js",
    //     "TensorFlow.js",
    //     "Tailwind CSS",
    //   ],
    //   highlights: [
    //     { icon: Star, text: "Personalized workouts" },
    //     { icon: BarChart3, text: "Progress analytics" },
    //     { icon: Users, text: "Community features" },
    //     { icon: Smartphone, text: "Mobile-first design" },
    //   ],
    //   github: "#",
    //   demo: "#",
    //   category: "Mobile App",
    //   status: "In Development",
    //   gradient: "from-orange-400 to-red-500",
    // },
    // {
    //   id: 5,
    //   title: "MarketInsight",
    //   subtitle: "E-commerce Analytics",
    //   description:
    //     "Advanced analytics platform for e-commerce businesses providing sales insights, customer behavior analysis, and inventory optimization recommendations.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "PostgreSQL",
    //     "D3.js",
    //     "Redis",
    //     "Tailwind CSS",
    //   ],
    //   highlights: [
    //     { icon: BarChart3, text: "Sales analytics" },
    //     { icon: Users, text: "Customer segmentation" },
    //     { icon: TrendingUp, text: "Trend forecasting" },
    //     { icon: CreditCard, text: "Revenue optimization" },
    //   ],
    //   github: "#",
    //   demo: "#",
    //   category: "Analytics",
    //   status: "Live",
    //   gradient: "from-indigo-400 to-violet-500",
    // },
  ];

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

  return (
    // <section
    //   id="projects"
    //   className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden py-20"
    // >
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden pt-20 lg:pb-20 md:pb-10 sm:pb-10"
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
            <Code2 className="w-4 h-4" />
            <span>Featured Work</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work featuring full-stack applications,
            innovative solutions, and real-world impact
          </p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12 relative"
        >
          {/* Desktop: Horizontal buttons */}
          <div className="hidden md:flex sm:flex space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2 overflow-x-auto max-w-full">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeProject === index
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.title}
              </motion.button>
            ))}
          </div>

          {/* Mobile: Dropdown menu */}
          <div className="md:hidden w-full max-w-xs mx-auto">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-full flex justify-between items-center px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                isMobileMenuOpen
                  ? "bg-gray-800 border border-gray-700 rounded-b-none"
                  : "bg-gray-800/50 backdrop-blur-sm border border-gray-700"
              }`}
              whileTap={{ scale: 0.98 }}
            >
              <span className="truncate pr-2">
                {projects[activeProject].title}
              </span>
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.button>

            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute z-20 w-full max-w-xs bg-gray-800 border border-gray-700 border-t-0 rounded-b-xl overflow-hidden"
              >
                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                  {projects.map((project, index) => (
                    <motion.button
                      key={project.id}
                      onClick={() => {
                        setActiveProject(index);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-6 py-3 font-medium transition-colors duration-200 ${
                        activeProject === index
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400"
                          : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                      }`}
                      whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                    >
                      <div className="flex items-center">
                        <span className="truncate">{project.title}</span>
                        {activeProject === index && (
                          <div className="ml-2 w-2 h-2 bg-cyan-500 rounded-full"></div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Main Project Display */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Project Details */}
          <motion.div
            key={`project-${activeProject}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <motion.div
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${projects[activeProject].gradient} text-white`}
                  whileHover={{ scale: 1.05 }}
                >
                  {projects[activeProject].status}
                </motion.div>
                <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-800/50 border border-gray-700 text-gray-400">
                  {projects[activeProject].category}
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                {projects[activeProject].title}
              </h3>

              <p
                className={`text-lg font-medium bg-gradient-to-r ${projects[activeProject].gradient} bg-clip-text text-transparent`}
              >
                {projects[activeProject].subtitle}
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                {projects[activeProject].description}
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects[activeProject].highlights.map((highlight, index) => (
                <motion.div
                  key={`highlight-${activeProject}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                >
                  <highlight.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech, index) => (
                  <motion.span
                    key={`tech-${activeProject}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={projects[activeProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-600 rounded-lg text-gray-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Project Visual */}
          <motion.div
            key={`visual-${activeProject}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:relative hidden lg:block"
          >
            <div className="relative group">
              {/* Main Project Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${projects[activeProject].gradient} flex items-center justify-center`}
                >
                  <div className="text-white text-center px-4">
                    <div className="text-3xl sm:text-4xl font-bold mb-2">
                      {projects[activeProject].title}
                    </div>
                    <div className="text-lg opacity-80">
                      {projects[activeProject].subtitle}
                    </div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <div className="font-semibold">
                          {projects[activeProject].title}
                        </div>
                        <div className="text-sm text-gray-300">
                          {projects[activeProject].subtitle}
                        </div>
                      </div>
                      <motion.div
                        className="flex space-x-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.a
                          href={projects[activeProject].github}
                          target="_blank"
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4 text-white" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Project Cards */}
        {/* <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-6 md:hidden"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden"
            >
              <div
                className={`h-32 bg-gradient-to-r ${project.gradient} p-4 flex flex-col justify-between`}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <div className="px-2 py-1 text-xs font-semibold bg-black/30 rounded-full text-white">
                      {project.category}
                    </div>
                  </div>
                </div>
                <p className="text-white/90">{project.subtitle}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span>View Code</span>
                  </a>
                  <button
                    onClick={() => setActiveProject(index)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activeProject === index
                        ? "bg-cyan-500 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {activeProject === index ? "Viewing" : "View"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.8);
        }
      `}</style>
    </motion.section>
  );
}
