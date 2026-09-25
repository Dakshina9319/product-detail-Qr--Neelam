import React from 'react';

export const ArtisanSpotlight: React.FC = () => {
  return (
    <section className="w-full mb-12" id="artisan-section">
      <div className="bg-silk-cream border border-card-border rounded-xl p-5 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Artisan Photo Card */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-canvas-base border border-card-border">
              <img
                className="w-full h-full object-cover"
                alt="Dignified documentary portrait of Master Weaver Murthy S."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCePNClboHXToB_eWuyH1AEuI7rcDUaLnQRncsvkzTRVqS-sdVNW8Lnvx1pHDQHlHmencDsOzXmgz1rUTc0VZ8jnY_NZ7cUtJqLbD6odCy-_MaiKKdO85Xh9VzAhdqlvW1rZRQSmrNd2q25VXCaTEoT-4McDDGZBra5gq0nqdNcZZe8vh-LzlWzUEDEE6eH7HtQ5e8jhJXHgGr13B2rUV3LyZ1lzM5qyRBrtC41zTW8Y2AZ3dh1wRNT5Sc7-yf8_g7FL3K3WN9aQy1WH00"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-canvas-base/95 backdrop-blur-md px-3.5 py-2.5 rounded-lg border border-card-border flex items-center justify-between shadow-2xs">
                <div>
                  <span className="font-serif text-sm font-bold text-night-slate block">Murthy S.</span>
                  <span className="text-[11px] font-medium text-deep-teal">3rd Generation Master Weaver</span>
                </div>
                <div className="flex items-center gap-1 bg-zari-ochre/15 px-2 py-0.5 rounded text-zari-ochre text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span>4.9</span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-night-slate/70 font-semibold">
              <span className="material-symbols-outlined text-sm text-weave-green">check_circle</span>
              Negamam Society Member Since 2006 · 18 Yrs Experience
            </div>
          </div>

          {/* Artisan Bio & Metrics */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="mb-4">
              <span className="text-[11px] uppercase font-bold tracking-widest text-deep-teal block mb-1">
                Master Artisan Profile · Society Ledger #184
              </span>
              <h2 className="font-serif text-3xl font-bold text-night-slate">
                Murthy S.
              </h2>
              <p className="text-xs font-medium text-night-slate/70 mt-0.5">
                Negamam Weavers Co-operative Society · Coimbatore District, Tamil Nadu
              </p>
            </div>

            {/* Structured Dossier Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-canvas-base border border-card-border rounded-lg p-4 mb-4 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-night-slate/50 block">Artisan Classification</span>
                <span className="font-bold text-night-slate">Traditional Handloom Negamam Cotton Weaver</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-night-slate/50 block">Seniority &amp; Experience</span>
                <span className="font-bold text-night-slate">18 Years of Pit Loom Mastery</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-night-slate/50 block">Signature Specialty</span>
                <span className="font-bold text-night-slate">Thread-Embossed Butti &amp; Zari Borders</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-night-slate/50 block">Loom Architecture</span>
                <span className="font-bold text-night-slate">Underground Wooden Pit Loom (Fly Shuttle)</span>
              </div>
            </div>

            {/* Bio Narrative */}
            <div className="mb-5">
              <h4 className="text-[11px] uppercase font-bold text-deep-teal tracking-wider mb-1.5">Artisan Heritage Note</h4>
              <p className="text-sm text-night-slate/85 leading-relaxed font-sans">
                Murthy S. is a skilled Master Weaver from Negamam Society, Coimbatore, Tamil Nadu, with 18 years of experience in traditional handloom weaving. He specializes in Negamam cotton sarees, known for their lightweight cotton fabric, traditional craftsmanship, and distinctive thread-embossed designs. His work includes green, wine, and peach thread-embossed sarees, reflecting the rich weaving heritage of the Negamam handloom community.
              </p>
            </div>

            {/* 3 Impact Counters */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-canvas-base border border-card-border text-center">
                <span className="font-serif text-2xl font-bold text-indigo-blue block">85%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-night-slate/60">Direct Fair Wage</span>
              </div>
              <div className="p-3 rounded-lg bg-canvas-base border border-card-border text-center">
                <span className="font-serif text-2xl font-bold text-indigo-blue block">320+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-night-slate/60">Heirloom Sarees</span>
              </div>
              <div className="p-3 rounded-lg bg-canvas-base border border-card-border text-center">
                <span className="font-serif text-2xl font-bold text-indigo-blue block">0%</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-night-slate/60">Power Loom Blend</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
