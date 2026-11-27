import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Coins,
  Headset,
  Clapperboard,
  Car,
  Award,
  Github,
  ArrowUpRight,
} from "lucide-react";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & ML" },
  { id: "agents", label: "AI Agents" },
  { id: "apps", label: "Full Stack & Apps" },
];

const projects = [
  {
    title: "PadelVision",
    category: "COMPUTER VISION",
    group: "ai",
    description:
      "An 11-stage computer-vision pipeline that turns a padel match video into 4-player and ball tracking on a 2D mini-court, heatmaps, shot maps, speed stats and auto-cut highlights, run through a FastAPI job queue with a Next.js dashboard.",
    src: "padel_vision.png",
    tags: ["YOLO", "OpenCV", "Homography", "FastAPI", "Next.js"],
    githubLink: "https://github.com/Duggineniakhil/PadelVision",
  },
  {
    title: "SymBioForge",
    category: "AGENTIC AI · MCP",
    group: "agents",
    badge: "2nd place · NitroStack Hackathon",
    description:
      "4-member team build: an 8-agent swarm that matches factory waste to reusable inputs across a 15-factory cluster, shipped as an MCP server with 14 tools and 9 widgets plus a Next.js dashboard with compliance reports.",
    src: "symbioforge.jpg",
    tags: ["NitroStack", "MCP", "Next.js", "TypeScript", "Zod"],
    githubLink: "https://github.com/Duggineniakhil/SymBioForge",
    liveLink: "https://sym-bio-forge.vercel.app",
  },
  {
    title: "Oral Cancer AI",
    category: "MEDICAL AI · RESEARCH",
    group: "ai",
    description:
      "Four-class oral histopathology classifier: ConvNeXt-Tiny reaches 92.2% balanced accuracy and 0.985 macro AUC, with MedSAM and U-Net segmentation, Grad-CAM and a shortcut-bias analysis.",
    src: "oral_cancer.png",
    tags: ["PyTorch", "ConvNeXt", "MedSAM", "U-Net"],
    githubLink: "https://github.com/Duggineniakhil/oral-cancer-detection",
  },
  {
    title: "Annapoorna Link",
    category: "SOCIAL IMPACT",
    group: "apps",
    badge: "ACE Builders Hackathon 2026",
    description:
      "Bilingual (English and Telugu) app that routes surplus food from caterers and wedding halls to shelters, with volunteer pickups and live status at every step.",
    src: "annapoorna_link.jpg",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "PWA"],
    githubLink: "https://github.com/Duggineniakhil/Annapoorna_Link",
    liveLink: "https://annapoorna-link.vercel.app",
  },
  {
    title: "SmartFill",
    category: "BROWSER EXTENSION",
    group: "apps",
    description:
      "Chrome extension that fills job applications on Greenhouse, Lever, Workday and more, scores how well you match each role, drafts answers from your CV and tracks every application.",
    src: "smartfill.png",
    tags: ["TypeScript", "React", "Chrome Extension", "Playwright"],
    githubLink: "https://github.com/Duggineniakhil/SmartFill",
    liveLink: "https://smart-fill-lemon.vercel.app",
  },
  {
    title: "ReconAgent",
    category: "AI AGENT · FINTECH",
    group: "agents",
    description:
      "Autonomous LLM agent that reconciles invoices against bank transactions using tool calls and fraud heuristics, with an exact-match precheck that skips the LLM for easy records and a metrics API scoring precision and recall.",
    src: "reconagent.jpg",
    tags: ["Gemini", "Node.js", "PostgreSQL", "React", "Razorpay API"],
    githubLink: "https://github.com/Duggineniakhil/ReconAgent",
  },
  {
    title: "Quotra",
    category: "FULL STACK · AI",
    group: "apps",
    description:
      "Stock portfolio tracker with live prices, RSI/SMA charts, S&P 500 benchmarking, a Gemini advisor and a cron alerts worker, plus JWT auth, Jest/Vitest suites, Docker Compose and GitHub Actions CI.",
    src: "quotra.jpg",
    tags: ["React", "Node.js", "SQLite", "Gemini", "GitHub Actions"],
    githubLink: "https://github.com/Duggineniakhil/Stock_Tracker",
    liveLink: "https://stock-tracker-lime-nu.vercel.app",
  },
  {
    title: "SPANDAN",
    category: "PREDICTIVE MAINTENANCE · AGENTS",
    group: "agents",
    badge: "Tech4Bharat 2026",
    description:
      "Predicts breakdowns in small flour mills from vibration data: anomaly detection, fault diagnosis and remaining-life models, with an LLM coordinator that never acts without the owner's approval.",
    cover: { icon: Activity, from: "from-amber-500/30", to: "to-rose-600/20" },
    tags: ["FastAPI", "PostgreSQL", "scikit-learn", "React", "Gemini"],
    githubLink: "https://github.com/Duggineniakhil/SPANDAN",
  },
  {
    title: "Gold Loan Agent",
    category: "AI AGENT · FINTECH",
    group: "agents",
    description:
      "Gold-loan intake portal with an AI assistant that applies by chat, exact integer money maths, PostgreSQL advisory locks against duplicate applications, and unit, API and Playwright tests.",
    cover: { icon: Coins, from: "from-yellow-400/30", to: "to-orange-600/20" },
    tags: ["TypeScript", "Express", "PostgreSQL", "Prisma", "Gemini"],
    githubLink: "https://github.com/Duggineniakhil/Gold-Loan-Agent",
  },
  {
    title: "HealthAI",
    category: "MEDICAL AI",
    group: "ai",
    description:
      "Chest X-ray screening workstation: DenseNet121 trained on CheXpert for 8 conditions, Grad-CAM heatmaps, a FastAPI backend and a Streamlit UI that generates PDF reports.",
    src: "health_ai.png",
    tags: ["TensorFlow", "DenseNet121", "FastAPI", "Streamlit"],
    githubLink: "https://github.com/Duggineniakhil/HealthAI",
  },
  {
    title: "AmazonHelp AI Agent",
    category: "RAG · CUSTOMER SUPPORT",
    group: "agents",
    description:
      "Support agent that classifies intent, drafts grounded replies with RAG over similar past conversations and decides when to escalate, benchmarked on a 200-example golden set with LLM-as-judge, F1, ROUGE and Cohen's kappa.",
    cover: { icon: Headset, from: "from-sky-500/30", to: "to-indigo-600/20" },
    tags: ["Llama 3.1", "Groq", "FAISS", "RAG", "Python"],
    githubLink: "https://github.com/Duggineniakhil/Amazonhelp-AI-Agent",
  },
  {
    title: "RAY",
    category: "MOBILE APP",
    group: "apps",
    description:
      "Short-video app with a voice assistant for hands-free navigation, Firebase auth, real-time likes and comments, and a camera studio with filters and trimming.",
    cover: { icon: Clapperboard, from: "from-fuchsia-500/30", to: "to-violet-700/20" },
    tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
    githubLink: "https://github.com/Duggineniakhil/RAY",
  },
  {
    title: "Vectra",
    category: "TEAM PROJECT · MOBILITY",
    group: "apps",
    description:
      "Team-built ride-pooling platform: NestJS services with PostGIS geospatial matching, Redis caching, Socket.IO live driver tracking and Flutter rider and driver apps.",
    cover: { icon: Car, from: "from-emerald-500/30", to: "to-teal-700/20" },
    tags: ["NestJS", "PostGIS", "Redis", "Socket.IO", "Flutter"],
    githubLink: "https://github.com/M-krizz/Vectra",
  },
];

