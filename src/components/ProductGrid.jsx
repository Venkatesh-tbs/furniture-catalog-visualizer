import React from 'react';
import ProductCard from './ProductCard';
import { SearchX, RotateCcw } from 'lucide-react';

export default function ProductGrid({
  products,
  onSelectProduct,
  onSelectColor,
  onResetFilters,
  searchQuery,
  selectedCategory
}) {
  if (products.length === 0) {
    return (
      <div className="w-full bg-white rounded-3xl p-12 text-center border border-stone-200/80 shadow-sm max-w-xl mx-auto my-8">
        <div className="w-16 h-16 rounded-2xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
          No furniture matches found
        </h3>
        <p className="text-sm text-stone-500 mb-6 max-w-md mx-auto">
          We couldn't find any products matching "{searchQuery || selectedCategory}".
          Try checking for spelling errors or resetting your filters.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-wider hover:bg-brand-700 transition-colors shadow-sm"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
          onSelectColor={onSelectColor}
        />
      ))}
    </div>
  );
}
