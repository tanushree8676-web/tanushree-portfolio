"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-gray-200 relative overflow-hidden bg-white/30 backdrop-blur-md">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lavender-400 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm font-medium"
        >
          © {new Date().getFullYear()} Tanushree S. All rights reserved.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 text-sm font-medium text-gray-500"
        >
          <a href="#" className="hover:text-lavender-600 transition-colors">Twitter</a>
          <a href="#" className="hover:text-lavender-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-lavender-600 transition-colors">GitHub</a>
        </motion.div>
      </div>
    </footer>
  );
}
