import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "HealthAI — Chest X-Ray Detection",
    description: "Deep learning system for multi-label chest disease detection from X-ray images using EfficientNetB0.",
    src: "health_ai.png",
    color: "#00c6ff",
    githubLink: "https://github.com/Duggineniakhil/HealthAI",
    liveLink: "https://github.com/Duggineniakhil/HealthAI",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Stock Dashboard App",
    description: "Full-stack stock tracking with real-time prices and email alerts.",
    src: "stock_dashboard.png",
    color: "#00b09b",
    githubLink: "https://github.com/Duggineniakhil/StockTracker",
    liveLink: "https://stock-tracker-1-sj4n.onrender.com",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "DAC Shoes — E-Commerce",
    description: "Responsive e-commerce store with mobile-first UI.",
    src: "dac_shoes.png",
    color: "#ff512f",
    githubLink: "https://github.com/Duggineniakhil/E-commerece-ShoeStore",
    liveLink: "https://dacshoestore.netlify.app",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Vectra — Ride Booking",
    description: "Real-time ride-sharing application with live driver tracking.",
    src: "vectra.png",
    color: "#8a2be2",
    githubLink: "https://github.com/Duggineniakhil/Vectra",
    liveLink: "https://github.com/Duggineniakhil/Vectra",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Oral Cancer Detection AI",
    description: "MedSAM and ConvNeXt for advanced oral cancer detection.",
    src: "oral_cancer.png",
    color: "#cc0000",
    githubLink: "https://github.com/Duggineniakhil/oral-cancer-detection",
    liveLink: "https://github.com/Duggineniakhil/oral-cancer-detection",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Taskflow — Task Manager",
    description: "Productivity app built with TypeScript and React.",
    src: "taskflow.png",
    color: "#00b386",
    githubLink: "https://github.com/Duggineniakhil/taskflow",
    liveLink: "https://taskflow-kohl-beta.vercel.app",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Bus Reservation System",
    description: "Core DSA implementation for booking and cancellation.",
    src: "bus_reservation.png",
    color: "#e65c00",
    githubLink: "https://github.com/Duggineniakhil/BUS-RESERVATION-SYSYTEM",
    liveLink: "https://github.com/Duggineniakhil/BUS-RESERVATION-SYSYTEM",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work, ranging from AI/ML systems to full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  function onMouseMove(e) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl overflow-hidden",
        project.className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
        <EvervaultCard text="" className="scale-150" />
      </div>

      <div className="relative z-10 h-full p-6 flex flex-col justify-between" style={{ transform: "translateZ(50px)" }}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
             <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center bg-zinc-800/50 border border-zinc-700/50"
              style={{ color: project.color }}
            >
              <i className="fas fa-project-diagram text-xl"></i>
            </div>
            <div className="flex gap-3">
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
              >
                <i className="fas fa-external-link-alt text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-2 line-clamp-3">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800/50">
          <img 
            src={project.src} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
          />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
