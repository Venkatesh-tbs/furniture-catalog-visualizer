import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Sparkles, Sliders, Eye, CheckCircle2, Compass } from 'lucide-react';

export default function Home({
  products,
  onSelectProduct,
  onNavigateCatalog
}) {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <Hero
        onExplore={onNavigateCatalog}
        onCustomize={(id) => onSelectProduct(id || 'nordic-haven-sofa')}
      />

      {/* Featured Collection Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Highlights</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Curated Iconic Pieces
            </h2>
            <p className="text-stone-500 text-sm mt-1 max-w-lg">
              Hand-selected for proportion, tactile joinery, and endless custom color possibilities.
            </p>
          </div>

          <button
            onClick={onNavigateCatalog}
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-brand-700 group transition-colors"
          >
            <span>View All {products.length} Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* How the Visualizer Works (Interactive Educational Showcase) */}
      <section className="bg-stone-900 text-stone-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-400 block mb-2">
              Bespoke Customizer Engine
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Design in 3 effortless steps
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-3">
              No guesswork. Preview true-to-life tones, upholstery sheens, and room lighting directly from your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-stone-800/60 rounded-3xl p-8 border border-stone-700/60 relative overflow-hidden group hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center font-serif font-bold text-lg mb-6">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Choose Base Silhouette
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Explore our catalog of sofas, lounge chairs, solid oak tables, and platform beds tailored to human ergonomic dimensions.
              </p>
              <div className="text-xs text-brand-300 font-medium flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>Over 10 handcrafted models</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-stone-800/60 rounded-3xl p-8 border border-stone-700/60 relative overflow-hidden group hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center font-serif font-bold text-lg mb-6">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Switch Custom Finishes
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Switch instantaneously between Cognac Brown, Obsidian Black, Nordic Cream, Slate Grey, and vibrant bespoke jewel tones.
              </p>
              <div className="text-xs text-brand-300 font-medium flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                <span>Instant color simulation</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-stone-800/60 rounded-3xl p-8 border border-stone-700/60 relative overflow-hidden group hover:border-brand-500/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 flex items-center justify-center font-serif font-bold text-lg mb-6">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Simulate Room Light
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                Test your customized piece in Scandinavian Sunlit daylight, warm amber evening living rooms, or dramatic urban loft galleries.
              </p>
              <div className="text-xs text-brand-300 font-medium flex items-center gap-1.5">
                <Eye className="w-4 h-4" />
                <span>4 Ambient lighting modes</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onSelectProduct('nordic-haven-sofa')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-400 text-white font-semibold text-sm uppercase tracking-wider shadow-xl transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Live Customizer</span>
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy & Craftsmanship Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFE6] rounded-3xl p-8 sm:p-14 border border-stone-300/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-800">
                Studio Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Designed to outlive fleeting trends, crafted to age with grace.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We believe exceptional furniture is an investment in your daily tranquility.
                By uniting sustainable forestry with innovative digital visualization tools,
                we empower you to choose pieces you will cherish for generations.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-stone-800 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>FSC-certified kiln-dried North American hardwoods</span>
                </div>
                <div className="flex items-center gap-3 text-stone-800 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Non-toxic water-based organic sealants</span>
                </div>
                <div className="flex items-center gap-3 text-stone-800 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparent artisan pricing with zero middleman markup</span>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                alt="Furniture Workshop Detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/15" />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Trusted by architects and modern homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex text-amber-500">
              {'★'.repeat(5)}
            </div>
            <p className="text-stone-700 text-sm italic">
              "Being able to switch the sofa colors live on our tablet convinced us immediately. The Forest Emerald linen arrived exactly as visualized."
            </p>
            <div className="pt-2 border-t border-stone-100">
              <span className="text-xs font-bold text-stone-900 block">Elena Rostova</span>
              <span className="text-[11px] text-stone-400">Architect & Interior Designer, Brooklyn</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex text-amber-500">
              {'★'.repeat(5)}
            </div>
            <p className="text-stone-700 text-sm italic">
              "The Kinfolk oak dining table is a sculpture. The wood grain under natural daylight is breathtaking, and delivery was spotless."
            </p>
            <div className="pt-2 border-t border-stone-100">
              <span className="text-xs font-bold text-stone-900 block">Marcus Vance</span>
              <span className="text-[11px] text-stone-400">Creative Director, San Francisco</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm space-y-3">
            <div className="flex text-amber-500">
              {'★'.repeat(5)}
            </div>
            <p className="text-stone-700 text-sm italic">
              "The Solstice lounge chair in Terracotta gave our minimalist living room the exact warmth and grounding presence it needed."
            </p>
            <div className="pt-2 border-t border-stone-100">
              <span className="text-xs font-bold text-stone-900 block">Aria Chen</span>
              <span className="text-[11px] text-stone-400">Product Designer, Austin</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
