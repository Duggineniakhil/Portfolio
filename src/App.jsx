import React, { useEffect } from "react";
import { UIProvider } from "./context/UIContext";
import Lenis from "lenis";
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
import CustomCursor from "./components/ui/CustomCursor";

export default function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
<UIProvider>
      <CustomCursor />
      
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
            enableMouseInteraction={true} // Enabled mouse interaction
            mouseInfluence={0.5}
          />
        </div>
      </div>

      <div className="relative z-0">
        <Header />
        
        {/* Single Page Sections */}
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="certifications">
          <CertificationsSection />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </UIProvider>
  );
}
