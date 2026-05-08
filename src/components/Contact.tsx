"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Let&apos;s build the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-glow">future together.</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-md">
                I am currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-lavender-50 transition-colors border border-white/50">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-lavender-600 transition-colors" />
                </div>
                <span className="text-lg font-medium text-gray-700 group-hover:text-foreground transition-colors">
                  tanushrees@example.com
                </span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:-translate-y-1 hover:shadow-glow transition-all border border-white/50">
                  <Github className="w-5 h-5 text-gray-700" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:-translate-y-1 hover:shadow-glow transition-all border border-white/50">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-glow/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavender-500/10 rounded-full blur-[80px] -z-10" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 ml-1">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/50 border border-white/60 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:bg-white/80 transition-all placeholder:text-gray-400 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/50 border border-white/60 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:bg-white/80 transition-all placeholder:text-gray-400 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 ml-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/50 border border-white/60 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-lavender-400 focus:bg-white/80 transition-all placeholder:text-gray-400 backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-foreground text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-lavender-600 to-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!isSubmitting && <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
