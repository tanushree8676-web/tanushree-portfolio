"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 text-center relative overflow-hidden group"
        >
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-lavender-400/20 via-cyan-400/20 to-lavender-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[pulse_3s_ease-in-out_infinite]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center mb-6 shadow-glass border border-white/60">
              <FileText className="w-10 h-10 text-lavender-600" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to create an <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">Impact?</span>
            </h2>
            
            <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
              Download my complete resume to see detailed information about my experience, education, and professional journey.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="relative px-8 py-4 bg-foreground text-white rounded-full overflow-hidden transition-all flex items-center gap-3 shadow-xl group/btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lavender-600 to-glow opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <Download className="w-5 h-5 relative z-10 group-hover/btn:-translate-y-1 transition-transform" />
              <span className="relative z-10 font-semibold tracking-wide">Download Resume</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
