import React, { useState } from 'react';
import ColorSwitcher from './ColorSwitcher';
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Truck,
  Maximize2,
  Minimize2,
  Sun,
  Share2,
  Heart,
  ShoppingBag,
  CheckCircle2,
  Ruler,
  Layers
} from 'lucide-react';
import { ROOM_PRESETS } from '../data/products';

export default function ProductDetails({
  product,
  initialColorId,
  onBack
}) {
  // Find initial color or default to first
  const initialColor =
    product.availableColors.find((c) => c.id === initialColorId) ||
    product.availableColors[0];

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedRoom, setSelectedRoom] = useState(ROOM_PRESETS[0]);
  const [activeViewUrl, setActiveViewUrl] = useState(product.image);
  const [isZoomed, setIsZoomed] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);

  // Handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSaveConfiguration = () => {
    setSavedNotification(true);
    setTimeout(() => {
      setSavedNotification(false);
    }, 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} in ${selectedColor.name}`,
        text: `Check out the customized ${product.name} in ${selectedColor.name} on Furniture Studio.`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 3000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      
      {/* Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 hover:text-stone-900 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors shadow-sm"
            title="Share Configuration"
            aria-label="Share Configuration"
          >
            <Share2 className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleSaveConfiguration}
            className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-red-500 hover:bg-stone-50 transition-colors shadow-sm"
            title="Add to Wishlist"
            aria-label="Add to Wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {savedNotification && (
        <div className="fixed top-20 right-6 z-50 bg-stone-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-stone-700 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div>
            <span className="text-xs font-bold block">Customization Saved!</span>
            <span className="text-[11px] text-stone-300">
              {product.name} in {selectedColor.name} copied to clipboard.
            </span>
          </div>
        </div>
      )}

      {/* Main Visualizer & Customizer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Visualizer Stage & Room Simulator (col-span-7) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Visualizer Stage */}
          <div
            className={`relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xl transition-all duration-500 ${
              selectedRoom.bgClass
            } ${isZoomed ? 'aspect-[16/10]' : 'aspect-[4/3] sm:aspect-[16/11]'}`}
          >
            {/* Top Toolbar overlay */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-brand-300" />
                <span>Visualizer 3D Studio</span>
                <span className="text-stone-400 font-normal">|</span>
                <span className="text-[11px] text-brand-200">{selectedRoom.lighting}</span>
              </div>

              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="pointer-events-auto p-2 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-md backdrop-blur-sm transition-all hover:scale-105"
                title={isZoomed ? "Exit zoom" : "Zoom visualizer"}
                aria-label={isZoomed ? "Exit zoom" : "Zoom visualizer"}
              >
                {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Simulated Furniture Canvas */}
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
              
              {/* Product Visual with Multi-Layered Color Filter and Overlay */}
              <div className="relative w-full h-full max-h-[580px] rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={activeViewUrl}
                  alt={`${product.name} in ${selectedColor.name}`}
                  className="w-full h-full object-contain transition-all duration-700 ease-out transform"
                  style={{
                    filter: selectedColor.filter || 'none',
                    transform: isZoomed ? 'scale(1.15)' : 'scale(1.0)',
                  }}
                />

                {/* Dynamic Color Simulation Layer with Blend Mode */}
                <div
                  className="absolute inset-0 pointer-events-none transition-colors duration-700 opacity-40 mix-blend-multiply"
                  style={{
                    backgroundColor: selectedColor.hex,
                  }}
                />

                {/* Subtle Ambient Vignette & Depth Shadow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Live Status Watermark */}
              <div className="absolute bottom-4 left-4 z-20 bg-stone-900/85 backdrop-blur-md text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-lg border border-stone-700/60 flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner flex-shrink-0"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <span className="font-semibold text-white">{selectedColor.name}</span>
                <span className="text-[10px] text-stone-400 font-mono">({selectedColor.hex})</span>
              </div>
            </div>

          </div>

          {/* Room Environment / Lighting Presets */}
          <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Ambient Room Lighting Simulation:
                </span>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                {selectedRoom.name}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {ROOM_PRESETS.map((room) => {
                const isActive = selectedRoom.id === room.id;
                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`p-2.5 rounded-xl text-left border transition-all text-xs font-medium ${
                      isActive
                        ? 'border-stone-900 bg-stone-900 text-white shadow-sm ring-1 ring-stone-900'
                        : 'border-stone-200 bg-stone-50/70 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    <span className="block font-semibold truncate">{room.name}</span>
                    <span className={`text-[10px] truncate block mt-0.5 ${isActive ? 'text-stone-300' : 'text-stone-400'}`}>
                      {room.lighting}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Alternate View Angles (if available) */}
          {product.views && product.views.length > 1 && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                Angles:
              </span>
              <div className="flex items-center gap-2">
                {product.views.map((view) => {
                  const isActive = activeViewUrl === view.url;
                  return (
                    <button
                      key={view.id}
                      onClick={() => setActiveViewUrl(view.url)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-stone-900 text-white shadow-sm font-semibold'
                          : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {view.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Right Column: Customization Specs & Actions (col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Header & Price Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-sm space-y-4">
            
            {/* Category & Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                {product.category}
              </span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {product.leadTime}
              </span>
            </div>

            {/* Product Title */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-stone-500 text-sm mt-1.5 leading-relaxed font-normal">
                {product.tagline}
              </p>
            </div>

            {/* Price block */}
            <div className="flex items-baseline gap-3 pt-2 border-t border-stone-100">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-xs text-stone-500">
                USD &middot; Free white-glove inside delivery included
              </span>
            </div>

            {/* Color Switcher Component */}
            <div className="pt-4 border-t border-stone-100">
              <ColorSwitcher
                availableColors={product.availableColors}
                selectedColor={selectedColor}
                onColorChange={handleColorChange}
                material={product.material}
              />
            </div>

            {/* Primary Action Button */}
            <div className="pt-4 space-y-3">
              <button
                onClick={handleSaveConfiguration}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-stone-900 hover:bg-brand-700 text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 active:scale-98"
              >
                <ShoppingBag className="w-4 h-4 text-brand-300" />
                <span>Order Custom Build &mdash; ${product.price.toLocaleString()}</span>
              </button>

              <button
                onClick={handleShare}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Custom Palette</span>
              </button>
            </div>

          </div>

          {/* Specifications Accordion / Cards */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm space-y-5">
            <h2 className="font-serif text-lg font-bold text-stone-900 pb-3 border-b border-stone-100">
              Craftsmanship & Specifications
            </h2>

            {/* Description */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-1">
                Description
              </span>
              <p className="text-stone-700 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Material */}
            <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
              <div className="p-2 rounded-xl bg-stone-100 text-stone-700">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                  Material & Joinery
                </span>
                <span className="text-sm font-semibold text-stone-800">
                  {product.material}
                </span>
              </div>
            </div>

            {/* Dimensions */}
            <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
              <div className="p-2 rounded-xl bg-stone-100 text-stone-700">
                <Ruler className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">
                  Dimensions & Weight
                </span>
                <span className="text-sm font-semibold text-stone-800 block">
                  {product.dimensions}
                </span>
                {product.weight && (
                  <span className="text-xs text-stone-500">Weight: {product.weight}</span>
                )}
              </div>
            </div>

            {/* Sustainability / Warranty */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stone-100">
              <div className="flex items-center gap-2 text-stone-600 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>10-Year Framework Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600 text-xs">
                <Truck className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>30-Day In-Home Trial</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
