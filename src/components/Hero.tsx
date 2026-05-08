"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-lavender-600 mb-2 tracking-wide uppercase">
              Hello, I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground">
              Tanushree S
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 font-light h-16"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
                "Data Engineering Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-clip-text text-transparent bg-gradient-to-r from-lavender-600 to-glow font-medium"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-500 max-w-xl"
          >
            Crafting elegant, high-performance web applications and exploring the frontiers of artificial intelligence and data architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-foreground text-white rounded-full overflow-hidden transition-all hover:scale-105 flex items-center gap-2">
              <span className="relative z-10 font-medium">View Projects</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-lavender-600 to-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            
            <a href="#resume" className="group px-8 py-4 glass-card text-foreground rounded-full hover:bg-white/60 transition-all hover:scale-105 flex items-center gap-2">
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="font-medium">Resume</span>
            </a>

            <a href="#contact" className="group px-4 py-4 glass-card text-foreground rounded-full hover:bg-white/60 transition-all hover:scale-105 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" as const }}
          className="relative h-[400px] md:h-[600px] flex items-center justify-center z-10"
        >
          {/* Glassmorphism Photo Placeholder */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full glass flex items-center justify-center overflow-hidden animate-[spin_20s_linear_infinite] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-lavender-300/40 to-cyan-soft/40 mix-blend-overlay" />
            <div className="w-[95%] h-[95%] rounded-full bg-white/20 backdrop-blur-3xl shadow-inner flex items-center justify-center border border-white/50 animate-[spin_20s_linear_infinite_reverse]">
               <span className="text-gray-400 font-light tracking-widest text-sm">IMAGE PLACEHOLDER</span>
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-glow rounded-full blur-[2px] -translate-x-1/2 -translate-y-1/2 shadow-glow" />
            <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-lavender-500 rounded-full blur-[1px] shadow-[0_0_10px_#8b5cf6]" />
          </div>
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-lavender-300/30 rounded-full blur-[100px] -z-10" />
        </motion.div>

      </div>
    </section>
  );
}
