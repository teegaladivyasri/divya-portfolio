import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-8 pt-24 pb-8 overflow-hidden select-none"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle organic ambient textural gradient element — calm, slow, restrained */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(232, 207, 196, 0.6) 0%, rgba(237, 226, 208, 0.3) 50%, transparent 80%)',
          animation: 'subtleFloat 22s ease-in-out infinite alternate',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(92, 26, 43, 0.12) 0%, rgba(185, 167, 147, 0.18) 60%, transparent 85%)',
          animation: 'subtleFloatReverse 26s ease-in-out infinite alternate',
        }}
        aria-hidden="true"
      />

      {/* Top spacer for breathing room below navigation */}
      <div className="w-full h-4 sm:h-8" aria-hidden="true" />

      {/* Main Visual Event: Massive Burgundy Typographic Masthead Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          <h1 
            className="font-serif-title font-normal tracking-[-0.035em] text-[#5C1A2B] uppercase leading-[0.88] mx-auto text-center"
            style={{
              fontSize: 'clamp(3.6rem, 12.8vw, 11.2rem)',
            }}
          >
            <span className="block">DIVYA SRI</span>
            <span className="block">TEEGALA</span>
          </h1>
        </motion.div>

        {/* Small, understated, factual bio — no marketing words, no self-praise */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="mt-8 sm:mt-12 max-w-xl mx-auto space-y-1.5 px-4"
        >
          <p className="font-sans text-[0.88rem] sm:text-[0.98rem] text-[#635852] leading-relaxed">
            Computer Science &amp; Engineering student at MVGR College of Engineering, specializing in IoT, Cybersecurity &amp; Blockchain.
          </p>
          <p className="font-sans text-[0.82rem] sm:text-[0.9rem] text-[#8A6D56]">
            Technology Officer at NetMaxin Group.
          </p>
        </motion.div>
      </div>

      {/* Subtle, quiet scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="relative z-10 pb-2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-sans text-[0.65rem] tracking-[0.24em] uppercase text-[#8A6D56]">
          Scroll
        </span>
        <div className="w-[1px] h-7 bg-[#5C1A2B]/40 overflow-hidden relative">
          <span 
            className="block w-full h-2.5 bg-[#5C1A2B]"
            style={{
              animation: 'scrollPulse 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes subtleFloat {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-54%, -46%) scale(1.06); }
        }
        @keyframes subtleFloatReverse {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(20px, -20px) scale(1.05); }
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
