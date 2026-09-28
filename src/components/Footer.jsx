import React from 'react';
import { Armchair, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO, CATEGORIES } from '../data/products';

const CURRENT_YEAR = 2026;

export default function Footer({ onNavigate, onSelectCategory }) {

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Concierge Bar */}
        <div className="bg-stone-800/70 rounded-3xl p-8 sm:p-10 mb-14 border border-stone-700/60 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-300">
              <Sparkles className="w-3.5 h-3.5" />
              Interior Consultation & Visualizer Service
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Need assistance selecting finishes for your space?
            </h3>
            <p className="text-sm text-stone-400 max-w-xl">
              Connect directly with our residential studio consultants for material samples, custom spatial layouts, and 3D architectural mockups.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Book Complimentary Consultation
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-stone-700 hover:bg-stone-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Browse Catalog
            </button>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white text-stone-900 flex items-center justify-center">
                <Armchair className="w-5 h-5 text-stone-900" />
              </div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                {BRAND_INFO.name}
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              {BRAND_INFO.description}
            </p>

            <div className="space-y-2 pt-2 text-xs text-stone-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Full Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      onNavigate('catalog');
                    }}
                    className="hover:text-white transition-colors capitalize"
                  >
                    {cat}s
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Craft & Integrity */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Craft & Service
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>Sustainably Harvested FSC Timber</li>
              <li>Hand-Stitched Italian Leather</li>
              <li>Real-Time Swatch Simulator</li>
              <li>10-Year Framework Warranty</li>
              <li>White-Glove Inside Delivery</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & DevOps Info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {CURRENT_YEAR} {BRAND_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-stone-800 text-stone-400 font-mono text-[11px]">
              DevOps-Ready &bull; React &bull; Vite &bull; Tailwind
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
