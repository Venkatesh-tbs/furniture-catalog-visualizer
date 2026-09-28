import React from 'react';
import ProductDetails from '../components/ProductDetails';
import ProductCard from '../components/ProductCard';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function Product({
  productId,
  colorId,
  products,
  onBack,
  onNavigateCatalog,
  onSelectProduct
}) {
  const product = products.find((p) => p.id === productId);

  // If Product Not Found
  if (!product) {
    const recommended = products.slice(0, 3);

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-12">
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 border border-stone-200/90 shadow-md space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
            <AlertCircle className="w-8 h-8" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Product Not Found
          </span>

          <h2 className="font-serif text-3xl font-bold text-stone-900">
            Silhouette Unmatched
          </h2>

          <p className="text-stone-500 text-sm leading-relaxed">
            The furniture piece with identifier <code className="font-mono text-stone-800 bg-stone-100 px-2 py-0.5 rounded text-xs">"{productId}"</code> could not be located in our studio catalog. It may have been archived or the link might be incorrect.
          </p>

          <div className="pt-2">
            <button
              onClick={onNavigateCatalog}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-700 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Catalog</span>
            </button>
          </div>
        </div>

        {/* Recommended Alternatives */}
        <div className="space-y-6 pt-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Discover Alternatives
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
              Popular Studio Favorites
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {recommended.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <ProductDetails
      product={product}
      initialColorId={colorId}
      onBack={onBack}
    />
  );
}
