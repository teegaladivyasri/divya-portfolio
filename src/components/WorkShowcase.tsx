import React, { useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WorkShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'live' | 'other'>('all');

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'live') return Boolean(p.liveUrl);
    if (activeTab === 'other') return !p.liveUrl || p.inDevelopment;
    return true;
  });

  return (
    <section 
      id="work" 
      className="editorial-section border-t border-[#5C1A2B]/10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-kicker">02 / Selected Work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Functional tools, platforms, and software projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 text-xs font-sans">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === 'all'
                  ? 'bg-[#5C1A2B] text-[#F7F1E8] font-medium'
                  : 'bg-[#EDE2D0] text-[#635852] hover:text-[#5C1A2B]'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('live')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === 'live'
                  ? 'bg-[#5C1A2B] text-[#F7F1E8] font-medium'
                  : 'bg-[#EDE2D0] text-[#635852] hover:text-[#5C1A2B]'
              }`}
            >
              Live Demos (4)
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === 'other'
                  ? 'bg-[#5C1A2B] text-[#F7F1E8] font-medium'
                  : 'bg-[#EDE2D0] text-[#635852] hover:text-[#5C1A2B]'
              }`}
            >
              Systems &amp; Exploration (2)
            </button>
          </div>
        </div>

        {/* Clean, Scannable 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="bg-[#FDFBF7] p-7 sm:p-8 rounded-[2px] border border-[#5C1A2B]/15 shadow-sm hover:border-[#5C1A2B]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8A6D56]">
                    0{index + 1} · {project.category}
                  </span>

                  {project.inDevelopment && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider bg-[#5C1A2B]/10 text-[#5C1A2B] px-2.5 py-0.5 rounded font-medium border border-[#5C1A2B]/20">
                      <Clock size={11} />
                      {project.statusBadge || 'In Development'}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif-title text-2xl sm:text-3xl text-[#2B2320] leading-tight">
                  {project.title}
                </h3>

                {/* Short, factual description */}
                <p className="font-sans text-sm text-[#635852] leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="editorial-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action / Link Footer */}
              <div className="pt-6 mt-6 border-t border-[#5C1A2B]/10 flex items-center justify-between">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-[#8A6D56] italic">
                    In Development
                  </span>
                )}

                {project.liveUrl && (
                  <span className="font-mono text-[0.7rem] text-[#8A6D56] truncate max-w-[180px]">
                    {new URL(project.liveUrl).hostname}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
