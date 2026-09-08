import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Lock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WorkShowcase: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'live' | 'systems'>('all');

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'live') return Boolean(p.liveUrl);
    if (activeTab === 'systems') return p.inDevelopment || p.isModestPersonal;
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-kicker">03 / Selected Work</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Systems designed for verification, public utility, and cryptographic resilience.
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
              All Works (5)
            </button>
            <button
              onClick={() => setActiveTab('live')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === 'live'
                  ? 'bg-[#5C1A2B] text-[#F7F1E8] font-medium'
                  : 'bg-[#EDE2D0] text-[#635852] hover:text-[#5C1A2B]'
              }`}
            >
              Live Deployments (3)
            </button>
            <button
              onClick={() => setActiveTab('systems')}
              className={`px-3 py-1.5 rounded transition-all ${
                activeTab === 'systems'
                  ? 'bg-[#5C1A2B] text-[#F7F1E8] font-medium'
                  : 'bg-[#EDE2D0] text-[#635852] hover:text-[#5C1A2B]'
              }`}
            >
              Systems &amp; Utility (2)
            </button>
          </div>
        </div>

        {/* Dynamic Project Presentation — Distinct Layouts per Project */}
        <div className="space-y-24">
          
          {/* =========================================================================
              PROJECT 1: HireSphere AI (Flagship Editorial Showcase)
             ========================================================================= */}
          {filteredProjects.some(p => p.id === 'hiresphere-ai') && (
            <article 
              className="relative bg-[#FAF6EE] rounded-[2px] border border-[#5C1A2B]/18 p-6 sm:p-10 lg:p-12 shadow-[0_6px_30px_rgba(92,26,43,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left: Project Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#5C1A2B] bg-[#5C1A2B]/10 px-2 py-0.5 rounded">
                      Case 01 · Live Platform
                    </span>
                    <span className="font-serif-body italic text-xs text-[#8A6D56]">
                      AI Talent Evaluation
                    </span>
                  </div>

                  <h3 className="font-serif-title text-3xl sm:text-4xl text-[#2B2320] leading-tight">
                    HireSphere AI
                  </h3>

                  <p className="font-serif-body italic text-lg text-[#5C1A2B] leading-relaxed">
                    “Transforming technical interviews from subjective hurdles into structured, accountable feedback loops.”
                  </p>

                  <p className="font-sans text-sm text-[#635852] leading-relaxed">
                    HireSphere AI unifies candidate assessment by combining automated response rubrics, real-time interview evaluation metrics, and clean review workflows into a cohesive full-stack interface.
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 pt-2">
                    <li className="flex items-start gap-2.5 text-xs text-[#2B2320]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5C1A2B] mt-1.5 flex-shrink-0" />
                      <span>Interactive scoring rubrics evaluating technical and behavioral responses</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-[#2B2320]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5C1A2B] mt-1.5 flex-shrink-0" />
                      <span>Structured assessment reporting designed for candidate clarity and review</span>
                    </li>
                  </ul>

                  {/* Tech stack pills */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'API Integration', 'Modern CSS'].map(t => (
                      <span key={t} className="editorial-tag text-xs">{t}</span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <a
                      href="https://hiresphereai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn-primary"
                    >
                      <span>Launch HireSphere AI</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Right: Bespoke Browser Frame with Live Preview Mock */}
                <div className="lg:col-span-6">
                  <div className="rounded-[4px] border border-[#5C1A2B]/20 bg-[#FDFBF7] shadow-xl overflow-hidden">
                    {/* Browser Chrome Header */}
                    <div className="bg-[#EDE2D0] px-4 py-2.5 flex items-center justify-between border-b border-[#5C1A2B]/15">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#5C1A2B]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8A6D56]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#9C948A]/30" />
                      </div>
                      <div className="font-mono text-[0.65rem] text-[#635852] bg-[#F7F1E8] px-3 py-0.5 rounded border border-[#5C1A2B]/10 truncate max-w-[200px]">
                        https://hiresphereai.vercel.app
                      </div>
                      <a 
                        href="https://hiresphereai.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#5C1A2B] hover:opacity-70"
                        title="Open external link"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    {/* Framed Application View */}
                    <div className="p-5 sm:p-6 bg-[#FAF6EE] min-h-[290px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#5C1A2B]/10">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-[#5C1A2B] flex items-center justify-center text-[#F7F1E8] text-[0.65rem] font-bold">
                              H
                            </div>
                            <span className="font-serif-title font-semibold text-sm text-[#2B2320]">
                              HireSphere AI
                            </span>
                          </div>
                          <span className="text-[0.65rem] bg-[#5C1A2B]/10 text-[#5C1A2B] font-medium px-2 py-0.5 rounded">
                            Assessment Engine
                          </span>
                        </div>

                        {/* Interactive UI Mock Cards */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-[#FDFBF7] p-3 rounded border border-[#5C1A2B]/10">
                            <span className="text-[0.65rem] uppercase tracking-wider text-[#8A6D56] block mb-1">Session Rubric</span>
                            <span className="font-serif-title text-base text-[#2B2320]">94% Precision</span>
                            <div className="w-full bg-[#EDE2D0] h-1.5 rounded-full mt-2 overflow-hidden">
                              <div className="bg-[#5C1A2B] h-full w-[94%]" />
                            </div>
                          </div>
                          <div className="bg-[#FDFBF7] p-3 rounded border border-[#5C1A2B]/10">
                            <span className="text-[0.65rem] uppercase tracking-wider text-[#8A6D56] block mb-1">Candidate Log</span>
                            <span className="font-serif-title text-base text-[#2B2320]">Verified Queue</span>
                            <span className="text-[0.65rem] text-[#5C1A2B] font-medium block mt-1">● Ready for Review</span>
                          </div>
                        </div>

                        <div className="bg-[#FDFBF7] p-3 rounded border border-[#5C1A2B]/10 text-xs text-[#635852] font-mono leading-relaxed">
                          $ hiresphere --evaluate "Candidate_71" --stream
                          <br />
                          <span className="text-[#5C1A2B]">&gt; Technical depth: verified</span>
                          <br />
                          <span className="text-[#8A6D56]">&gt; Architecture scoring rubric: calculated</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#5C1A2B]/10 flex items-center justify-between text-xs text-[#8A6D56]">
                        <span>Live Vercel Production</span>
                        <a 
                          href="https://hiresphereai.vercel.app/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#5C1A2B] font-medium hover:underline flex items-center gap-1"
                        >
                          Visit Platform <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* =========================================================================
              PROJECT 2: Back2U (Asymmetrical Split Editorial)
             ========================================================================= */}
          {filteredProjects.some(p => p.id === 'back2u') && (
            <article 
              className="relative bg-[#EDE2D0]/60 rounded-[2px] border border-[#8A6D56]/20 p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(92,26,43,0.03)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left: Device Mockup for Back2U */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="rounded-[4px] border border-[#8A6D56]/25 bg-[#FAF6EE] shadow-lg overflow-hidden">
                    <div className="bg-[#DDD2C4] px-4 py-2.5 flex items-center justify-between border-b border-[#8A6D56]/20">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8A6D56]/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8A6D56]/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8A6D56]/40" />
                      </div>
                      <div className="font-mono text-[0.65rem] text-[#635852] bg-[#F7F1E8] px-3 py-0.5 rounded border border-[#8A6D56]/15">
                        find-it-back2u.vercel.app
                      </div>
                      <a 
                        href="https://find-it-back2u.vercel.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#5C1A2B] hover:opacity-70"
                      >
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-serif-title text-base font-semibold text-[#2B2320]">
                            Back2U · Smart Lost &amp; Found
                          </span>
                        </div>
                        <span className="text-[0.65rem] bg-[#8A6D56]/15 text-[#8A6D56] font-semibold px-2 py-0.5 rounded">
                          Live Service
                        </span>
                      </div>

                      {/* Mock listing feed */}
                      <div className="space-y-2.5">
                        <div className="p-3 bg-[#FDFBF7] rounded border border-[#8A6D56]/15 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-medium text-[#2B2320] block">HP Calculator &amp; Notebook</span>
                            <span className="text-[0.68rem] text-[#8A6D56]">Library Reading Hall B</span>
                          </div>
                          <span className="text-[0.65rem] text-[#5C1A2B] font-semibold bg-[#5C1A2B]/10 px-2 py-0.5 rounded">
                            Found
                          </span>
                        </div>

                        <div className="p-3 bg-[#FDFBF7] rounded border border-[#8A6D56]/15 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-medium text-[#2B2320] block">Silver Key Ring</span>
                            <span className="text-[0.68rem] text-[#8A6D56]">Mechanical Block Stairwell</span>
                          </div>
                          <span className="text-[0.65rem] text-[#8A6D56] font-semibold bg-[#8A6D56]/10 px-2 py-0.5 rounded">
                            Claim Under Review
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 text-xs text-[#635852] font-sans flex items-center justify-between border-t border-[#8A6D56]/15">
                        <span>Reunion platform for academic communities</span>
                        <span className="font-serif-body italic text-[#5C1A2B]">Active Directory</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Narrative */}
                <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8A6D56] bg-[#8A6D56]/15 px-2 py-0.5 rounded">
                      Case 02 · Public Utility
                    </span>
                    <span className="font-serif-body italic text-xs text-[#635852]">
                      Community Lost &amp; Found
                    </span>
                  </div>

                  <h3 className="font-serif-title text-3xl sm:text-4xl text-[#2B2320] leading-tight">
                    Back2U
                  </h3>

                  <p className="font-serif-body italic text-lg text-[#8A6D56] leading-relaxed">
                    “Bridging misplaced possessions and their rightful owners with thoughtful verification.”
                  </p>

                  <p className="font-sans text-sm text-[#635852] leading-relaxed">
                    Misplaced personal possessions often sit indefinitely in lost corners because there is no standardized, trustworthy way to announce or verify claims. Back2U introduces a transparent registry where finders and owners reconcile items safely.
                  </p>

                  <ul className="space-y-2 text-xs text-[#2B2320]">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A6D56] mt-1.5 flex-shrink-0" />
                      <span>Categorized directory with campus and neighborhood spatial tagging</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A6D56] mt-1.5 flex-shrink-0" />
                      <span>Ownership proof prompts preventing arbitrary collection of valuable items</span>
                    </li>
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {['React', 'Web Technologies', 'State Handling', 'Responsive Interface'].map(t => (
                      <span key={t} className="editorial-tag text-xs">{t}</span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://find-it-back2u.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn-outline"
                    >
                      <span>Explore Back2U Portal</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

              </div>
            </article>
          )}

          {/* =========================================================================
              PROJECT 3: Assessment Generator (Structured Layout)
             ========================================================================= */}
          {filteredProjects.some(p => p.id === 'assessment-generator') && (
            <article 
              className="relative bg-[#FDFBF7] rounded-[2px] border border-[#5C1A2B]/15 p-6 sm:p-10 lg:p-12 shadow-[0_4px_24px_rgba(92,26,43,0.03)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left: Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#5C1A2B] bg-[#5C1A2B]/10 px-2 py-0.5 rounded">
                      Case 03 · Educational Utility
                    </span>
                    <span className="font-serif-body italic text-xs text-[#8A6D56]">
                      Exam &amp; Test Composition
                    </span>
                  </div>

                  <h3 className="font-serif-title text-3xl sm:text-4xl text-[#2B2320] leading-tight">
                    Assessment Generator
                  </h3>

                  <p className="font-serif-body italic text-lg text-[#5C1A2B] leading-relaxed">
                    “Structuring questions, weighting, and test criteria into balanced evaluation papers.”
                  </p>

                  <p className="font-sans text-sm text-[#635852] leading-relaxed">
                    Designed to eliminate repetitive manual formatting when composing formal educational tests. It provides customizable distributions across multiple choice, short explanation, and in-depth problem solving.
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-[#2B2320] pt-2">
                    <div className="p-3 bg-[#F7F1E8] rounded border border-[#5C1A2B]/10">
                      <span className="font-serif-title font-semibold block text-sm mb-0.5">Flexible Rubrics</span>
                      <span className="text-[#635852]">Custom grading curves and modular marks distribution</span>
                    </div>
                    <div className="p-3 bg-[#F7F1E8] rounded border border-[#5C1A2B]/10">
                      <span className="font-serif-title font-semibold block text-sm mb-0.5">Clean Print Output</span>
                      <span className="text-[#635852]">Typography styled directly for academic printing sheets</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'DOM Generation', 'Custom CSS', 'Vercel'].map(t => (
                      <span key={t} className="editorial-tag text-xs">{t}</span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://assessment-generator-gilt.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn-primary"
                    >
                      <span>Open Assessment Generator</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>

                {/* Right: Mock Exam Paper Frame */}
                <div className="lg:col-span-6">
                  <div className="rounded-[4px] border border-[#5C1A2B]/20 bg-[#FAF6EE] p-6 shadow-md">
                    <div className="border-b border-[#5C1A2B]/15 pb-3 mb-4 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono text-[#5C1A2B] font-semibold tracking-wider">PAPER PREVIEW</span>
                        <span className="text-[#8A6D56] block text-[0.7rem]">Automated Compilation Matrix</span>
                      </div>
                      <span className="font-mono text-[0.65rem] bg-[#F7F1E8] px-2 py-1 rounded border border-[#5C1A2B]/10 text-[#635852]">
                        100 Total Marks
                      </span>
                    </div>

                    <div className="space-y-4 font-sans text-xs bg-[#FDFBF7] p-4 rounded border border-[#5C1A2B]/10">
                      <div>
                        <span className="font-semibold text-[#2B2320] block mb-1">PART A — Foundations (20 Marks)</span>
                        <p className="text-[#635852] italic text-[0.75rem]">Q1. Differentiate between public and private cryptographic keys in decentralized consensus.</p>
                      </div>

                      <div className="pt-2 border-t border-[#5C1A2B]/10">
                        <span className="font-semibold text-[#2B2320] block mb-1">PART B — Systems Analysis (40 Marks)</span>
                        <p className="text-[#635852] italic text-[0.75rem]">Q2. Propose a ledger verification sequence for IoT edge nodes experiencing network latency.</p>
                      </div>

                      <div className="pt-2 border-t border-[#5C1A2B]/10 flex items-center justify-between text-[0.7rem] text-[#8A6D56]">
                        <span>Answer Key &amp; Rubric Compiled</span>
                        <span className="text-[#5C1A2B] font-medium">Ready for PDF Export</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </article>
          )}

          {/* =========================================================================
              PROJECT 4: Quantum Secure Electronic Voting System (IN DEVELOPMENT)
             ========================================================================= */}
          {filteredProjects.some(p => p.id === 'quantum-voting') && (
            <article 
              className="relative bg-[#2B2320] text-[#F7F1E8] rounded-[2px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#5C1A2B]"
            >
              {/* Development banner */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F7F1E8]/15 mb-8">
                <div className="flex items-center gap-3">
                  <Lock size={16} className="text-[#E8CFC4]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E8CFC4] font-medium">
                    Research &amp; Systems Exploration
                  </span>
                </div>
                
                {/* Master Prompt Requirement: clearly labeled as IN DEVELOPMENT */}
                <span className="font-mono text-xs uppercase tracking-widest bg-[#5C1A2B] text-[#F7F1E8] px-3 py-1 rounded font-semibold border border-[#E8CFC4]/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E8CFC4] animate-ping" />
                  IN DEVELOPMENT
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="font-serif-title text-3xl sm:text-4xl text-[#F7F1E8] leading-tight">
                    Quantum Secure Electronic Voting System
                  </h3>

                  <p className="font-serif-body italic text-lg text-[#E8CFC4] leading-relaxed">
                    “Safeguarding the sanctity of the democratic ballot against post-quantum computational threats.”
                  </p>

                  <p className="font-sans text-sm text-[#DDD2C4] leading-relaxed">
                    Shor’s algorithm poses an eventual existential threat to traditional RSA and elliptic curve cryptography used in digital election prototypes. This research inquiry models a decentralized voting framework incorporating lattice-based cryptography, zero-knowledge ballot verification, and tamper-evident append-only ledger mechanisms.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs text-[#EDE2D0]">
                      <span className="font-mono text-[#E8CFC4] font-bold">01</span>
                      <p><strong>Post-Quantum Resistance:</strong> Exploring lattice-based cryptographic algorithms to preserve ballot secrecy even under future quantum decryption.</p>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-[#EDE2D0]">
                      <span className="font-mono text-[#E8CFC4] font-bold">02</span>
                      <p><strong>Individual Verifiability:</strong> Every voter receives a zero-knowledge cryptographic proof allowing them to verify their ballot was tallied without revealing their vote.</p>
                    </div>
                    <div className="flex items-start gap-3 text-xs text-[#EDE2D0]">
                      <span className="font-mono text-[#E8CFC4] font-bold">03</span>
                      <p><strong>Decentralized Ledger:</strong> Elimination of centralized tally servers, ensuring no single authority can manipulate or alter election outputs.</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {['Post-Quantum Cryptography', 'Blockchain Ledger', 'Lattice Protocols', 'Voter Verifiability', 'Cybersecurity'].map(t => (
                      <span key={t} className="text-xs bg-[#F7F1E8]/10 text-[#EDE2D0] px-2.5 py-1 rounded border border-[#F7F1E8]/15 font-sans">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs font-serif-body italic text-[#B9A793] pt-2">
                    * Active research prototype; architecture blueprints and mathematical formulation currently underway. No public deployment link is published until peer-reviewed.
                  </p>
                </div>

                {/* Right: Cryptographic Architecture Schematic (Natural wording, no institutional terms) */}
                <div className="lg:col-span-5 bg-[#1F1917] p-6 rounded border border-[#F7F1E8]/15 space-y-4">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-[#F7F1E8]/10">
                    <span className="font-mono text-[#E8CFC4] uppercase tracking-wider">Architecture Flow</span>
                    <span className="text-[0.65rem] font-mono text-[#9C948A]">SEC-VER-0.3</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-[#EDE2D0]">
                    <div className="p-3 bg-[#2B2320] rounded border border-[#5C1A2B]/40">
                      <span className="text-[0.65rem] text-[#E8CFC4] block">Step 1 · Ballot Sealing</span>
                      <span>Lattice-Based Public Encryption</span>
                    </div>

                    <div className="flex justify-center text-[#5C1A2B]">↓</div>

                    <div className="p-3 bg-[#2B2320] rounded border border-[#5C1A2B]/40">
                      <span className="text-[0.65rem] text-[#E8CFC4] block">Step 2 · Anonymity Layer</span>
                      <span>Homomorphic Shuffle &amp; ZK Proof</span>
                    </div>

                    <div className="flex justify-center text-[#5C1A2B]">↓</div>

                    <div className="p-3 bg-[#2B2320] rounded border border-[#5C1A2B]/40">
                      <span className="text-[0.65rem] text-[#E8CFC4] block">Step 3 · Ledger Consensus</span>
                      <span>Tamper-Evident Distributed Tally</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[0.7rem] text-[#9C948A] text-center font-sans">
                    Cryptographic Integrity over Centralized Trust
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* =========================================================================
              PROJECT 5: Police Attendance Management System (Modest, Built for Her Father)
             ========================================================================= */}
          {filteredProjects.some(p => p.id === 'police-attendance') && (
            <article 
              className="relative bg-[#FAF6EE] rounded-[2px] border border-[#B9A793]/40 p-6 sm:p-8 lg:p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8A6D56] bg-[#8A6D56]/10 px-2 py-0.5 rounded">
                      Practical Utility · Personal Build
                    </span>
                    <span className="font-serif-body italic text-xs text-[#635852]">
                      Departmental Roster
                    </span>
                  </div>

                  <h3 className="font-serif-title text-2xl sm:text-3xl text-[#2B2320]">
                    Police Attendance Management System
                  </h3>

                  <p className="font-serif-body italic text-base text-[#8A6D56]">
                    Built specifically for my father to simplify daily personnel logs and shift management.
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#635852] leading-relaxed">
                    Rather than a grandiose enterprise rollout, this system was created to solve a genuine everyday administrative bottleneck. It replaced cumbersome physical duty registers with a lightweight, reliable web interface where station officers can record daily shift roll-calls, note duty assignments, and track attendance history without needless complexity.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Web Application', 'Database Management', 'Personnel Roll-Call', 'Practical Utility'].map(t => (
                      <span key={t} className="editorial-tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FDFBF7] p-5 rounded border border-[#B9A793]/30 text-xs text-[#2B2320] space-y-3">
                  <div className="flex items-center justify-between border-b border-[#B9A793]/20 pb-2">
                    <span className="font-mono font-semibold uppercase tracking-wider text-[#8A6D56]">
                      Daily Shift Roster
                    </span>
                    <span className="text-[0.65rem] text-[#635852]">Station Duty Record</span>
                  </div>

                  <div className="space-y-2 font-mono text-[0.75rem]">
                    <div className="flex justify-between py-1 border-b border-dashed border-[#B9A793]/30">
                      <span>Morning Shift Roll-Call</span>
                      <span className="text-[#5C1A2B] font-semibold">18 Logged</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-dashed border-[#B9A793]/30">
                      <span>Patrol Assignment Tracking</span>
                      <span className="text-[#8A6D56]">Confirmed</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>Monthly Report Generation</span>
                      <span className="text-[#2B2320]">Archived</span>
                    </div>
                  </div>

                  <p className="font-serif-body italic text-[0.72rem] text-[#8A6D56] pt-1">
                    A quiet, utilitarian tool serving real people on duty every day.
                  </p>
                </div>
              </div>
            </article>
          )}

        </div>
      </div>
    </section>
  );
};
