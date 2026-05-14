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
import Galaxy from "./components/ui/Galaxy";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={0}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
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
