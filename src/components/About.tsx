import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, User, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { academics } = PORTFOLIO_DATA.personal;
  const [photoError, setPhotoError] = useState(false);

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
          <span className="font-serif-body italic text-sm text-[#8A6D56]">
            Background &amp; Studies
          </span>
        </div>

        {/* Asymmetric 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Personal Narrative & Quick Academic Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-[#8A6D56] font-medium block mb-1">
                Computer Science &amp; Engineering Undergraduate
              </span>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-[2.75rem] text-[#2B2320] leading-[1.18] font-normal">
                Divya Sri Teegala
              </h2>
            </div>

            <p className="font-serif-body italic text-lg text-[#5C1A2B] leading-relaxed">
              “Building useful software through curiosity, thoughtful ideas, and a willingness to keep learning.”
            </p>

            <div className="space-y-4 text-[#635852] font-sans text-[0.95rem] leading-[1.75]">
              <p>
                I am a B.Tech Computer Science and Engineering student at{' '}
                <strong className="text-[#2B2320] font-semibold">{academics.institution}</strong>{' '}
                ({academics.period}) with an academic cumulative GPA of{' '}
                <span className="font-serif-title text-lg text-[#5C1A2B] font-semibold">{academics.cgpa}</span>
                <span className="text-xs text-[#8A6D56]"> / 10.0</span>.
              </p>

              <p>
                My areas of focus are{' '}
                <span className="text-[#5C1A2B] font-medium">
                  {academics.specialization}
                </span>.
                I’m interested in learning how these technologies work and applying them
                through practical projects.
              </p>
            </div>

            {/* Specialization pills */}
            <div className="pt-2 flex flex-wrap gap-2.5">
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

            {/* Key Fact Snapshot Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#5C1A2B]/10">
              <div className="p-3 bg-[#FDFBF7] rounded border border-[#5C1A2B]/10">
                <span className="text-[0.68rem] uppercase tracking-wider text-[#8A6D56] block mb-0.5">Institution</span>
                <span className="text-xs font-semibold text-[#2B2320]">MVGR College</span>
              </div>
              <div className="p-3 bg-[#FDFBF7] rounded border border-[#5C1A2B]/10">
                <span className="text-[0.68rem] uppercase tracking-wider text-[#8A6D56] block mb-0.5">Batch</span>
                <span className="text-xs font-semibold text-[#2B2320]">2023–2027</span>
              </div>
              <div className="p-3 bg-[#FDFBF7] rounded border border-[#5C1A2B]/10 col-span-2 sm:col-span-1">
                <span className="text-[0.68rem] uppercase tracking-wider text-[#8A6D56] block mb-0.5">Location</span>
                <span className="text-xs font-semibold text-[#2B2320]">Vizianagaram, AP</span>
              </div>
            </div>
          </div>

          {/* Right Column: ONLY ONE Single Personal Photograph Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#FDFBF7] p-4 sm:p-5 rounded-[2px] border border-[#5C1A2B]/15 shadow-[0_6px_28px_rgba(92,26,43,0.05)]">

              {/* Photo Frame Container */}
              <div className="relative aspect-[4/5] w-full bg-[#EDE2D0]/70 overflow-hidden rounded-[1px] border border-[#5C1A2B]/10 flex flex-col items-center justify-center">
                {!photoError ? (
                  <img
                    src="/photos/divya.jpg"
                    alt="Divya Sri Teegala"
                    className="w-full h-full object-cover"
                    onError={() => setPhotoError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border border-[#5C1A2B]/20 flex items-center justify-center text-[#5C1A2B]">
                      <User size={28} />
                    </div>
                    <div>
                      <h4 className="font-serif-title text-base text-[#2B2320]">
                        Divya Sri Teegala
                      </h4>
                      <p className="text-[0.72rem] text-[#8A6D56] font-sans mt-0.5">
                        B.Tech Computer Science &amp; Engineering
                      </p>
                    </div>
                    <span className="font-mono text-[0.62rem] text-[#5C1A2B] bg-[#FAF6EE] px-2.5 py-1 rounded border border-[#5C1A2B]/15">
                      /public/photos/divya.jpg
                    </span>
                  </div>
                )}
              </div>

              {/* Photo Frame Caption */}
              <div className="pt-3.5 flex items-center justify-between text-xs text-[#8A6D56]">
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-[#5C1A2B]" />
                  <span className="font-sans text-[0.72rem]">MVGR College of Engineering</span>
                </div>
                <span className="font-script text-lg text-[#5C1A2B]">
                  D. S. Teegala
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

