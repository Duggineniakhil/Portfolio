import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/ui/sparkles-text";

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/Duggineniakhil", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/akhil-duggineni-774431260/", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://x.com/AkhilDuggineni", label: "Twitter" },
    { icon: "fas fa-envelope", url: "mailto:akhilduggineni14@gmail.com", label: "Email" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>
      
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-zinc-400 text-xs font-mono tracking-tight">Available for new opportunities</span>
          </div>

          {/* Name Section */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white font-mono">
            <span className="text-cyan-400">D</span>uggineni <span className="text-cyan-400">A</span>khil
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-cyan-400 ml-1`}>_</span>
          </h1>

          {/* Role & Flags */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-8 text-zinc-400 font-mono text-lg">
            <span>🇮🇳</span>
            <span>Full Stack Developer</span>
            <span className="text-zinc-700">•</span>
            <span>AI / ML Enthusiast</span>
            <span className="text-zinc-700">•</span>
            <span>Problem Solver</span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems and seamless web experiences. 
            Focused on crafting clean code and high-performance applications 🚀
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="/Akhil_Duggineni_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white font-bold hover:border-cyan-400/50 transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-cyan-400 text-2xl transition-colors duration-300"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <i className="fas fa-chevron-down text-xl"></i>
      </motion.div>
    </main>
  );
}
