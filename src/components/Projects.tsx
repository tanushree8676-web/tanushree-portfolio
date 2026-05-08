"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "CyberRakshak",
    description: "An advanced cybersecurity platform providing proactive threat detection and real-time monitoring.",
    features: ["Real-time Monitoring", "Threat Detection", "Automated Alerts"],
    tech: ["Next.js", "Python", "AI/ML", "WebSockets"],
    github: "#",
    live: "#",
    flagship: true,
  },
  {
    title: "LifeLink",
    description: "A seamless healthcare connectivity application bridging the gap between patients and medical professionals.",
    features: ["Appointment Booking", "Telemedicine", "Patient Records"],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: "#",
    flagship: false,
  },
  {
    title: "AllAble",
    description: "An accessibility-first platform designed to empower individuals with disabilities through smart tools.",
    features: ["Voice Navigation", "Screen Reader Support", "Custom UI"],
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "#",
    live: "#",
    flagship: false,
  },
  {
    title: "HomeStays",
    description: "A premium booking platform for exclusive homestays with virtual tours and seamless payment integration.",
    features: ["Virtual Tours", "Payment Gateway", "Review System"],
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    flagship: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A selection of my best work, showcasing intelligent solutions and scalable architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" as const }}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 flex flex-col group relative overflow-hidden ${project.flagship ? 'md:col-span-2 lg:col-span-2 bg-white/60 border-lavender-300 shadow-[0_8px_32px_rgba(139,92,246,0.15)]' : ''}`}
            >
              {/* Flagship Indicator */}
              {project.flagship && (
                <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-lavender-500 to-glow rounded-full text-white text-xs font-semibold shadow-lg">
                  <Sparkles className="w-3 h-3" /> Flagship Project
                </div>
              )}

              {/* Animated Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className={`font-bold text-foreground mb-4 ${project.flagship ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-2 uppercase tracking-wider">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                    {project.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-lavender-50/50 text-lavender-700 text-xs font-medium rounded-full border border-lavender-200">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Placeholders for 3D/Video preview could go here */}
                <div className={`w-full bg-gray-100 rounded-xl mb-8 flex items-center justify-center overflow-hidden border border-white/50 shadow-inner group-hover:shadow-glass transition-all ${project.flagship ? 'h-64 md:h-80' : 'h-48'}`}>
                   <span className="text-gray-400 font-medium tracking-widest text-sm">PREVIEW PLACEHOLDER</span>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-lavender-600 transition-colors">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-glow transition-colors ml-auto">
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
