import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PadelVision",
    category: "COMPUTER VISION",
    description: "Turns a single-camera padel match video into player tracking, court heatmaps, rally and shot maps, shot-speed estimates and auto-cut highlight videos, with a dashboard to explore each match.",
    src: "padel_vision.png",
    tags: ["YOLO11", "ByteTrack", "OpenCV", "FastAPI", "Python"],
    githubLink: "https://github.com/Duggineniakhil/PadelVision",
  },
  {
    title: "Oral Cancer AI",
    category: "MEDICAL AI · RESEARCH",
    description: "Four-class oral histopathology classifier: ConvNeXt-Tiny reaches 92.2% balanced accuracy and 0.985 macro AUC, with MedSAM and U-Net segmentation, Grad-CAM and a shortcut-bias analysis.",
    src: "oral_cancer.png",
    tags: ["PyTorch", "ConvNeXt", "MedSAM", "U-Net"],
    githubLink: "https://github.com/Duggineniakhil/oral-cancer-detection",
  },
  {
    title: "Annapoorna Link",
    category: "HACKATHON · SOCIAL IMPACT",
    description: "Bilingual (English and Telugu) app built for ACE Builders Hackathon 2026 that routes surplus food from caterers and wedding halls to shelters, with volunteer pickups and live status at every step.",
    src: "annapoorna_link.jpg",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "PWA"],
    githubLink: "https://github.com/Duggineniakhil/Annapoorna_Link",
    liveLink: "https://annapoorna-link.vercel.app",
  },
  {
    title: "SmartFill",
    category: "BROWSER EXTENSION",
    description: "Chrome extension that fills job applications on Greenhouse, Lever, Workday and more, scores how well you match each role, drafts answers from your CV and tracks every application.",
    src: "smartfill.png",
    tags: ["TypeScript", "React", "Chrome Extension", "Playwright"],
    githubLink: "https://github.com/Duggineniakhil/SmartFill",
    liveLink: "https://smart-fill-lemon.vercel.app",
  },
  {
    title: "Quotra",
    category: "FULL STACK · AI",
    description: "Stock portfolio tracker with live quotes, RSI/SMA charts, S&P 500 benchmarking, background alert jobs, and a Gemini-powered advisor with news sentiment.",
    src: "quotra.jpg",
    tags: ["React", "Node.js", "Express", "SQLite", "Gemini"],
    githubLink: "https://github.com/Duggineniakhil/Stock_Tracker",
    liveLink: "https://stock-tracker-lime-nu.vercel.app",
  },
  {
    title: "ReconAgent",
    category: "AI AGENT · FINTECH",
    description: "AI agent that reconciles invoices against bank transactions and Razorpay settlements, handling rounding, date drift and name variants, with live run progress and precision/recall tracking per run.",
    src: "reconagent.jpg",
    tags: ["Gemini", "Node.js", "PostgreSQL", "React", "Razorpay API"],
    githubLink: "https://github.com/Duggineniakhil/ReconAgent",
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
                    aria-label={`${project.title} on GitHub`}
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  )}
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
