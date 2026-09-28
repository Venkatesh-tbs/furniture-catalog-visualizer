import React from 'react';
import { Sparkles, Award, Trees, ArrowRight } from 'lucide-react';

export default function About({ onNavigateCatalog }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Heritage & Craft</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tracking-tight">
          Where Artisanal Woodcraft Meets Real-Time Visualization
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
          Founded on the conviction that furniture should evoke sanctuary, Furniture Studio unites architectural discipline with intuitive digital customizer technology.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] max-h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80"
          alt="Modern Architecture and Furniture Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30" />
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <Trees className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Responsible Forestry
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Every cubic foot of White Oak, American Ash, and Black Walnut is certified by the Forest Stewardship Council (FSC). For every harvested piece, two saplings are planted.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Master Artisan Joinery
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Tired of flat-pack disposable pieces? We employ traditional mortise-and-tenon joints, tongue-and-groove ribbing, and non-toxic ceramic curing oils built to withstand generations.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Visualizer Precision
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Our visualizer engine replicates material texture, ambient light reflectance, and true dye absorption so that what you see on screen matches what lands on your hardwood floor.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-stone-900 rounded-3xl p-10 sm:p-14 text-white text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold">
          Ready to discover your next centerpiece?
        </h2>
        <p className="text-stone-400 max-w-xl mx-auto text-sm sm:text-base">
          Browse our collections, preview colors, and discover pieces tailored to your architectural style.
        </p>
        <button
          onClick={onNavigateCatalog}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
        >
          <span>Explore Catalog & Customizer</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
