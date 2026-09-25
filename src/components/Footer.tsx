import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-silk-cream border-t border-card-border py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Left Brand & Seal */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-canvas-base border border-card-border flex items-center justify-center p-1">
                <img
                  alt="Neelam Kolam"
                  className="w-full h-full object-contain mix-blend-multiply"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvazyXK1GfH4QpPwqhtOLDL7IiPLsYDSYISY75b1jXrZ9SMrdySnTLQPvFpbRJh8JTvwayY9CbWbBaFQTeqYbMgmXr37LO1EQ3g_dizFqlrEIk9VAogfE2tLbDsOTqERCXIEigZMdU53FrQGpeAzFH3fcMh8_DxBttYWG--yZIOrr7mzpyxCXqliP11SKX-H1gf8-nBONkS8PMNiGFg9gsClK_retkoBgh5HuOSaZdYNXsnVVY1l4Ay-vvY9-VbM6X0IA"
                />
              </div>
              <img
                alt="neelam"
                className="h-5 w-auto object-contain mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCesjV4I3NNcpCRUlo89CoWHZNv85WbHxjG1rUJORvl27zSvXEdl4Ggco9mdaLemYFg1PxYiiHw7O4d1HCn_-Dv2x_Mv9VaFJHXfhbVmaeCxrMQbSpArAGyYbhm8necfE8gsQspo99IoHA6Wk6CdNfLFfTvH9cWk2_kt_gOFhIBd2luaNJBAeGSnVVD8K4knSM7AQR-wxleQWwR7QmEMl9lLew5mZs4hA_QQ_AGFsufm71cyftDWW5QfSBHQeLRgarwGmQ"
              />
            </div>
            <p className="text-xs text-night-slate/75 leading-relaxed max-w-sm">
              Neelam is an authentic handloom provenance platform. We connect conscious patrons directly to Indian master pit loom weavers, removing middlemen and guaranteeing GI origin integrity.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-night-slate">
              <span className="material-symbols-outlined text-sm text-zari-madder">verified</span>
              GI Registry Act 1999 Certificate GI-482
            </div>
          </div>

          {/* Middle Ethical Wage Pledge */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-deep-teal">
              Ethical Remittance Pledge
            </h4>
            <p className="text-xs text-night-slate/75 leading-relaxed">
              Every transaction is verified on the cooperative society ledger. 85% of the saree valuation is paid directly to the artisan's account, ensuring generational livelihoods and zero exploitation.
            </p>
          </div>

          {/* Right Co-Op Origin Registry */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-deep-teal">
              Registered Co-Op Cluster
            </h4>
            <address className="not-italic text-xs text-night-slate/70 leading-relaxed font-mono">
              Negamam Weavers Co-operative Society<br />
              Society Reg. #K-1428<br />
              Pollachi Taluk, Coimbatore 642120<br />
              Tamil Nadu, India
            </address>
          </div>
        </div>

        {/* Bottom Credits & Verification Badges */}
        <div className="pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-night-slate/60">
          <p>© neelam · Handloom Provenance &amp; Artisan Origin Archive. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-deep-teal font-semibold">100% Organic Negamam Cotton</span>
            <span>•</span>
            <span className="text-deep-teal font-semibold">Certified Azo-Free Dye</span>
            <span>•</span>
            <span className="text-deep-teal font-semibold">Master Pit Loom Registered</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
