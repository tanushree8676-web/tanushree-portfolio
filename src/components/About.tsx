"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code, Cpu } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const stats = [
    { label: "Projects Built", value: "10+", icon: <Code className="w-6 h-6 text-lavender-600" /> },
    { label: "Hackathons", value: "5+", icon: <Brain className="w-6 h-6 text-glow" /> },
    { label: "Technologies", value: "20+", icon: <Cpu className="w-6 h-6 text-violet-500" /> },
    { label: "Learning Domains", value: "4", icon: <Database className="w-6 h-6 text-cyan-500" /> },
  ];

  return (
    <section id="about" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left: Intro */}
          <div className="flex-1 space-y-6">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">Me</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with a deep-rooted interest in Data Engineering and Artificial Intelligence. My journey revolves around building scalable, intelligent systems that solve real-world problems.
              </p>
              <p>
                Currently exploring the intersection of modern web development and advanced AI models. I thrive in environments that challenge my problem-solving skills and allow me to continuously learn.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-xl font-medium text-foreground mb-4">Core Focus Areas</h3>
              <div className="flex flex-wrap gap-3">
                {['AI & ML', 'NLP', 'LLMs', 'Data Engineering', 'Backend Dev'].map((focus) => (
                  <span key={focus} className="px-4 py-2 glass-card text-sm font-medium text-foreground/80 hover:bg-white/60 transition-colors cursor-default">
                    {focus}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-500/0 to-cyan-500/0 group-hover:from-lavender-500/10 group-hover:to-cyan-500/10 transition-colors duration-500" />
                <div className="mb-4 p-3 bg-white/50 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</h4>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
