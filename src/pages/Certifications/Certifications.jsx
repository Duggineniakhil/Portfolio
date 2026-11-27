import React from "react";
import { Trophy, Medal, Code2, Rocket, ExternalLink, Github } from "lucide-react";
import FetchathonCert from "@/assets/certificates/Fetch-A-Thon-3.0-winner-certificate.pdf";
import FetchathonPreview from "@/assets/certificates/fetchathon_preview.jpg";
import NitroStackCert from "@/assets/certificates/nitrostack_cert.jpg";
import CodeSprintCert from "@/assets/certificates/codesprint_cert.pdf";
import CodeSprintPreview from "@/assets/certificates/codesprint_preview.jpg";

const CertificationCard = ({ title, result, issuer, date, preview, file, icon: Icon }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">
      {/* Certificate preview */}
      <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-800 relative">
        <img
          src={preview}
          alt={`${title} certificate`}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Floating icon */}
        <div className="relative mb-4 -mt-10 flex justify-end">
          <div className="bg-gray-900 rounded-full p-2 border border-cyan-500/30">
            <Icon className="w-6 h-6 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        <span className="self-start text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-3">
          {result}
        </span>
        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          {title}
        </h3>
        <p className="font-semibold text-emerald-400 mb-2">{issuer}</p>
        <p className="text-sm font-mono text-gray-400 mb-4">{date}</p>

        <div className="mt-auto pt-4 border-t border-gray-800">
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View Certificate <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AchievementCard = ({ event, team, detail, project, links }) => (
  <div className="relative rounded-lg border border-gray-800/60 bg-gray-900/70 backdrop-blur-xl p-6 hover:border-cyan-500/40 transition-colors duration-300">
    <div className="flex items-start gap-4">
      <div className="shrink-0 rounded-full p-2 bg-cyan-500/10 border border-cyan-500/30">
        <Rocket className="w-5 h-5 text-cyan-400" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-white">{event}</h4>
        <p className="text-sm text-emerald-400 font-semibold mb-2">{team}</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-3">
          {detail} Built <span className="text-gray-200 font-medium">{project}</span>.
        </p>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {link.type === "github" ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Fetch-A-Thon 3.0",
      result: "Winner · Best Agentverse Deployment",
      issuer: "Fetch.ai Innovation Lab",
      date: "Nov 2026",
      preview: FetchathonPreview,
      file: FetchathonCert,
      icon: Trophy,
    },
    {
      title: "NitroStack AI Agentic Hackathon",
      result: "2nd place · Team CREED",
      issuer: "NitroStack × Amrita Vishwa Vidyapeetham",
      date: "Jul 2026",
      preview: NitroStackCert,
      file: NitroStackCert,
      icon: Medal,
    },
    {
      title: "CodeSprint, CodeClash Final Round",
      result: "Rank 33 · Certificate of Excellence",
      issuer: "Lets Code Community",
      date: "Jul 2025",
      preview: CodeSprintPreview,
      file: CodeSprintCert,
      icon: Code2,
    },
  ];

  const achievements = [
    {
      event: "ACE Builders Hackathon 2026",
      team: "Team CREED",
      detail: "Problem Statement 2, Rescue the Surplus (Society & Environment).",
      project: "Annapoorna Link, a bilingual surplus-food rescue app",
      links: [
        { label: "Live app", href: "https://annapoorna-link.vercel.app", type: "live" },
        { label: "Code", href: "https://github.com/Duggineniakhil/Annapoorna_Link", type: "github" },
      ],
    },
    {
      event: "Tech4Bharat 2026 · JanAI Mass Entrepreneurship Challenge",
      team: "Team CREED · Agentic AI track",
      detail: "Manufacturing & Industry theme, predicting machine breakdowns.",
      project: "SPANDAN, offline breakdown prediction for small flour mills",
      links: [
        { label: "Code", href: "https://github.com/Duggineniakhil/SPANDAN", type: "github" },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-transparent" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-center">
                Awards & Certifications
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              Hackathon wins and competitive programming results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {certifications.map((cert) => (
              <CertificationCard key={cert.title} {...cert} />
            ))}
          </div>

          <div className="max-w-7xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Other Hackathons
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((item) => (
                <AchievementCard key={item.event} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default CertificationsSection;
