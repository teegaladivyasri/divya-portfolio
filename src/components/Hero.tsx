import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden select-none"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle organic ambient textural gradient element — calm, slow, non-neon */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-35 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(232, 207, 196, 0.7) 0%, rgba(237, 226, 208, 0.4) 50%, transparent 80%)',
          animation: 'subtleFloat 20s ease-in-out infinite alternate',
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(92, 26, 43, 0.12) 0%, rgba(185, 167, 147, 0.2) 60%, transparent 85%)',
          animation: 'subtleFloatReverse 24s ease-in-out infinite alternate',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto my-auto flex flex-col items-center">
        {/* The Main Visual Event: DIVYA SRI TEEGALA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="mb-8"
        >
          <h1 
            className="font-serif-title text-[clamp(2.9rem,8.5vw,7.2rem)] font-normal tracking-[-0.03em] leading-[0.98] text-[#2B2320]"
          >
            DIVYA SRI TEEGALA
          </h1>
        </motion.div>

        {/* Understated 1-2 line description beneath the name — not a bio, strictly understated */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-xl mx-auto"
        >
          <p className="font-serif-body italic text-[clamp(1.1rem,1.9vw,1.35rem)] text-[#635852] leading-relaxed">
            Computer Science &amp; Engineering at MVGR College of Engineering.
            <br />
            Exploring distributed architectures, secure systems, and thoughtful interfaces.
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes subtleFloat {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-55%, -45%) scale(1.08); }
        }
        @keyframes subtleFloatReverse {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(25px, -20px) scale(1.05); }
        }
      `}</style>
    </section>
  );
};
