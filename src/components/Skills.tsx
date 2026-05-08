"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "AI & ML",
    skills: ["Python", "NLP", "LLMs", "Computer Vision"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 overflow-hidden bg-white/20">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">Arsenal</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and tools I use to build scalable, intelligent solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-lavender-400 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2 relative z-10">
                <span className="w-8 h-8 rounded-full bg-lavender-100 flex items-center justify-center text-lavender-600">
                  {index + 1}
                </span>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/60 border border-white/40 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:border-lavender-300 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
