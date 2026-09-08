import React from 'react';
import { BookOpen, ShieldCheck, Cpu, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { academics } = PORTFOLIO_DATA.personal;

  return (
    <section 
      id="about" 
      className="editorial-section border-t border-[#5C1A2B]/10"
      style={{ backgroundColor: 'var(--bg-primary-soft)' }}
    >
      <div className="editorial-container">
        {/* Section kicker */}
        <div className="flex items-center justify-between mb-10">
          <span className="section-kicker">01 / About</span>
          <span className="font-serif-body italic text-sm text-[#8A6D56]">Studies &amp; Focus</span>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Pull-Quote */}
          <div className="lg:col-span-7">
            <h2 className="font-serif-title text-[clamp(1.9rem,3.4vw,2.9rem)] font-normal text-[#2B2320] leading-[1.2] tracking-tight mb-8">
              “Rigorous engineering is an editorial process — pruning excess, clarifying architecture, and securing boundaries.”
            </h2>

            <div className="space-y-6 text-[#635852] font-sans text-[0.96rem] leading-[1.75]">
              <p>
                I am a Computer Science and Engineering student at{' '}
                <strong className="text-[#2B2320] font-semibold">{academics.institution}</strong>{' '}
                ({academics.period}), pursuing my degree with a focus on{' '}
                <span className="text-[#5C1A2B] font-medium">{academics.specialization}</span>.
              </p>

              <p>
                My studies center on how connected physical hardware can communicate with cryptographic integrity, and how decentralized protocols can eliminate single points of failure in critical digital systems.
              </p>
            </div>

            {/* Specialization pills */}
            <div className="pt-8 flex flex-wrap gap-2.5">
              <span className="editorial-tag flex items-center gap-1.5 py-1 px-3">
                <Cpu size={13} className="text-[#8A6D56]" />
                <span>Internet of Things</span>
              </span>
              <span className="editorial-tag flex items-center gap-1.5 py-1 px-3">
                <ShieldCheck size={13} className="text-[#5C1A2B]" />
                <span>Cybersecurity</span>
              </span>
              <span className="editorial-tag flex items-center gap-1.5 py-1 px-3">
                <Database size={13} className="text-[#8A6D56]" />
                <span>Blockchain Systems</span>
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Overview Card */}
          <div className="lg:col-span-5">
            <div 
              className="bg-[#FDFBF7] p-7 sm:p-8 rounded-[2px] border border-[#5C1A2B]/15 shadow-[0_4px_24px_rgba(92,26,43,0.04)] relative"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#5C1A2B]/10">
                <div className="flex items-center gap-2">
                  <BookOpen size={15} className="text-[#5C1A2B]" />
                  <span className="font-sans text-[0.72rem] tracking-[0.18em] uppercase font-semibold text-[#5C1A2B]">
                    Academic Background
                  </span>
                </div>
                <span className="font-serif-body italic text-xs text-[#9C948A]">
                  2023 — 2027
                </span>
              </div>

              {/* Data pairs */}
              <dl className="space-y-4 font-sans text-sm">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-[#8A6D56] font-medium mb-0.5">
                    College
                  </dt>
                  <dd className="font-serif-title text-lg text-[#2B2320]">
                    {academics.institution}
                  </dd>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-[#8A6D56] font-medium mb-0.5">
                      Degree
                    </dt>
                    <dd className="text-[#2B2320] font-medium text-[0.88rem]">
                      B.Tech in CSE
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-[#8A6D56] font-medium mb-0.5">
                      CGPA
                    </dt>
                    <dd className="font-serif-title text-xl text-[#5C1A2B] font-medium">
                      {academics.cgpa} <span className="text-xs font-sans text-[#8A6D56] font-normal">/ 10.0</span>
                    </dd>
                  </div>
                </div>

                <div className="pt-1">
                  <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-[#8A6D56] font-medium mb-0.5">
                    Years
                  </dt>
                  <dd className="text-[#2B2320] text-sm">
                    {academics.period}
                  </dd>
                </div>

                <div className="pt-1">
                  <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-[#8A6D56] font-medium mb-0.5">
                    Specialization
                  </dt>
                  <dd className="text-[#5C1A2B] text-sm font-medium">
                    {academics.specialization}
                  </dd>
                </div>
              </dl>

              {/* Bottom footer mark */}
              <div className="mt-8 pt-4 border-t border-[#5C1A2B]/10 flex items-center justify-between text-xs text-[#8A6D56]">
                <span className="tracking-widest uppercase text-[0.65rem]">MVGR College of Engineering</span>
                <span className="font-script text-base text-[#5C1A2B]">D. S. Teegala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
