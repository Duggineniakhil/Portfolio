import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-zinc-900/40 border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30">
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-zinc-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white font-mono uppercase tracking-tight">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-zinc-800/30 hover:bg-zinc-800/80 text-zinc-400 hover:text-white border-zinc-800 flex items-center gap-2 py-1.5 px-3 transition-all duration-300 font-mono text-[10px] uppercase font-bold tracking-wider"
          >
            <span>{skill.icon}</span>
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <BsFileEarmarkCode /> },
        { name: "CSS3", icon: <BsFileEarmarkCode /> },
      ],
    },
    {
      icon: Database,
      title: "Backend",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Express", icon: <BsGrid1X2 /> },
        { name: "FastAPI", icon: <BsGrid1X2 /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      icon: Cpu,
      title: "AI & ML",
      color: "text-purple-400",
      skills: [
        { name: "TensorFlow", icon: <BsGrid1X2 /> },
        { name: "CV", icon: <BsGrid1X2 /> },
        { name: "CNNs", icon: <BsGrid1X2 /> },
        { name: "Data Science", icon: <BsGrid1X2 /> },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "CI/CD", icon: <FcWorkflow /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Linux", icon: <FaLinux /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative",
      color: "text-yellow-400",
      skills: [
        { name: "UI Animation", icon: <MdAnimation /> },
        { name: "SVG Anim", icon: <MdAnimation /> },
        { name: "Motion", icon: <MdAnimation /> },
      ],
    },
  ];

  return (
    <main className="pt-24 pb-12 text-white min-h-screen bg-transparent relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none"></div>

      <section className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            /Skills<span className="text-cyan-400">_</span>
          </h2>
          <p className="text-zinc-500 font-mono">Technologies I work with.</p>
        </div>

        <div className="flex justify-center items-center mb-20">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;
