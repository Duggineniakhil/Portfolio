import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Layout, Database, Cpu, Bot, Cloud, FlaskConical } from "lucide-react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiDart,
  SiNestjs,
  SiSocketdotio,
  SiJsonwebtokens,
  SiRedis,
  SiGithubactions,
  SiKeras,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiFlutter,
  SiChartdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPrisma,
  SiSqlite,
  SiFirebase,
  SiZod,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiScikitlearn,
  SiHuggingface,
  SiPandas,
  SiGooglegemini,
  SiMeta,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
  SiVitest,
  SiJest,
  SiPytest,
} from "react-icons/si";
import { BsGrid1X2 } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
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
      title: "Languages",
      color: "text-blue-400",
      skills: [
        { name: "Python", icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "SQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
        { name: "Dart", icon: <SiDart className="w-4 h-4 text-[#0175C2]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend & Mobile",
      color: "text-cyan-400",
      skills: [
        { name: "React", icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
        { name: "Riverpod", icon: <SiFlutter className="w-4 h-4 text-[#42A5F5]" /> },
        { name: "Chart.js", icon: <SiChartdotjs className="w-4 h-4 text-[#FF6384]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Databases",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
        { name: "NestJS", icon: <SiNestjs className="w-4 h-4 text-[#E0234E]" /> },
        { name: "Socket.IO", icon: <SiSocketdotio className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "JWT Auth", icon: <SiJsonwebtokens className="w-4 h-4 text-[#FB015B]" /> },
        { name: "PostGIS", icon: <SiPostgresql className="w-4 h-4 text-[#5CAE58]" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "Prisma", icon: <SiPrisma className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "SQLite", icon: <SiSqlite className="w-4 h-4 text-[#44A8E0]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "Zod", icon: <SiZod className="w-4 h-4 text-[#3E67B1]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "AI, ML & Computer Vision",
      color: "text-purple-400",
      skills: [
        { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "YOLO / Ultralytics", icon: <BsGrid1X2 className="w-4 h-4 text-[#00FFFF]" /> },
        { name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-[#5C3EE8]" /> },
        { name: "scikit-learn", icon: <SiScikitlearn className="w-4 h-4 text-[#F7931E]" /> },
        { name: "Hugging Face", icon: <SiHuggingface className="w-4 h-4 text-[#FFD21E]" /> },
        { name: "Keras", icon: <SiKeras className="w-4 h-4 text-[#D00000]" /> },
        { name: "Grad-CAM", icon: <BsGrid1X2 className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#E70488]" /> },
      ],
    },
    {
      icon: Bot,
      title: "Generative AI & Agents",
      color: "text-pink-400",
      skills: [
        { name: "LLM Agents & Tool Calling", icon: <BsGrid1X2 className="w-4 h-4 text-[#F472B6]" /> },
        { name: "RAG", icon: <BsGrid1X2 className="w-4 h-4 text-[#A78BFA]" /> },
        { name: "Gemini API", icon: <SiGooglegemini className="w-4 h-4 text-[#8E75B2]" /> },
        { name: "Llama via Groq", icon: <SiMeta className="w-4 h-4 text-[#0467DF]" /> },
        { name: "FAISS", icon: <BsGrid1X2 className="w-4 h-4 text-[#60A5FA]" /> },
        { name: "MCP", icon: <BsGrid1X2 className="w-4 h-4 text-[#22D3EE]" /> },
        { name: "Sentence Transformers", icon: <SiHuggingface className="w-4 h-4 text-[#FFD21E]" /> },
        { name: "LLM Evaluation", icon: <BsGrid1X2 className="w-4 h-4 text-[#34D399]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps, Testing & Tools",
      color: "text-orange-400",
      skills: [
        { name: "Docker", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Git", icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-[#FFFFFF]" /> },
        { name: "Render", icon: <SiRender className="w-4 h-4 text-[#46E3B7]" /> },
        { name: "Vitest", icon: <SiVitest className="w-4 h-4 text-[#6E9F18]" /> },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: "Docker Compose", icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-[#2088FF]" /> },
        { name: "Supertest", icon: <FlaskConical className="w-4 h-4 text-[#A3E635]" /> },
        { name: "Playwright", icon: <FlaskConical className="w-4 h-4 text-[#2EAD33]" /> },
        { name: "pytest", icon: <SiPytest className="w-4 h-4 text-[#0A9EDC]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-transparent relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12, ease: "easeOut" }}
            >
              <SkillCard
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
