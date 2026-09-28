import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function Hero({ onExplore, onCustomize }) {
  // Mini interactive color switcher preview inside the hero!
  const heroColors = [
    { id: 'forest', name: 'Forest Emerald', hex: '#2D4B3E', filter: 'hue-rotate(0deg) saturate(1.2)' },
    { id: 'cognac', name: 'Cognac Brown', hex: '#8C532B', filter: 'sepia(0.8) hue-rotate(-60deg) saturate(1.7)' },
    { id: 'obsidian', name: 'Obsidian Black', hex: '#1F2421', filter: 'grayscale(0.9) brightness(0.6)' },
    { id: 'cream', name: 'Nordic Cream', hex: '#EBE3D5', filter: 'sepia(0.2) brightness(1.2) saturate(0.8)' },
  ];

  const [activeHeroColor, setActiveHeroColor] = useState(heroColors[0]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF9F5] via-[#F6F2EB] to-[#ECE5D8] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/60">
      
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-brand-200/30 via-stone-200/20 to-brand-300/20 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Curated Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/5 border border-stone-300/80 text-xs font-semibold uppercase tracking-wider text-stone-700 shadow-sm backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
              <span>Autumn / Winter 2026 Collection</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
              Timeless design,{' '}
              <span className="italic font-normal text-brand-700">customized</span> for your sanctuary.
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience artisanal furniture shaped by Scandinavian simplicity and Mid-Century proportions.
              Experiment with bespoke palettes, rich timber grains, and luxury upholstery in real-time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExplore}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-stone-900 text-stone-50 font-semibold text-sm hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onCustomize('nordic-haven-sofa')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-stone-800 border border-stone-300/80 font-semibold text-sm hover:bg-stone-50 hover:border-stone-400 transition-all duration-300 shadow-sm hover:shadow"
              >
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Customize Furniture</span>
              </button>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/70 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="font-serif text-xl sm:text-2xl font-bold text-stone-900">100%</div>
                <div className="text-xs text-stone-500 font-medium">Sustainably Harvested</div>
              </div>
              <div className="text-left border-l border-stone-200/80 pl-4">
                <div className="font-serif text-xl sm:text-2xl font-bold text-stone-900">Live</div>
                <div className="text-xs text-stone-500 font-medium">Color Visualizer</div>
              </div>
              <div className="text-left border-l border-stone-200/80 pl-4">
                <div className="font-serif text-xl sm:text-2xl font-bold text-stone-900">10-Yr</div>
                <div className="text-xs text-stone-500 font-medium">Structural Warranty</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visualizer Showcase with Live Swatches */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Studio Frame Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md p-3 sm:p-5 shadow-2xl border border-white/60">
                
                {/* Visualizer Image Container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 flex items-center justify-center group">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                    alt="Nordic Haven Sofa"
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    style={{
                      filter: activeHeroColor.filter,
                    }}
                  />

                  {/* Dynamic Color Overlay simulation */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-multiply transition-colors duration-700 opacity-40"
                    style={{ backgroundColor: activeHeroColor.hex }}
                  />

                  {/* Badge floating */}
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeHeroColor.hex }} />
                    <span>Visualizer Active</span>
                  </div>

                  {/* Active swatch overlay tag */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-stone-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-stone-200/60 flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full shadow-inner border border-black/10"
                      style={{ backgroundColor: activeHeroColor.hex }}
                    />
                    <span>{activeHeroColor.name}</span>
                  </div>

                  {/* Direct Launch Button */}
                  <button
                    onClick={() => onCustomize('nordic-haven-sofa')}
                    className="absolute bottom-4 right-4 bg-stone-900 hover:bg-brand-600 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-1.5"
                  >
                    <span>Open Full 3D Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Hero Swatch Bar */}
                <div className="mt-4 pt-3 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-stone-800 block">
                      Live Color Switcher
                    </span>
                    <span className="text-[11px] text-stone-500">
                      Tap a swatch to change sofa finish
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-stone-100/90 p-1.5 rounded-full border border-stone-200">
                    {heroColors.map((color) => {
                      const isSelected = activeHeroColor.id === color.id;
                      return (
                        <button
                          key={color.id}
                          onClick={() => setActiveHeroColor(color)}
                          className={`relative w-8 h-8 rounded-full transition-transform duration-200 flex items-center justify-center ${
                            isSelected
                              ? 'scale-110 ring-2 ring-stone-900 ring-offset-2'
                              : 'hover:scale-105 opacity-85'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                          aria-label={`Select ${color.name}`}
                        >
                          {isSelected && (
                            <Check className={`w-3.5 h-3.5 ${color.id === 'cream' ? 'text-stone-900' : 'text-white'}`} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Floating review card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-stone-200/80 items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center font-serif font-bold text-sm">
                  FS
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    {'★'.repeat(5)}
                    <span className="text-stone-700 font-semibold ml-1">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    "The color customizer showed the exact tone for our loft."
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
