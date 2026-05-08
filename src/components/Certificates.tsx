"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certificates() {
  const certs = [1, 2, 3, 4, 5]; // Placeholder data

  return (
    <section id="certificates" className="relative w-full py-32 overflow-hidden bg-white/10">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">Certifications</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll container (basic CSS scroll for simplicity and performance) */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar p-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="snap-center shrink-0 w-[300px] sm:w-[400px] aspect-[4/3] glass-card p-2 group cursor-pointer relative"
            >
              <div className="w-full h-full bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-white/50 overflow-hidden relative">
                <Award className="w-12 h-12 text-lavender-300 mb-2 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-gray-400 font-medium tracking-widest text-xs z-10">CERTIFICATE PLACEHOLDER {cert}</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
