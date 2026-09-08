import React from 'react';
import { GrainOverlay } from './components/GrainOverlay';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PhotoCollage } from './components/PhotoCollage';
import { WorkShowcase } from './components/WorkShowcase';
import { Credentials } from './components/Credentials';
import { CertificationsArchive } from './components/CertificationsArchive';
import { SkillsContext } from './components/SkillsContext';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F7F1E8] text-[#2B2320]">
      {/* Tactile paper/film grain texture */}
      <GrainOverlay />

      {/* Editorial Navigation */}
      <Navigation />

      {/* Main Flow: Full-screen name -> About -> Photographs -> Projects -> Experience -> Education -> Certifications -> Skills -> Contact */}
      <main className="flex-grow">
        {/* 1. Full-screen opening: DIVYA SRI TEEGALA */}
        <Hero />

        {/* 2. About & Academic background */}
        <About />

        {/* 3. Personal Photographs */}
        <PhotoCollage />

        {/* 4. Selected Work / Projects */}
        <WorkShowcase />

        {/* 5. Experience & Education */}
        <Credentials />

        {/* 6. Certifications */}
        <CertificationsArchive />

        {/* 7. What I Work With (Skills) */}
        <SkillsContext />

        {/* 8. Contact & Channels */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
