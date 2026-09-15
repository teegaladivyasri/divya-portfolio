import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full flex flex-col justify-between items-center text-center px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden select-none"
      style={{ 
        height: '100vh', 
        minHeight: '100svh', 
        maxHeight: '100vh', 
        backgroundColor: '#FAF6EE' 
      }}
    >
      {/* Top spacer for breathing room below navigation */}
      <div className="w-full h-4 sm:h-8" aria-hidden="true" />

      {/* Main Unified Typographic Composition in Visual Center */}
      <div className="relative z-10 w-full max-w-[94vw] lg:max-w-[88vw] mx-auto my-auto flex flex-col items-center justify-center">
        {/* Name: DIVYA SRI TEEGALA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          <h1 
            className="font-normal uppercase text-center mx-auto"
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3.6rem, min(12.8vw, 17.5vh), 10.5rem)',
              lineHeight: 0.84,
              letterSpacing: '-0.022em',
              color: '#751424',
            }}
          >
            <span className="block">DIVYA SRI</span>
            <span className="block">TEEGALA</span>
          </h1>
        </motion.div>

        {/* Tagline directly below name */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.18, ease: [0.25, 1, 0.5, 1] }}
          className="text-center font-normal mx-auto mt-6 sm:mt-8 leading-[1.5] max-w-[540px] px-4"
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: 'clamp(0.92rem, 1.35vw, 1.12rem)',
            color: '#3E3430',
            letterSpacing: '0.015em',
          }}
        >
          I'm curious about how things work — and I like figuring<br className="hidden sm:inline" /> out how to make them.
        </motion.p>
      </div>

      {/* Bottom Center Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1.2, delay: 0.35 }}
        className="relative z-10 flex flex-col items-center select-none mb-1 sm:mb-2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center mb-2">
          <div className="w-[1px] h-8 bg-[#751424]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#751424] mt-1" />
        </div>
        <span 
          className="text-[0.62rem] uppercase tracking-[0.28em] font-medium"
          style={{ fontFamily: "'Josefin Sans', sans-serif", color: '#8A6D56' }}
        >
          SCROLL
        </span>
      </motion.div>

      {/* Bottom-Right Handwritten Script Note: "same curiosity new horizons —" */}
      <div 
        className="text-left select-none pointer-events-none hidden md:block"
        style={{
          position: 'absolute',
          bottom: 'clamp(2.5rem, 5vh, 4rem)',
          right: 'clamp(2rem, 4.5vw, 4.5rem)',
        }}
        aria-hidden="true"
      >
        <span
          className="text-[1.35rem] sm:text-[1.55rem] font-medium leading-[1.08] block"
          style={{ fontFamily: "'Caveat', cursive", color: '#751424' }}
        >
          same<br />curiosity<br />new<br />horizons
        </span>
        <span className="w-5 h-[1.5px] bg-[#751424] mt-1.5 block opacity-85" />
      </div>
    </section>
  );
};
