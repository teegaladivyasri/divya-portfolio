import React, { useState, useMemo } from 'react';
import { Folder, FolderOpen, X, ArrowLeft, ZoomIn, FileText, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA, type CertificateDocument } from '../data/portfolioData';

// Automatically discover all certificate images placed in /public/certifications/
const autoDiscoveredCertFiles = import.meta.glob(
  '/public/certifications/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

function formatTitleFromPath(path: string, index: number): string {
  const filename = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
  const match = filename.match(/^cert(?:_|-)?0*(\d+)$/i);
  if (match) {
    const num = parseInt(match[1], 10);
    return `Certificate ${num < 10 ? '0' + num : num}`;
  }
  const clean = filename
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  return clean || `Certificate ${index + 1 < 10 ? '0' + (index + 1) : index + 1}`;
}

export const CertificationsArchive: React.FC = () => {
  const certificates: CertificateDocument[] = useMemo(() => {
    const paths = Object.keys(autoDiscoveredCertFiles);
    if (paths.length > 0) {
      // Naturally sort files (e.g. cert_01, cert_02 ... cert_10)
      paths.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
      return paths.map((path, idx) => ({
        id: `cert-${idx + 1}`,
        title: formatTitleFromPath(path, idx),
        image: path.replace(/^\/public/, ''),
      }));
    }
    return PORTFOLIO_DATA.certificateDocuments;
  }, []);

  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<CertificateDocument | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

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
            <span className="section-kicker">04 / Certifications</span>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle">
              Academic credentials and official coursework documentation.
            </p>
          </div>

          <span className="font-serif-body italic text-xs text-[#8A6D56]">
            Document Archive
          </span>
        </div>

        {/* =========================================================================
            STATE 1: Closed Folder View (Clean, Minimal, Tactile)
           ========================================================================= */}
        {!isFolderOpen ? (
          <div className="flex justify-center py-6">
            <button
              onClick={() => setIsFolderOpen(true)}
              className="group text-left w-full max-w-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1A2B]"
              aria-label="Open Certifications Folder"
            >
              {/* Folder Tab */}
              <div className="flex items-center gap-2 w-fit bg-[#FAF6EE] px-5 py-2 rounded-t-[4px] border-t border-l border-r border-[#5C1A2B]/20 text-xs font-mono tracking-widest text-[#5C1A2B] uppercase">
                <Folder size={14} className="text-[#5C1A2B]" />
                <span>ARCHIVE / CERTIFICATIONS</span>
              </div>

              {/* Folder Body */}
              <div className="bg-[#FAF6EE] p-8 sm:p-10 rounded-b-[4px] rounded-tr-[4px] border border-[#5C1A2B]/20 shadow-[0_8px_30px_rgba(92,26,43,0.06)] group-hover:shadow-[0_12px_36px_rgba(92,26,43,0.1)] group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#EDE2D0]/60 border border-[#5C1A2B]/20 flex items-center justify-center text-[#5C1A2B] group-hover:scale-105 transition-transform">
                    <FolderOpen size={26} />
                  </div>
                  <span className="font-mono text-xs text-[#8A6D56] bg-[#EDE2D0]/60 px-3 py-1 rounded border border-[#5C1A2B]/10">
                    {certificates.length} Documents
                  </span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl text-[#2B2320] mb-2">
                  Certifications Folder
                </h3>

                <p className="font-sans text-sm text-[#635852] leading-relaxed mb-6">
                  Click to open and inspect documented course completions and technical credentials.
                </p>

                <div className="pt-4 border-t border-[#5C1A2B]/10 flex items-center justify-between text-xs font-medium text-[#5C1A2B]">
                  <span className="tracking-wide uppercase font-sans">Open Document Collection</span>
                  <span className="w-8 h-8 rounded-full bg-[#5C1A2B] text-[#F7F1E8] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </button>
          </div>
        ) : (
          /* =========================================================================
              STATE 2: Open Folder View (Shows All Certificate Images)
             ========================================================================= */
          <div className="bg-[#FAF6EE] p-6 sm:p-10 rounded-[4px] border border-[#5C1A2B]/20 shadow-md space-y-8 animate-fadeIn">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#5C1A2B]/15">
              <button
                onClick={() => setIsFolderOpen(false)}
                className="editorial-btn-outline text-xs py-2 px-3.5 inline-flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Close Folder</span>
              </button>

              <div className="text-right">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C1A2B] block">
                  Certifications Folder
                </span>
                <span className="text-xs text-[#8A6D56]">
                  {certificates.length} documents archived · Click to view full size
                </span>
              </div>
            </div>

            {/* Document Collection Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {certificates.map((doc, idx) => {
                const hasError = imageErrors[doc.id];

                return (
                  <div
                    key={doc.id}
                    onClick={() => setActiveDoc(doc)}
                    className="group bg-[#FDFBF7] p-4 sm:p-5 rounded-[2px] border border-[#5C1A2B]/15 shadow-sm hover:border-[#5C1A2B] hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col"
                  >
                    {/* Document Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#5C1A2B]/10 text-xs">
                      <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[#5C1A2B] font-semibold">
                        Document 0{idx + 1}
                      </span>
                      <span className="font-mono text-[0.7rem] text-[#8A6D56] flex items-center gap-1 group-hover:text-[#5C1A2B]">
                        <ZoomIn size={12} />
                        <span>Enlarge</span>
                      </span>
                    </div>

                    {/* Document Image Container — Preserves Original Proportions */}
                    <div className="relative w-full aspect-[4/3] bg-[#FAF6EE] rounded-[1px] border border-[#5C1A2B]/10 overflow-hidden flex items-center justify-center p-2">
                      {!hasError ? (
                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          onError={() => handleImageError(doc.id)}
                        />
                      ) : (
                        /* Clean Fallback Document Sheet */
                        <div className="w-full h-full border border-dashed border-[#5C1A2B]/20 rounded flex flex-col items-center justify-center p-4 text-center space-y-2 bg-[#FAF6EE]">
                          <FileText size={28} className="text-[#5C1A2B]/60" />
                          <span className="font-serif-title text-base text-[#2B2320]">
                            {doc.title}
                          </span>
                          <span className="font-mono text-[0.62rem] text-[#8A6D56] bg-[#EDE2D0] px-2 py-0.5 rounded">
                            {doc.image}
                          </span>
                          <span className="text-[0.68rem] text-[#8A6D56] italic">
                            Click to preview sheet
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Caption */}
                    <div className="pt-3 mt-auto flex items-center justify-between text-xs text-[#635852]">
                      <span className="font-serif-title font-medium text-sm text-[#2B2320]">
                        {doc.title}
                      </span>
                      <span className="text-[#5C1A2B] font-medium text-[0.7rem] group-hover:underline">
                        View Certificate →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Folder Footer */}
            <div className="pt-4 border-t border-[#5C1A2B]/10 flex justify-end">
              <button
                onClick={() => setIsFolderOpen(false)}
                className="editorial-btn-outline text-xs py-2 px-4 cursor-pointer"
              >
                Close Folder
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STATE 3: Lightbox Modal (Full Certificate View, No Cropping)
           ========================================================================= */}
        {activeDoc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#2B2320]/85 backdrop-blur-md"
            onClick={() => setActiveDoc(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] bg-[#FAF6EE] p-4 sm:p-6 rounded-[2px] border border-[#5C1A2B]/30 shadow-2xl flex flex-col items-center justify-between overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-[#5C1A2B]/15">
                <div>
                  <h4 className="font-serif-title text-lg text-[#2B2320]">
                    {activeDoc.title}
                  </h4>
                  <span className="font-mono text-[0.65rem] text-[#8A6D56]">
                    Original Certificate Proportions Preserved
                  </span>
                </div>

                <button
                  onClick={() => setActiveDoc(null)}
                  className="p-1.5 text-[#2B2320] hover:text-[#5C1A2B] hover:bg-[#5C1A2B]/10 rounded transition-colors"
                  aria-label="Close certificate lightbox"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Full Proportional Image Container */}
              <div className="w-full flex-grow flex items-center justify-center overflow-auto p-2 min-h-[300px] max-h-[75vh]">
                {!imageErrors[activeDoc.id] ? (
                  <img
                    src={activeDoc.image}
                    alt={activeDoc.title}
                    className="max-w-full max-h-[72vh] object-contain rounded shadow-sm border border-[#5C1A2B]/10"
                  />
                ) : (
                  <div className="text-center p-8 space-y-3 bg-[#FDFBF7] border border-dashed border-[#5C1A2B]/20 rounded max-w-md">
                    <FileText size={40} className="mx-auto text-[#5C1A2B]" />
                    <h5 className="font-serif-title text-xl text-[#2B2320]">
                      {activeDoc.title}
                    </h5>
                    <p className="font-sans text-xs text-[#635852]">
                      Place certificate image in <code className="font-mono text-[#5C1A2B] bg-[#FAF6EE] px-1.5 py-0.5 rounded border border-[#5C1A2B]/10">{activeDoc.image}</code> to display here.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Bottom Bar */}
              <div className="w-full pt-3 mt-2 border-t border-[#5C1A2B]/15 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveDoc(null)}
                  className="editorial-btn-outline text-xs py-1.5 px-3 flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} />
                  <span>Back to Folder</span>
                </button>
                <span className="font-mono text-[0.68rem] text-[#8A6D56]">
                  Press Esc or click outside to close
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
