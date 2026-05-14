import React from "react";
import { Mail, Phone, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "duggineniakhil1@gmail.com",
      href: "mailto:duggineniakhil1@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9032855330",
      href: "tel:+919032855330",
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Akhil Duggineni",
      href: "https://www.linkedin.com/in/akhil-duggineni-b29a0529b/",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajampet, Andhra Pradesh, India",
      href: "https://www.google.com/maps/place/Rajampet,+Andhra+Pradesh",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white pt-24 md:pt-0 flex items-center justify-center overflow-hidden">
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactDetails.map((detail, i) => (
              <motion.a
                key={i}
                href={detail.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:scale-[1.02]"
              >
                {/* Background Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 ${detail.bg} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="flex items-center gap-6 relative z-10">
                  <div className={`p-4 rounded-2xl ${detail.bg} ${detail.color} transition-transform duration-300 group-hover:scale-110`}>
                    <detail.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">
                      {detail.label}
                    </p>
                    <p className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {detail.value}
                    </p>
                  </div>
                  <div className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
              Available for freelance & full-time roles
            </p>
            <div className="mt-8 flex justify-center gap-6">
               <a href="https://github.com/Duggineniakhil" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-2xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/AkhilDuggineni" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
