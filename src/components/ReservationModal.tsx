import React, { useState } from 'react';
import { SareeCreation } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  saree: SareeCreation | null;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  saree,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pinCode: '642120',
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  // Defaults to the main featured piece if none selected
  const activeSaree: SareeCreation = saree || {
    id: 'main-ngm1024',
    title: 'Negamam Thread-Embossed Cotton Saree (#NGM1024)',
    tag: 'GI Certified Single-Weft Piece',
    loomInfo: 'Master Weaver Murthy S. (Society #184)',
    description: 'Deep aubergine body with copper rust border and embossed butta work.',
    price: 2450,
    priceFormatted: '₹ 2,450',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy2vQfnkdcOPTVY227k2_h3sUfpoEE_4Pbdc73cd9w3pCK_u8B98i0R0BYhptYfvOopfZnEhOEN0yBg0XN-C2f8J7byiG1QxH7x2LFLkv5fdljDkKd9IYjUsE09Q1y8CtisU2NgvvLR_e024ph9FijeV0DJE-yJiHnjIIAHb8W9BDGHf2mksjy6TofbVuApacngHTkpKBmGIacPNMUbZfvDEmXDnvqeqTnCsn_I-zfxKpK4tOMaEbhFA',
    alt: 'Authentic Negamam cotton saree',
  };

  const weaverWage = Math.round(activeSaree.price * 0.85);
  const yarnDye = Math.round(activeSaree.price * 0.10);
  const coopGI = activeSaree.price - weaverWage - yarnDye;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-silk-cream border border-card-border rounded-2xl max-w-lg w-full p-6 shadow-2xl relative my-8">
        <div className="flex items-center justify-between pb-3 border-b border-card-border mb-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-deep-teal tracking-wider block">
              Direct Weaver Fair Remittance
            </span>
            <h3 className="font-serif text-xl font-bold text-night-slate">
              {confirmed ? 'Reservation Confirmed' : 'Reserve Direct from Murthy S.'}
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1 rounded-md text-night-slate/60 hover:text-night-slate"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {confirmed ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-weave-green/10 border-2 border-weave-green text-weave-green flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-night-slate">
                Loom Slot Reserved for {formData.name || 'Patron'}
              </h4>
              <p className="text-xs text-night-slate/75 mt-1 max-w-sm mx-auto">
                Your reservation token has been registered in the Negamam Co-operative Ledger. Murthy S. has been credited directly with 85% fair wage.
              </p>
            </div>
            <div className="p-3 bg-canvas-base border border-card-border rounded-lg text-xs font-mono text-left max-w-sm mx-auto space-y-1">
              <div className="flex justify-between">
                <span className="text-night-slate/60">Token Hash:</span>
                <span className="font-bold text-indigo-blue">NEELAM-TX-9842</span>
              </div>
              <div className="flex justify-between">
                <span className="text-night-slate/60">Registered To:</span>
                <span className="font-bold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-night-slate/60">Direct Weaver Remittance:</span>
                <span className="font-bold text-weave-green">₹ {weaverWage} (85%)</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Saree Card Preview */}
            <div className="flex items-center gap-3 p-3 bg-canvas-base border border-card-border rounded-xl">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-card-border">
                <img
                  className="w-full h-full object-cover"
                  src={activeSaree.image}
                  alt={activeSaree.alt}
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-deep-teal uppercase">
                  {activeSaree.loomInfo}
                </span>
                <h4 className="font-serif text-sm font-bold text-night-slate truncate">
                  {activeSaree.title}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-serif text-base font-bold text-indigo-blue">
                    {activeSaree.priceFormatted}
                  </span>
                  <span className="text-[10px] font-bold text-weave-green bg-weave-green/10 px-2 py-0.5 rounded">
                    ₹ {weaverWage} to Weaver
                  </span>
                </div>
              </div>
            </div>

            {/* Fair Wage Breakdown */}
            <div className="p-3 bg-canvas-base border border-card-border rounded-lg text-xs space-y-1.5">
              <div className="flex justify-between text-night-slate/70">
                <span>Direct Artisan Wage (85%):</span>
                <span className="font-bold text-night-slate font-mono">₹ {weaverWage}</span>
              </div>
              <div className="flex justify-between text-night-slate/70">
                <span>Organic Yarn &amp; Azo-Free Dye (10%):</span>
                <span className="font-bold text-night-slate font-mono">₹ {yarnDye}</span>
              </div>
              <div className="flex justify-between text-night-slate/70">
                <span>Co-op Support &amp; GI Seal (5%):</span>
                <span className="font-bold text-night-slate font-mono">₹ {coopGI}</span>
              </div>
              <div className="pt-1.5 border-t border-card-border flex justify-between font-bold text-night-slate">
                <span>Total Transparent Valuation:</span>
                <span className="font-mono text-indigo-blue font-serif text-sm">
                  {activeSaree.priceFormatted}
                </span>
              </div>
            </div>

            {/* Patron Contact Form */}
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-night-slate/70 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Meenakshi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-canvas-base border border-card-border rounded-lg text-night-slate focus:outline-none focus:ring-1 focus:ring-indigo-blue"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-night-slate/70 mb-1">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98400 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-canvas-base border border-card-border rounded-lg text-night-slate focus:outline-none focus:ring-1 focus:ring-indigo-blue"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-night-slate/70 mb-1">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="642120"
                    value={formData.pinCode}
                    onChange={(e) => setFormData({ ...formData, pinCode: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-canvas-base border border-card-border rounded-lg text-night-slate focus:outline-none focus:ring-1 focus:ring-indigo-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-night-slate/70 mb-1">
                  Delivery Address (For Sealed QR Pack Dispatch)
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Door number, street name, city..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-canvas-base border border-card-border rounded-lg text-night-slate focus:outline-none focus:ring-1 focus:ring-indigo-blue resize-none"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-night-slate border border-card-border rounded-lg hover:bg-sand-light"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 px-4 rounded-lg bg-indigo-blue text-white text-xs font-bold uppercase tracking-wider hover:bg-indigo-dark transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Confirm &amp; Remit Fair Wage</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
