import React from "react";
import { Award, Code2, Cpu } from "lucide-react";
import AdobeCert from "@/assets/certificates/adobe_cert.jpg";
import BloomCert from "@/assets/certificates/bloom_cert.jpg";
import CodeSprintCert from "@/assets/certificates/codesprint_cert.pdf";

const CertificationCard = ({ title, issuer, date, image, link, isPdf, icon: Icon }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">
      {/* Certificate Image/Preview */}
      <div className="w-full h-48 overflow-hidden rounded-t-lg bg-gray-800 flex items-center justify-center relative">
        {isPdf ? (
          <embed src={`${CodeSprintCert}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" className="w-full h-full object-cover" />
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
        )}
        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        {/* Floating icon */}
        <div className="relative mb-4 -mt-10 flex justify-end">
          <div className="bg-gray-900 rounded-full p-2 border border-cyan-500/30">
            <Icon className="w-6 h-6 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </div>

        <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
          {title}
        </h3>
        <p className="font-semibold text-emerald-400 mb-2">{issuer}</p>
        {date && <p className="text-sm font-mono text-gray-400 mb-4">{date}</p>}

        <div className="mt-auto pt-4 border-t border-gray-800">
          <a
            href={isPdf ? CodeSprintCert : image}
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

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certificate of Excellence - 33rd Rank",
      issuer: "CodeSprint - Lets Code Community",
      date: "2026",
      isPdf: true,
      icon: Code2,
    },
    {
      title: "Adobe India Hackathon - Participant",
      issuer: "Adobe",
      date: "2026",
      image: AdobeCert,
      icon: Award,
    },
    {
      title: "BE Hackfest-2026",
      issuer: "Bloom Energy",
      date: "2026",
      image: BloomCert,
      icon: Cpu,
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
                Certifications
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Continuous learning and skill validation"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>

        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default CertificationsSection;
