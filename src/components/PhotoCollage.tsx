import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PhotoCollage: React.FC = () => {
  const { photoPlaceholders } = PORTFOLIO_DATA;

  return (
    <section 
      id="photos" 
      className="editorial-section border-t border-[#5C1A2B]/10 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="editorial-container">
        {/* Section Header — Clean, understated, no invented stories */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-kicker">02 / Photographs</span>
            <h2 className="section-title">Photographs</h2>
            <p className="section-subtitle">
              Visual stills and moments.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.14em] uppercase text-[#8A6D56]">
            <Camera size={14} className="text-[#5C1A2B]" />
            <span>Collection</span>
          </div>
        </div>

        {/* Asymmetric Editorial Collage Layout — Easily Replaceable Photo Containers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Large Feature Frame (span 7) */}
          <div className="md:col-span-7 flex flex-col">
            <div 
              className="group relative bg-[#FDFBF7] p-4 sm:p-5 rounded-[2px] shadow-[0_8px_30px_rgba(92,26,43,0.06)] border border-[#5C1A2B]/15 transition-transform duration-500 hover:-translate-y-1"
              style={{ transform: 'rotate(-0.6deg)' }}
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/5] w-full bg-[#EDE2D0] overflow-hidden rounded-[1px] flex flex-col items-center justify-center text-center p-6 border border-[#5C1A2B]/10">
                <img 
                  src={photoPlaceholders[0]?.file || '/photos/divya_01.jpg'} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Clean Placeholder Block */}
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 rounded-full border border-[#5C1A2B]/30 flex items-center justify-center bg-[#F7F1E8]/70 text-[#5C1A2B]">
                    <ImageIcon size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#5C1A2B] bg-[#F7F1E8] px-2.5 py-1 rounded border border-[#5C1A2B]/10">
                    {photoPlaceholders[0]?.file}
                  </span>
                </div>
              </div>

              {/* Minimalist frame label */}
              <div className="pt-3 flex items-center justify-between text-xs text-[#8A6D56]">
                <span className="font-mono text-[0.65rem] tracking-wider">01</span>
                <span className="font-script text-base text-[#5C1A2B]">Still</span>
              </div>
            </div>
          </div>

          {/* Right Column: Varied Sized Offset Frames (span 5) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Landscape / Wide Frame */}
            <div 
              className="group relative bg-[#FDFBF7] p-4 sm:p-5 rounded-[2px] shadow-[0_6px_24px_rgba(92,26,43,0.05)] border border-[#5C1A2B]/15 transition-transform duration-500 hover:-translate-y-1"
              style={{ transform: 'rotate(0.8deg)' }}
            >
              <div className="relative aspect-[16/10] w-full bg-[#EDE2D0] overflow-hidden rounded-[1px] flex flex-col items-center justify-center text-center p-4 border border-[#5C1A2B]/10">
                <img 
                  src={photoPlaceholders[1]?.file || '/photos/divya_02.jpg'} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="relative z-10 flex flex-col items-center space-y-2">
                  <div className="w-9 h-9 rounded-full border border-[#8A6D56]/30 flex items-center justify-center bg-[#F7F1E8]/70 text-[#8A6D56]">
                    <ImageIcon size={16} />
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#8A6D56]">
                    {photoPlaceholders[1]?.file}
                  </span>
                </div>
              </div>

              <div className="pt-2.5 flex items-center justify-between text-xs text-[#8A6D56]">
                <span className="font-mono text-[0.65rem] tracking-wider">02</span>
              </div>
            </div>

            {/* Bottom Row: 2 Offset Square / Portrait Mini Stills */}
            <div className="grid grid-cols-2 gap-4">
              
              <div 
                className="group relative bg-[#FDFBF7] p-3 rounded-[2px] shadow-[0_4px_16px_rgba(92,26,43,0.04)] border border-[#5C1A2B]/15 transition-transform duration-500 hover:-translate-y-1"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <div className="relative aspect-square w-full bg-[#E8CFC4]/40 overflow-hidden flex flex-col items-center justify-center p-3 text-center">
                  <img 
                    src={photoPlaceholders[2]?.file || '/photos/divya_03.jpg'} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="font-mono text-[0.6rem] text-[#8A6D56]">{photoPlaceholders[2]?.file}</span>
                </div>
                <div className="pt-2 text-[0.65rem] font-mono text-[#8A6D56]">
                  03
                </div>
              </div>

              <div 
                className="group relative bg-[#FDFBF7] p-3 rounded-[2px] shadow-[0_4px_16px_rgba(92,26,43,0.04)] border border-[#5C1A2B]/15 transition-transform duration-500 hover:-translate-y-1"
                style={{ transform: 'rotate(1.2deg)' }}
              >
                <div className="relative aspect-square w-full bg-[#DDD2C4]/50 overflow-hidden flex flex-col items-center justify-center p-3 text-center">
                  <img 
                    src={photoPlaceholders[3]?.file || '/photos/divya_04.jpg'} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="font-mono text-[0.6rem] text-[#8A6D56]">{photoPlaceholders[3]?.file}</span>
                </div>
                <div className="pt-2 text-[0.65rem] font-mono text-[#8A6D56]">
                  04
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Informational Drop-in Note */}
        <div className="mt-10 text-center">
          <p className="font-serif-body italic text-xs text-[#8A6D56]">
            Place photographs in <code className="font-mono text-[#5C1A2B] bg-[#FDFBF7] px-1.5 py-0.5 rounded border border-[#5C1A2B]/10">/public/photos/</code> to populate these frames.
          </p>
        </div>
      </div>
    </section>
  );
};
