import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen min-h-[580px] flex flex-col justify-between items-center text-center px-6 sm:px-12 pt-28 pb-8 overflow-hidden select-none"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle atmospheric cinematic light / vignette layer — soft, dreamy, unobtrusive */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(232, 207, 196, 0.7) 0%, rgba(237, 226, 208, 0.35) 45%, transparent 75%)',
          animation: 'dreamyAtmosphere 20s ease-in-out infinite alternate',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(92, 26, 43, 0.14) 0%, rgba(185, 167, 147, 0.16) 50%, transparent 80%)',
          animation: 'dreamyAtmosphereReverse 26s ease-in-out infinite alternate',
        }}
        aria-hidden="true"
      />

      {/* Top balance spacer */}
      <div className="w-full h-2" aria-hidden="true" />

      {/* Main Typographic Composition: Visual Center */}
      <div className="relative z-10 w-full max-w-6xl mx-auto my-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          {/* Two lines treated as ONE unified typographic composition */}
          <h1 
            className="font-serif-title font-normal text-[#5C1A2B] uppercase tracking-[-0.03em] mx-auto text-center"
            style={{
              fontSize: 'clamp(3rem, min(8.6vw, 13.5vh), 7.8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.025em',
            }}
          >
            <span className="block">DIVYA SRI</span>
            <span className="block">TEEGALA</span>
          </h1>
        </motion.div>


        {/* Exact Bio Sentence: Directly connected beneath the name */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="font-sans text-[clamp(0.85rem,1.4vw,1.05rem)] text-[#635852] font-normal tracking-wide max-w-xl mx-auto mt-6 sm:mt-8 px-4 leading-relaxed"
        >
          I'm curious about how things work — and I like figuring out how to make them.
        </motion.p>
      </div>

      {/* Subtle, quiet scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="relative z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-[1px] h-8 bg-[#5C1A2B]/30 overflow-hidden relative">
          <span 
            className="block w-full h-3 bg-[#5C1A2B]"
            style={{
              animation: 'scrollPulse 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes dreamyAtmosphere {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-53%, -47%) scale(1.08); }
        }
        @keyframes dreamyAtmosphereReverse {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(15px, -15px) scale(1.06); }
        }
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(280%); opacity: 0; }
        }
      `}</style>
    </section>
  );
};