// Designed cover for projects without a screenshot
function ProjectCover({ cover, title, tags }) {
  const Icon = cover.icon;
  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${cover.from} ${cover.to} bg-zinc-900 flex flex-col items-center justify-center gap-3 overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative p-4 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm"
      >
        <Icon className="w-10 h-10 text-white/90" />
      </motion.div>
      <span className="relative font-mono font-bold text-white/90 tracking-wide">{title}</span>
      <span className="relative font-mono text-[10px] text-white/50">{tags.slice(0, 3).join(" · ")}</span>
    </div>
  );
}

const ProjectCard = forwardRef(function ProjectCard({ project, index }, ref) {
  // Spotlight that follows the cursor
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-colors duration-300"
    >
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(320px circle at var(--x) var(--y), rgba(34,211,238,0.10), transparent 70%)",
        }}
      />

      {/* Image / cover */}
      <div className="relative h-48 overflow-hidden bg-zinc-800">
        {project.src ? (
          <img
            src={project.src}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
          />
        ) : (
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
            <ProjectCover cover={project.cover} title={project.title} tags={project.tags} />
          </div>
        )}
        <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {project.badge && (
          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-amber-400/40 text-amber-300 text-[10px] font-bold font-mono backdrop-blur-sm">
            <Award className="w-3 h-3" />
            {project.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col flex-grow">
        <div className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] mb-2 uppercase font-mono">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded text-[10px] font-mono font-bold bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 group-hover:text-zinc-300 group-hover:border-zinc-600 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-4 border-t border-zinc-800/50">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            CODE
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              LIVE DEMO
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.group === filter);

  return (
    <section id="projects" className="py-24 px-4 bg-transparent relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            /Projects<span className="text-cyan-400 animate-pulse">_</span>
          </h2>
          <p className="text-zinc-500 font-mono">
            {projects.length} things I&apos;ve built, from computer vision to AI agents.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const count = f.id === "all" ? projects.length : projects.filter((p) => p.group === f.id).length;
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={`relative px-4 py-2 rounded-full font-mono text-xs font-bold transition-colors ${
                  active ? "text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">
                  {f.label} <span className={active ? "text-black/60" : "text-zinc-600"}>{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
