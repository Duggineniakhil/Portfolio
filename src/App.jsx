import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import CertificationsSection from "./pages/Certifications/Certifications";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <div className="fixed inset-0 z-[-100] bg-[#0b1121] dot-grid opacity-10"></div>
      <div className="fixed inset-0 z-[-100] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-0">
        <Header />
        {/* Conditional Rendering */}
        {isOnePage ? (
          // One-Page Mode: Render all components together
          <>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <CertificationsSection />
            <Contact />
          </>
        ) : (
          // Router Mode: Use routes for navigation
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<CertificationsSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </div>
    </>
  );
}
