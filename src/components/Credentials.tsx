import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Credentials: React.FC = () => {
  const { experience, education } = PORTFOLIO_DATA;

  return (
    <section 
      id="experience" 
      className="editorial-section border-t border-[#5C1A2B]/10"
      style={{ backgroundColor: 'var(--bg-primary-soft)' }}
    >
      <div className="editorial-container">
        {/* Section Header — Natural wording */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="section-kicker">03 / Experience &amp; Education</span>
            <h2 className="section-title">Experience &amp; Education</h2>
            <p className="section-subtitle">
              Work, testing, and engineering studies.
            </p>
          </div>
          
          <div className="font-serif-body italic text-sm text-[#8A6D56]">
            Summary
          </div>
        </div>

        {/* Two-Column Editorial Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Professional Experience */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-[#5C1A2B]/15">
              <Briefcase size={18} className="text-[#5C1A2B]" />
              <h3 className="font-serif-title text-2xl text-[#2B2320]">
                Experience
              </h3>
            </div>

            {experience.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFBF7] p-8 rounded-[2px] border border-[#5C1A2B]/15 shadow-sm space-y-6 relative"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h4 className="font-serif-title text-xl text-[#2B2320] font-medium">
                      {exp.role}
                    </h4>
                    <p className="font-sans text-sm text-[#5C1A2B] font-semibold tracking-wide">
                      {exp.company}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#8A6D56] bg-[#EDE2D0] px-2.5 py-1 rounded">
                    {exp.period}
                  </span>
                </div>

                <div className="border-t border-[#5C1A2B]/10 pt-4">
                  <span className="font-sans text-xs uppercase tracking-[0.14em] text-[#8A6D56] block mb-3 font-medium">
                    Responsibilities
                  </span>
                  
                  <ul className="space-y-3 font-sans text-sm text-[#635852]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5C1A2B] mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-xs text-[#8A6D56] font-serif-body italic border-t border-[#5C1A2B]/10">
                  Focus: User interface stability, AI tool evaluation, and integration testing.
                </div>
              </div>
            ))}
          </div>

          {/* Right: Academic Education */}
          <div id="education" className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-[#5C1A2B]/15">
              <GraduationCap size={18} className="text-[#5C1A2B]" />
              <h3 className="font-serif-title text-2xl text-[#2B2320]">
                Education
              </h3>
            </div>

            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFBF7] p-8 rounded-[2px] border border-[#5C1A2B]/15 shadow-sm space-y-6 relative"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h4 className="font-serif-title text-xl text-[#2B2320] font-medium">
                      {edu.degree}
                    </h4>
                    <p className="font-sans text-sm text-[#5C1A2B] font-semibold tracking-wide">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#8A6D56] bg-[#EDE2D0] px-2.5 py-1 rounded">
                    {edu.period}
                  </span>
                </div>

                {/* Metrics Callout */}
                <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#5C1A2B]/10">
                  <div>
                    <span className="text-[0.7rem] uppercase tracking-wider text-[#8A6D56] block">
                      Cumulative GPA
                    </span>
                    <span className="font-serif-title text-2xl text-[#5C1A2B] font-normal">
                      {edu.cgpa} <span className="text-xs font-sans text-[#635852]">/ 10</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[0.7rem] uppercase tracking-wider text-[#8A6D56] block">
                      College
                    </span>
                    <span className="text-sm font-medium text-[#2B2320] block mt-1">
                      Autonomous COE
                    </span>
                  </div>
                </div>

                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.14em] text-[#8A6D56] block mb-2 font-medium">
                    Specialization
                  </span>
                  <div className="p-3 bg-[#FAF6EE] rounded border border-[#5C1A2B]/10 text-sm text-[#2B2320] font-medium">
                    {edu.specialization}
                  </div>
                  <p className="font-sans text-xs text-[#635852] mt-2 leading-relaxed">
                    Coursework encompassing network security, cryptography, embedded IoT systems, and blockchain fundamentals.
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
