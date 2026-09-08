import React from 'react';
import { Terminal, Globe, Shield, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsContext: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Terminal size={16} className="text-[#5C1A2B]" />;
      case 1: return <Globe size={16} className="text-[#8A6D56]" />;
      case 2: return <Shield size={16} className="text-[#5C1A2B]" />;
      default: return <CheckCircle2 size={16} className="text-[#8A6D56]" />;
    }
  };

  return (
    <section 
      id="skills" 
      className="editorial-section border-t border-[#5C1A2B]/10"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="editorial-container">
        {/* Section Header — Exactly as requested in Refinement Prompt */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-kicker">06 / Skills &amp; Technologies</span>
            <h2 className="section-title">What I Work With</h2>
            <p className="section-subtitle">
              Technologies and tools I use across my projects and work.
            </p>
          </div>

          <span className="font-serif-body italic text-xs text-[#8A6D56]">
            Core Disciplines
          </span>
        </div>

        {/* Editorial 4-Category Layout — Preserved Exactly as Approved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={cat.category}
              className="bg-[#FDFBF7] p-6 rounded-[2px] border border-[#5C1A2B]/15 shadow-sm space-y-4 hover:border-[#5C1A2B] transition-colors duration-300"
            >
              <div className="flex items-center gap-2 pb-3 border-b border-[#5C1A2B]/10">
                {getCategoryIcon(idx)}
                <h3 className="font-serif-title text-lg text-[#2B2320]">
                  {cat.category}
                </h3>
              </div>

              <p className="font-sans text-xs text-[#8A6D56] leading-relaxed">
                {cat.description}
              </p>

              <ul className="space-y-2 pt-2 border-t border-[#5C1A2B]/10">
                {cat.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="font-sans text-xs text-[#2B2320] flex items-center gap-2 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5C1A2B]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footnote connecting to work */}
        <div className="mt-10 p-4 bg-[#FAF6EE] rounded border border-[#5C1A2B]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#635852]">
          <span>
            These disciplines are applied actively across <strong className="text-[#2B2320]">HireSphere AI</strong>, <strong className="text-[#2B2320]">Back2U</strong>, and my role at <strong className="text-[#2B2320]">NetMaxin Group</strong>.
          </span>
          <a 
            href="#work" 
            className="text-[#5C1A2B] font-medium hover:underline flex-shrink-0"
          >
            View Projects →
          </a>
        </div>
      </div>
    </section>
  );
};
