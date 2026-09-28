import React, { useState } from 'react';
import { Sparkles, ArrowRight, Star, ImageOff } from 'lucide-react';

export default function ProductCard({ product, onSelectProduct, onSelectColor }) {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [imageError, setImageError] = useState(false);

  const handleCardClick = () => {
    onSelectProduct(product.id, selectedColor?.id);
  };

  const handleColorDotClick = (e, color) => {
    e.stopPropagation();
    setSelectedColor(color);
    if (onSelectColor) {
      onSelectColor(product.id, color.id);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white rounded-3xl p-3.5 sm:p-4 border border-stone-200/80 hover:border-stone-400/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center">
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-stone-900/80 backdrop-blur-md text-stone-100">
            {product.category}
          </span>
        </div>

        {/* Featured Tag if applicable */}
        {product.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-500/90 backdrop-blur-md text-white shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              Featured
            </span>
          </div>
        )}

        {/* Image Display or Error Fallback */}
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-400 p-4 text-center">
            <ImageOff className="w-8 h-8 mb-2 stroke-1" />
            <span className="text-xs font-medium">{product.name}</span>
            <span className="text-[10px] text-stone-400 mt-1">Image preview unavailable</span>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
              style={{
                filter: selectedColor?.filter || 'none',
              }}
            />
            {/* Color tint blend overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-35 transition-colors duration-500"
              style={{ backgroundColor: selectedColor?.hex }}
            />
          </div>
        )}

        {/* Quick color indicator pill on bottom image corner */}
        <div className="absolute bottom-2.5 left-2.5 z-10 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-medium text-stone-700 shadow-sm border border-stone-200/50 flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full border border-black/10"
            style={{ backgroundColor: selectedColor?.hex }}
          />
          <span className="truncate max-w-[100px]">{selectedColor?.name}</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-semibold text-stone-800">{product.rating}</span>
            <span className="text-xs text-stone-400">({product.reviewsCount})</span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-brand-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short tagline/material */}
          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline || product.material}
          </p>
        </div>

        {/* Color Indicators & Bottom Bar */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col gap-3">
          
          {/* Color Swatch Dots */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-medium text-stone-400">
              {product.availableColors.length} Finishes:
            </span>
            <div className="flex items-center gap-1.5">
              {product.availableColors.map((color) => {
                const isActive = selectedColor?.id === color.id;
                return (
                  <button
                    key={color.id}
                    onClick={(e) => handleColorDotClick(e, color)}
                    className={`relative w-4 h-4 rounded-full transition-transform duration-200 flex items-center justify-center ${
                      isActive
                        ? 'scale-125 ring-2 ring-stone-900 ring-offset-1 z-10'
                        : 'hover:scale-110 opacity-80'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Preview ${color.name}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Price & Action Button */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div>
              <span className="text-[10px] text-stone-400 uppercase tracking-wider block">Price</span>
              <span className="font-serif text-lg font-bold text-stone-900">
                ${product.price.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleCardClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-brand-700 text-stone-50 text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm group-hover:shadow"
            >
              <span>View Product</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
