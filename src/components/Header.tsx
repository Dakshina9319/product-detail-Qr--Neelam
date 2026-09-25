import React, { useState } from 'react';

interface HeaderProps {
  onOpenCertificate: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCertificate,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#FEF9EE]/90 backdrop-blur-md border-b border-card-border/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          {/* Neelam Brand Lockup (Kolam Motif + neelam wordmark) */}
          <a className="flex items-center gap-3.5 group" href="#">
            <div className="w-10 h-10 rounded-lg bg-silk-cream border border-card-border flex items-center justify-center p-1.5 shadow-xs group-hover:border-indigo-blue transition-colors">
              <img
                alt="Neelam Kolam Weave Motif"
                className="w-full h-full object-contain mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNCPdLA-E3lrOgEPASBCZefo6FhFpSTmTaBnwbF3lgoYEXSnUKvam9hzKpG4i85hiubegjQyy3PrqbVH8VzzlVCzTjYqngEdxNfVyA92-0Gj2w87zWHM7O6hSO76DOuAF0HWDMD8kw8hAKCq5YkDC3DrNjyHv4QwRerqbXpkJjFt_gSCFKpo2cIpO8a2kyPxOp-mLDqAsILhTwaqxByAnloJc0gYeq0wTENQLbUClgemoEyz1A4D6kIpwZD8YwRi-UhWY"
              />
            </div>
            <div className="flex flex-col">
              <div className="h-6 flex items-center">
                <img
                  alt="neelam"
                  className="h-6 w-auto object-contain mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU61lBjHO6aBm2zvqjb8FK6IOxbVpanHym8X_q6LLQmbKjXicLfZw0j3VxwFelX20Lse7Vg9QEW4EBtbGQZzaEhFFUwxrq7ru9nanlwuRPNQ63hVI7u0loFabgvISoMyGQP0bQ_NLM44pmdB49O7iuPfWTyZG-Nk2WbFp9ANUCYiEojV23OxDE_66dw_VE94y18U_aYXW0F39qMk1mnO5RWkClBlfRJzFzwJUDR63ZFdmvLJjF82g6YYoQZpnthJhDxOs"
                />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-deep-teal mt-0.5">
                Authentic Handloom Provenance
              </span>
            </div>
          </a>

          {/* Middle Verified Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-silk-cream border border-card-border">
            <span className="w-2 h-2 rounded-full bg-weave-green animate-pulse"></span>
            <span className="text-xs font-semibold text-night-slate tracking-tight">
              Verified GI Origin · Society #184 Negamam
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <a
              className="px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider text-indigo-blue bg-indigo-blue/10"
              href="#product-overview"
            >
              Provenance
            </a>
            <a
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider text-night-slate/75 hover:text-night-slate hover:bg-silk-cream transition-colors"
              href="#provenance-map"
            >
              Loom Map
            </a>
            <a
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider text-night-slate/75 hover:text-night-slate hover:bg-silk-cream transition-colors"
              href="#artisan-section"
            >
              Master Artisan
            </a>
            <a
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider text-night-slate/75 hover:text-night-slate hover:bg-silk-cream transition-colors"
              href="#other-creations"
            >
              Artisan Catalog
            </a>
            <a
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider text-night-slate/75 hover:text-night-slate hover:bg-silk-cream transition-colors"
              href="#loom-video-section"
            >
              Loom Video
            </a>
          </nav>

          {/* Right Quick Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenCertificate}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-silk-cream border border-card-border text-night-slate text-xs font-bold tracking-wide uppercase hover:bg-sand-light transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px] text-zari-madder">
                verified
              </span>
              GI Ledger #GI-482
            </button>
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-indigo-blue text-white text-xs font-bold tracking-wider uppercase hover:bg-indigo-dark transition-all shadow-xs cursor-pointer"
              type="button"
            >
              <span>Direct from Weaver</span>
              <span className="material-symbols-outlined text-[15px]">
                arrow_forward
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-silk-cream border border-card-border text-night-slate hover:bg-sand-light transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-card-border/60 bg-silk-cream/95 backdrop-blur-md px-2 space-y-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-canvas-base border border-card-border mb-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-weave-green animate-pulse"></span>
              <span className="font-semibold text-night-slate">
                Verified GI Origin · Society #184 Negamam
              </span>
            </div>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-bold uppercase tracking-wider text-indigo-blue bg-indigo-blue/10"
              href="#product-overview"
            >
              Provenance
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider text-night-slate hover:bg-sand-light"
              href="#provenance-map"
            >
              Loom Map
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider text-night-slate hover:bg-sand-light"
              href="#artisan-section"
            >
              Master Artisan
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider text-night-slate hover:bg-sand-light"
              href="#other-creations"
            >
              Artisan Catalog
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-xs font-semibold uppercase tracking-wider text-night-slate hover:bg-sand-light"
              href="#loom-video-section"
            >
              Loom Video
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertificate();
              }}
              className="w-full text-left flex items-center gap-1.5 px-3 py-2 rounded bg-canvas-base border border-card-border text-night-slate text-xs font-bold tracking-wide uppercase hover:bg-sand-light"
            >
              <span className="material-symbols-outlined text-[16px] text-zari-madder">
                verified
              </span>
              GI Ledger #GI-482 (View Certificate)
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
