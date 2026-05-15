import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HealthAI",
    category: "AI / DEEP LEARNING",
    description: "Built an end-to-end deep learning system for multi-label chest disease detection from X-ray images using EfficientNetB0.",
    src: "health_ai.png",
    tags: ["EfficientNetB0", "TensorFlow", "FastAPI"],
    githubLink: "https://github.com/Duggineniakhil/HealthAI",
    liveLink: "https://github.com/Duggineniakhil/HealthAI",
  },
  {
    title: "Stock Dashboard",
    category: "WEB APP",
    description: "Full-stack stock tracking web application with authentication, watchlists, real-time prices, and email alerts.",
    src: "stock_dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Auth0"],
    githubLink: "https://github.com/Duggineniakhil/Stock_Tracker",
    liveLink: "https://stock-tracker-1-sj4n.onrender.com",
  },
  {
    title: "DAC Shoes",
    category: "E-COMMERCE",
    description: "Built a responsive multi-page e-commerce website with core shopping flows, mobile-first UI, and cart logic.",
    src: "dac_shoes.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubLink: "https://github.com/Duggineniakhil/E-commerece-ShoeStore",
    liveLink: "https://dacshoestore.netlify.app",
  },
  {
    title: "Vectra",
    category: "MOBILE APP",
    description: "Full-stack real-time ride-sharing application built with Flutter, Dart, and WebSockets for live driver tracking.",
    src: "vectra.png",
    tags: ["Flutter", "Dart", "WebSockets", "Firebase"],
    githubLink: "https://github.com/Duggineniakhil/Vectra",
    liveLink: "https://github.com/Duggineniakhil/Vectra",
  },
  {
    title: "Oral Cancer AI",
    category: "MED AI",
    description: "Advanced deep learning system for Oral Cancer Detection utilizing ConvNeXt and MedSAM architectures.",
    src: "oral_cancer.png",
    tags: ["ConvNeXt", "MedSAM", "PyTorch"],
    githubLink: "https://github.com/Duggineniakhil/oral-cancer-detection",
    liveLink: "https://github.com/Duggineniakhil/oral-cancer-detection",
  },
  {
    title: "Taskflow",
    category: "PRODUCTIVITY",
    description: "Responsive productivity and task management web app built with TypeScript, React, and modern frontend practices.",
    src: "taskflow.png",
    tags: ["TypeScript", "React", "TailwindCSS"],
    githubLink: "https://github.com/Duggineniakhil/taskflow",
    liveLink: "https://taskflow-kohl-beta.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-transparent relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            /Projects<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-zinc-500 font-mono">Some things I&apos;ve built.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-zinc-800">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] mb-2 uppercase font-mono">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-zinc-800/50 text-zinc-500 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono font-bold text-zinc-600 group-hover:text-cyan-400 transition-colors hover:underline"
                  >
                    READ MORE →
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
