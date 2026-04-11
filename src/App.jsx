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
import SoftAurora from "./components/ui/SoftAurora";
import Antigravity from "./components/ui/Antigravity";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  return (
    <>
      {/* Global Background Animation */}
      <div className="fixed inset-0 z-[-100] pointer-events-none bg-[#04081a]">
        <div className="absolute inset-0 z-0">
          <SoftAurora
            speed={0.6}
            scale={1.2}
            brightness={0.9}
            color1="#04081a"
            color2="#38bdf8"
            noiseFrequency={2.0}
            noiseAmplitude={1.0}
            bandHeight={0.5}
            bandSpread={1.2}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.5}
          />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Antigravity
            count={250}
            magnetRadius={8}
            ringRadius={8}
            waveSpeed={0.5}
            waveAmplitude={1.5}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#00ffff"
            autoAnimate
            particleVariance={1.5}
            rotationSpeed={0.5}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
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
