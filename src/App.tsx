/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SmoothScroll } from './components/SmoothScroll';
import { AmbientGlow } from './components/AmbientGlow';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { PersonalApproach } from './components/PersonalApproach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B192C] flex flex-col font-sans selection:bg-[#1E50A2]/15 selection:text-[#0B192C] overflow-x-hidden relative">
      {/* Lenis Butter-Smooth Momentum Scrolling */}
      <SmoothScroll />

      {/* Interactive Cursor-Tracking Ambient Lighting */}
      <AmbientGlow />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Education />
        <Certifications />
        <PersonalApproach />
        <Contact />
      </main>

      {/* Luxury Deep Midnight Navy Footer */}
      <Footer />

      {/* Smooth Scroll-To-Top Interaction */}
      <ScrollToTop />
    </div>
  );
}
