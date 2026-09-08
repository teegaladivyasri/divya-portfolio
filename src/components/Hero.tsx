import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen min-h-[620px] flex flex-col justify-between items-center text-center px-6 sm:px-12 pt-28 pb-8 overflow-hidden select-none"
      style={{ backgroundColor: '#F7F1E8' }}
    >
      {/* Top-Left Subtle Handwritten Editorial Note */}
      <div 
        className="absolute top-28 left-8 sm:left-14 lg:left-20 pointer-events-none select-none hidden sm:block"
        aria-hidden="true"
      >
        <span 
          className="text-2xl sm:text-3xl text-[#8A6D56]/65"
          style={{ fontFamily: "'Pinyon Script', 'Italianno', cursive" }}
        >
          editorial space
        </span>
      </div>

      {/* Right Side Subtle Handwritten Note */}
      <div 
        className="absolute top-1/2 right-8 sm:right-14 lg:right-20 -translate-y-1/2 pointer-events-none select-none hidden md:block"
        aria-hidden="true"
      >
        <span 
          className="text-2xl sm:text-3xl text-[#8A6D56]/65"
          style={{ fontFamily: "'Pinyon Script', 'Italianno', cursive" }}
        >
          quiet inquiry
        </span>
      </div>

      {/* Top Spacer to balance viewport */}
      <div className="w-full h-2" aria-hidden="true" />

      {/* Main Unified Typographic Composition: Visual Center */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto flex flex-col items-center justify-center">
        {/* The Name: Two Lines Treated as ONE Unified Typographic Composition */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          <h1 
            className="font-normal text-[#5C1A2B] uppercase text-center mx-auto"
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3.1rem, min(8.6vw, 13.5vh), 7.8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="block">DIVYA SRI</span>
            <span className="block">TEEGALA</span>
          </h1>
        </motion.div>

        {/* Hero Description: Directly Below the Name, Fairly Close */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
          className="text-center text-[#4A3E39] font-normal mx-auto mt-6 sm:mt-7 max-w-xl px-4 leading-relaxed"
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: 'clamp(0.85rem, 1.2vw, 1.02rem)',
            letterSpacing: '0.04em',
          }}
        >
          “I’m curious about how things work — and I like figuring out how to make them.”
        </motion.p>
      </div>

      {/* Subtle Scroll Indicator at Bottom Center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center gap-2 select-none"
        aria-hidden="true"
      >
        <span 
          className="text-[0.6rem] uppercase tracking-[0.26em] text-[#8A6D56]"
          style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          SCROLL
        </span>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1px] h-6 bg-[#5C1A2B]/35" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#5C1A2B]" />
        </div>
      </motion.div>
    </section>
  );
};
