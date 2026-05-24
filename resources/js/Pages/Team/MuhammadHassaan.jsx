import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { SmokeCursor } from './hassaan/SmokeCursor';
import { EdgeGlow } from './hassaan/EdgeGlow';
import { JarvisBackground } from './hassaan/JarvisBackground';
import { Navbar } from './hassaan/Navbar';
import { Hero } from './hassaan/Hero';
import { About } from './hassaan/About';
import { WhatIDo } from './hassaan/WhatIDo';
import { Skills } from './hassaan/Skills';
import { Projects } from './hassaan/Projects';
import { Experience } from './hassaan/Experience';
import { Contact } from './hassaan/Contact';
import { Footer } from './hassaan/Footer';

export default function MuhammadHassaan() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: "#050510" }}>
      <Head title="Muhammad Hassaan - COO & Co-Founder" />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        .font-hud { font-family: 'JetBrains Mono', monospace; }
        @keyframes hud-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes hud-rotate-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes hud-scan { 0% { top: -2px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        @keyframes hud-pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes hud-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes particle-float { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh); opacity: 0; } }
        @keyframes glow-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        .animate-hud-rotate { animation: hud-rotate 20s linear infinite; }
        .animate-hud-rotate-reverse { animation: hud-rotate-reverse 15s linear infinite; }
        .animate-hud-rotate-slow { animation: hud-rotate 30s linear infinite; }
        .animate-hud-scan { animation: hud-scan 4s linear infinite; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
      `}} />
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(79, 195, 247, 0.035), transparent 40%)`,
        }}
      />
      <JarvisBackground />
      <EdgeGlow />
      <SmokeCursor />
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
