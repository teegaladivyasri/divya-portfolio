import React, { useState } from 'react';
import { X, ChevronRight, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, type CertificationItem } from '../data/portfolioData';

export const CertificationsArchive: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section 
      id="certifications" 
      className="editorial-section border-t border-[#5C1A2B]/10"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-kicker">05 / Certifications</span>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">
              Specialized coursework, cryptographic foundations, and systems testing.
            </p>
          </div>

          <button
            onClick={() => setArchiveModalOpen(true)}
            className="editorial-btn-outline self-start md:self-auto flex items-center gap-2"
          >
            <Layers size={14} className="text-[#5C1A2B]" />
            <span>Open Complete Archive ({certifications.length})</span>
          </button>
        </div>

        {/* Fanned / Stacked Visual Presentation */}
        <div className="relative py-8 px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Left: Explanatory Column */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#8A6D56]">
                Overview
              </span>
              <h3 className="font-serif-title text-2xl text-[#2B2320]">
                Curricular Focus &amp; Practical Verification
              </h3>
              <p className="font-sans text-sm text-[#635852] leading-relaxed">
                Credentials reflect dedicated academic specialization courses at MVGR and applied verification roles at NetMaxin Group.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setArchiveModalOpen(true)}
                  className="editorial-btn-primary text-xs py-2.5 px-4"
                >
                  <span>View All Certifications</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Right: Stacked Fanned Cards */}
            <div className="relative h-[280px] flex items-center justify-center">
              {certifications.slice(0, 3).map((cert, index) => {
                const rotations = [-4, 2, 6];
                const translatesY = [0, 8, 16];
                const rotates = rotations[index] || 0;
                const translateY = translatesY[index] || 0;

                return (
                  <div
                    key={cert.id}
                    onClick={() => {
                      setSelectedCert(cert);
                      setArchiveModalOpen(true);
                    }}
                    className="absolute w-[90%] max-w-[320px] bg-[#FDFBF7] p-5 rounded-[2px] border border-[#5C1A2B]/20 shadow-[0_8px_20px_rgba(92,26,43,0.06)] cursor-pointer transition-all duration-400 hover:-translate-y-4 hover:shadow-xl hover:border-[#5C1A2B]"
                    style={{
                      transform: `rotate(${rotates}deg) translateY(${translateY}px)`,
                      zIndex: index + 1,
                    }}
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#5C1A2B]/10">
                      <span className="font-mono text-[0.65rem] text-[#5C1A2B] font-semibold uppercase">
                        Credential #{index + 1}
                      </span>
                      <span className="text-[0.65rem] font-mono text-[#8A6D56]">{cert.year}</span>
                    </div>

                    <h4 className="font-serif-title text-base text-[#2B2320] leading-snug line-clamp-2 mb-2">
                      {cert.title}
                    </h4>

                    <p className="text-[0.7rem] text-[#635852] font-sans truncate mb-3">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center justify-between text-[0.65rem] text-[#8A6D56] pt-2 border-t border-[#5C1A2B]/10">
                      <span>Click to view details</span>
                      <ChevronRight size={12} className="text-[#5C1A2B]" />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      {/* Expanded Archive Drawer / Modal */}
      {archiveModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B2320]/60 backdrop-blur-sm"
          onClick={() => setArchiveModalOpen(false)}
        >
          <div 
            className="bg-[#FAF6EE] max-w-3xl w-full max-h-[85vh] rounded-[2px] border border-[#5C1A2B]/30 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'fadeIn 0.25s ease-out' }}
          >
            {/* Modal Header */}
            <div className="p-6 bg-[#EDE2D0] border-b border-[#5C1A2B]/15 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#5C1A2B]">
                  Archive
                </span>
                <h3 className="font-serif-title text-2xl text-[#2B2320]">
                  Certifications
                </h3>
              </div>
              <button
                onClick={() => setArchiveModalOpen(false)}
                className="p-2 text-[#2B2320] hover:text-[#5C1A2B] hover:bg-[#5C1A2B]/10 rounded transition-colors"
                aria-label="Close archive view"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable list of verified certificates */}
            <div className="p-6 overflow-y-auto space-y-4">
              <p className="font-serif-body italic text-xs text-[#8A6D56] pb-2 border-b border-[#5C1A2B]/10">
                Displaying confirmed academic courses and practicums.
              </p>

              {certifications.map((cert) => {
                const isSelected = selectedCert?.id === cert.id;
                return (
                  <div
                    key={cert.id}
                    className={`p-5 rounded border shadow-sm space-y-3 transition-colors ${
                      isSelected 
                        ? 'bg-[#FAF6EE] border-[#5C1A2B] ring-1 ring-[#5C1A2B]/40' 
                        : 'bg-[#FDFBF7] border-[#5C1A2B]/15'
                    }`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#5C1A2B]" />
                        <h4 className="font-serif-title text-lg text-[#2B2320]">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="font-mono text-xs text-[#8A6D56] bg-[#EDE2D0] px-2 py-0.5 rounded">
                        {cert.year}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-[#5C1A2B] font-medium">
                      Issued by: {cert.issuer}
                    </p>

                    <p className="font-sans text-xs text-[#635852] leading-relaxed">
                      {cert.credentialNote}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skillsCovered.map((skill) => (
                        <span key={skill} className="editorial-tag text-[0.68rem] py-0.5 px-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="p-4 bg-[#EDE2D0]/60 rounded border border-dashed border-[#8A6D56]/40 text-center space-y-1">
                <FileCheck size={20} className="mx-auto text-[#8A6D56]" />
                <p className="font-serif-body italic text-xs text-[#2B2320]">
                  Additional certifications can be placed in <code className="font-mono text-[#5C1A2B]">/public/certifications/</code>.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#EDE2D0] border-t border-[#5C1A2B]/15 text-right">
              <button
                onClick={() => setArchiveModalOpen(false)}
                className="editorial-btn-outline text-xs py-2 px-4"
              >
                Close Archive
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
