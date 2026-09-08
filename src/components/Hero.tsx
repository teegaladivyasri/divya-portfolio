import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative w-full h-screen min-h-[660px] flex flex-col justify-between items-center text-center px-6 sm:px-12 pt-28 pb-10 overflow-hidden select-none"
      style={{ backgroundColor: '#F9F5EE' }}
    >
      {/* Top spacer for breathing room below navigation */}
      <div className="w-full h-8 sm:h-12" aria-hidden="true" />

      {/* Main Unified Typographic Composition in Visual Center */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto flex flex-col items-center justify-center">
        {/* Name: DIVYA SRI TEEGALA in The Seasons / Playfair Display style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full"
        >
          <h1 
            className="font-normal uppercase text-center mx-auto"
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(3.4rem, min(10.2vw, 15vh), 8.8rem)',
              lineHeight: 0.84,
              letterSpacing: '-0.022em',
              color: '#751424',
            }}
          >
            <span className="block">DIVYA SRI</span>
            <span className="block">TEEGALA</span>
          </h1>
        </motion.div>

        {/* Bio sentence directly below name, broken into 2 lines like reference */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-center font-normal mx-auto mt-6 sm:mt-7 leading-[1.5] max-w-[490px] px-4"
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontSize: 'clamp(0.88rem, 1.25vw, 1.05rem)',
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
        transition={{ duration: 1.3, delay: 0.45 }}
        className="relative z-10 flex flex-col items-center select-none"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center mb-2">
          <div className="w-[1px] h-7 bg-[#751424]" />
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
        className="absolute bottom-10 sm:bottom-12 right-6 sm:right-12 lg:right-16 text-left select-none pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        <span
          className="text-[1.3rem] sm:text-[1.5rem] font-medium leading-[1.08] block"
          style={{ fontFamily: "'Caveat', cursive", color: '#751424' }}
        >
          same<br />curiosity<br />new<br />horizons
        </span>
        <span className="w-5 h-[1.5px] bg-[#751424] mt-1.5 block opacity-85" />
      </div>
    </section>
  );
};
