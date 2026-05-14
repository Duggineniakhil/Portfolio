import React, { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "B.Tech — Computer Science",
      school: "Amrita Vishwa Vidyapeetham",
      mascot: "🎓",
      year: "Current",
      achievements: ["Focusing on AI/ML", "Full Stack Development"],
      skills: ["Python", "JavaScript", "C++", "DSA", "Algorithms"],
      description:
        "Pursuing Bachelor of Technology in Computer Science and Engineering with a deep focus on intelligent systems and modern web technologies.",
    },
    {
      degree: "Intermediate (Class 12)",
      school: "Sri Chaitanya Junior College",
      mascot: "📚",
      year: "Completed",
      achievements: ["Score: 93.6%", "Science Stream"],
      skills: ["Mathematics", "Physics", "Chemistry"],
      description:
        "Completed higher secondary education in the science stream with an excellent academic record.",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-24 bg-transparent">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            /Education<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-zinc-500 font-mono italic">Academic background and achievements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative border rounded-2xl p-8 transition-all duration-300 bg-zinc-900/40 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-cyan-400/30"
                  : "border-zinc-800/50"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white font-mono uppercase tracking-tight">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg text-zinc-300 flex items-center gap-2 font-mono">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      {edu.school}
                    </p>
                    <p className="text-zinc-500 flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2 font-mono uppercase tracking-widest">
                    <Trophy className="w-4 h-4 text-cyan-400" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded bg-zinc-800/50 text-zinc-500 border border-zinc-700/50 text-[10px] font-mono font-bold uppercase tracking-wider"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] rounded bg-cyan-400/5 text-cyan-400 font-mono font-bold uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
