import React from "react";
import { Code2, Cpu, Network, Briefcase, Database } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  align
}) => (
  <div className={`flex flex-col md:flex-row gap-8 items-center w-full my-8 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    
    <div className={`w-full md:w-5/12 ${align === 'left' ? 'text-right' : 'text-left'}`}>
      <motion.div 
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, type: "spring" }}
        className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
      >
        <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
        <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />
        
        <div className="relative bg-gray-900/90 rounded-lg p-6 md:p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl text-left">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-gray-300 gap-2">
              <span className="font-semibold text-blue-400">{company}</span>
              <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full self-start sm:self-auto">
                {period}
              </span>
            </div>
            <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Timeline Center Node */}
    <div className="hidden md:flex w-2/12 justify-center relative">
      <div className="w-1 h-full bg-gradient-to-b from-cyan-500/20 via-blue-500/50 to-purple-500/20 absolute top-0 bottom-0" />
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-12 h-12 rounded-full bg-gray-900 border-4 border-blue-500 z-10 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      >
        <Icon className="w-5 h-5 text-cyan-400" />
      </motion.div>
    </div>

    <div className="w-full md:w-5/12 hidden md:block" />

  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      title: "Full Stack Developer Intern",
      company: "TechNova Solutions",
      period: "2025 - Present",
      description:
        "Developing highly scalable microservices using Node.js and React. Integrated real-time data processing and optimized database queries in PostgreSQL.",
      align: "left"
    },
    {
      icon: Cpu,
      title: "AI/ML Research Assistant",
      company: "Amrita Vishwa Vidyapeetham",
      period: "2024 - 2025",
      description:
        "Assisted in training Convolutional Neural Networks (CNNs) for medical imaging. Improved model accuracy by 15% using data augmentation and hyperparameter tuning.",
      align: "right"
    },
    {
      icon: Network,
      title: "Freelance Developer & Designer",
      company: "Self-Employed",
      period: "2023 - 2024",
      description:
        "Produced short-form videos and motion graphics. Transitioned into freelance web development building performant landing pages for local businesses using React and Tailwind CSS.",
      align: "left"
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div className="relative container mx-auto px-6 mt-10">
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          <div className="flex flex-col items-center max-w-7xl mx-auto relative">
            <div className="absolute w-1 h-full bg-gradient-to-b from-cyan-500/20 via-blue-500/50 to-purple-500/20 left-4 md:hidden" />
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
