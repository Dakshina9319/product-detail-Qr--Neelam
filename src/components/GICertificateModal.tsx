import React from 'react';

interface GICertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GICertificateModal: React.FC<GICertificateModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#FAF5EC] border-4 border-[#364C7B] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8 text-night-slate">
        {/* Certificate Border Header */}
        <div className="flex items-center justify-between border-b-2 border-[#364C7B]/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-silk-cream border border-card-border flex items-center justify-center p-1.5 shadow-xs">
              <img
                alt="Neelam Kolam Weave Motif"
                className="w-full h-full object-contain mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNCPdLA-E3lrOgEPASBCZefo6FhFpSTmTaBnwbF3lgoYEXSnUKvam9hzKpG4i85hiubegjQyy3PrqbVH8VzzlVCzTjYqngEdxNfVyA92-0Gj2w87zWHM7O6hSO76DOuAF0HWDMD8kw8hAKCq5YkDC3DrNjyHv4QwRerqbXpkJjFt_gSCFKpo2cIpO8a2kyPxOp-mLDqAsILhTwaqxByAnloJc0gYeq0wTENQLbUClgemoEyz1A4D6kIpwZD8YwRi-UhWY"
              />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#244C5A] block">
                Geographical Indications Registry of India
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1A2942]">
                Certificate of Handloom Provenance
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-night-slate/60 hover:text-night-slate hover:bg-black/5 cursor-pointer"
            aria-label="Close Certificate"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Certificate Body */}
        <div className="space-y-4 text-xs font-sans">
          <div className="p-3 rounded-lg bg-[#F2ECE0] border border-card-border flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold text-night-slate/60 block">
                Official GI Entry Code
              </span>
              <span className="font-mono font-bold text-sm text-[#781E2B]">
                GI-482 · Pollachi Taluk Handlooms
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-night-slate/60 block">
                Archive Specimen ID
              </span>
              <span className="font-mono font-bold text-sm text-[#364C7B]">
                #NGM1024 / BATCH-24-10
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/70 p-4 rounded-xl border border-card-border">
            <div>
              <span className="text-[10px] font-bold text-night-slate/60 uppercase">
                Master Artisan / Weaver
              </span>
              <p className="font-bold text-night-slate text-sm">Murthy S.</p>
              <span className="text-[11px] text-night-slate/70">Society Register #184 · Negamam</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-night-slate/60 uppercase">
                Loom Architecture
              </span>
              <p className="font-bold text-night-slate text-sm">
                Fly-Shuttle Underground Pit Loom
              </p>
              <span className="text-[11px] text-night-slate/70">Foot Treadle Pure Tension</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-night-slate/60 uppercase">
                Yarn &amp; Fiber Count
              </span>
              <p className="font-bold text-night-slate text-sm">
                80s Combed × 80s Cotton
              </p>
              <span className="text-[11px] text-night-slate/70">100% GOTS Farm Cotton · Azo-Free Dye</span>
            </div>
            <div>
              <span className="text-[10px] font-bold text-night-slate/60 uppercase">
                Audit &amp; Weighment
              </span>
              <p className="font-bold text-night-slate text-sm">
                540 Grams · 80 Ends Per Inch
              </p>
              <span className="text-[11px] text-night-slate/70">Purified Eucalyptus Steam Sanitized</span>
            </div>
          </div>

          <div className="p-3 bg-[#15803D]/10 border border-[#15803D]/30 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-weave-green text-lg">
                verified
              </span>
              <span className="font-bold text-weave-green text-xs">
                Ethical Wage Escrow Guarantee
              </span>
            </div>
            <span className="font-bold text-night-slate text-xs">
              85% Remitted Directly to Murthy S.
            </span>
          </div>

          {/* Seals and Signatures */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-card-border">
            <div className="text-center sm:text-left">
              <div className="h-10 flex items-center">
                <span className="font-serif italic text-base text-night-slate/80 font-semibold">
                  K. Shanmugam
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-night-slate/60 block">
                Co-op Society Secretary · Negamam
              </span>
            </div>

            <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#D97706] p-1 flex items-center justify-center text-center">
              <span className="text-[8px] font-bold uppercase text-[#D97706] leading-tight">
                GI-482<br />SEALED<br />AUDIT
              </span>
            </div>

            <div className="text-center sm:text-right">
              <div className="h-10 flex items-center justify-center sm:justify-end">
                <span className="font-serif italic text-base text-night-slate/80 font-semibold">
                  M. Murthy
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-night-slate/60 block">
                Master Weaver Hand-Mark
              </span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-card-border flex items-center justify-between gap-3">
          <span className="text-[10px] text-night-slate/60">
            Cryptographically sealed to item #NGM1024
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg border border-card-border bg-white text-night-slate text-xs font-bold uppercase tracking-wider hover:bg-sand-light cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
