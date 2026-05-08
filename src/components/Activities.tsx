"use client";

import { motion } from "framer-motion";
import { Trophy, Lightbulb, Rocket, Target } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "AI Hackathon Winner",
    description: "Developed an innovative NLP solution for real-time sentiment analysis, securing first place.",
    icon: <Trophy className="w-5 h-5 text-glow" />,
  },
  {
    year: "2023",
    title: "Data Engineering Ideathon",
    description: "Proposed a scalable pipeline architecture for handling massive IoT data streams.",
    icon: <Lightbulb className="w-5 h-5 text-lavender-500" />,
  },
  {
    year: "2022",
    title: "First Open Source Contribution",
    description: "Contributed core features to a popular data processing library in Python.",
    icon: <Rocket className="w-5 h-5 text-cyan-500" />,
  },
  {
    year: "2021",
    title: "Journey Begins",
    description: "Started exploring the fascinating world of web development and artificial intelligence.",
    icon: <Target className="w-5 h-5 text-violet-500" />,
  },
];

export default function Activities() {
  return (
    <section id="activities" className="relative w-full py-32 overflow-hidden bg-white/20">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">Achievements</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A timeline of hackathons, ideathons, and milestones in my continuous learning journey.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-lavender-200/50 ml-6 md:ml-1/2">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="mb-12 relative pl-8 md:pl-0"
            >
              <div className="absolute -left-[41px] bg-white border-4 border-lavender-100 w-12 h-12 rounded-full flex items-center justify-center shadow-glass z-10">
                {item.icon}
              </div>
              
              <div className="md:w-1/2 md:ml-12 glass-card p-6 relative group hover:-translate-y-1 transition-transform">
                <div className="absolute top-6 -left-3 w-3 h-3 bg-white/40 rotate-45 border-l border-b border-white/30 hidden md:block" />
                <span className="inline-block px-3 py-1 bg-lavender-50 text-lavender-600 text-xs font-bold rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-lavender-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
