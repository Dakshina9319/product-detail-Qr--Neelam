import React from 'react';

export const VerificationBanner: React.FC = () => {
  return (
    <section className="w-full mb-8">
      <div className="bg-silk-cream border border-card-border rounded-xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
        {/* Background Decorative Watermark */}
        <div className="absolute right-0 top-0 w-48 h-48 opacity-[0.04] pointer-events-none transform translate-x-12 -translate-y-8">
          <img
            alt=""
            className="w-full h-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sJHGfxIuFmqDQaUjyAYAoiXrcmrz-vYhg7DUuMg2vzYlyS2UTDDEsP3K9GEcJdy9HhezyCkFZXsO7Yu5Vj7ahu1RdVmWygXlIvUd35ICHVR5x6sTecci5wKGSsSKyU1NjNeP_B92J16FnrjHv5THZ0PvLT4mYnO_rGiS0x-3lsNoYzF8Vkk5EHcVi_OlYbCPlejBCG8FRoxfzkwhJERpcAWFIBhTEOspsrZGmeOxiL-7PTrCqD85W42ThNVgetTxafI"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-blue/10 border border-indigo-blue/20 flex items-center justify-center shrink-0 text-indigo-blue">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-weave-green/10 text-weave-green border border-weave-green/30 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-weave-green"></span> 100% Authentic Handloom Verified
                </span>
                <span className="text-[11px] uppercase font-bold tracking-wider text-zari-madder">
                  GI Registered: GI-482 · Pollachi Taluk
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl text-night-slate font-bold tracking-tight">
                Genuine Negamam Cotton Handloom Saree{' '}
                <span className="font-sans font-medium text-lg text-night-slate/60">#NGM1024</span>
              </h1>
            </div>
          </div>

          {/* Straight to the Point Fair Compensation Summary */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-lg bg-canvas-base border border-card-border text-left">
              <span className="block text-[11px] uppercase font-bold text-night-slate/60 tracking-wider">
                Loom Date
              </span>
              <span className="block text-xs font-bold text-night-slate">14 Oct 2024</span>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-canvas-base border border-card-border text-left">
              <span className="block text-[11px] uppercase font-bold text-night-slate/60 tracking-wider">
                Master Weaver
              </span>
              <a
                className="block text-xs font-bold text-indigo-blue hover:underline"
                href="#artisan-section"
              >
                Murthy S. (Society #184)
              </a>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-weave-green/10 border border-weave-green/30 text-weave-green text-left">
              <span className="block text-[11px] uppercase font-bold tracking-wider">
                Ethical Direct Remittance
              </span>
              <span className="block text-xs font-bold">85% to Weaver Account</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
