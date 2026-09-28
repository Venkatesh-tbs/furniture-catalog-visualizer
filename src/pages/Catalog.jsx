import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import ProductGrid from '../components/ProductGrid';
import { CATEGORIES } from '../data/products';
import { ArrowUpDown } from 'lucide-react';

export default function Catalog({
  products,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSelectProduct
}) {
  const [sortBy, setSortBy] = useState('featured');

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = products.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category match
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;

        // Search match (name, material, category, description)
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !q ||
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.material.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: featured first, then name
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory('All');
    onSearchChange('');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      
      {/* Catalog Header */}
      <div className="text-center sm:text-left space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
          Furniture Catalog
        </h1>
        <p className="text-sm sm:text-base text-stone-500 max-w-2xl">
          Browse our artisanal collections. Select any silhouette to open the real-time color visualizer and customize upholstery, stains, and hardware.
        </p>
      </div>

      {/* Search and Filters Control Bar */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200/80 shadow-sm space-y-5">
        
        {/* Top row: Search Bar and Sort Selector */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex-1 max-w-2xl">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
              placeholder="Search by name, category, or materials (e.g., Sofa, Oak, Leather)..."
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <ArrowUpDown className="w-4 h-4 text-stone-400" />
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Bottom row: Category Filter Tabs */}
        <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            counts={categoryCounts}
          />

          <div className="text-xs font-medium text-stone-500 whitespace-nowrap self-end sm:self-auto">
            Showing <strong className="text-stone-900">{filteredProducts.length}</strong> of{' '}
            {products.length} products
          </div>
        </div>

      </div>

      {/* Active Filter Pills (if filters active) */}
      {(searchQuery || selectedCategory !== 'All') && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
            Active filters:
          </span>
          {selectedCategory !== 'All' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-medium">
              Category: {selectedCategory}
              <button
                onClick={() => onSelectCategory('All')}
                className="hover:text-brand-300 ml-1 font-bold"
              >
                &times;
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-medium">
              Search: "{searchQuery}"
              <button
                onClick={() => onSearchChange('')}
                className="hover:text-brand-300 ml-1 font-bold"
              >
                &times;
              </button>
            </span>
          )}
          <button
            onClick={handleResetFilters}
            className="text-xs text-brand-700 hover:text-brand-900 font-semibold underline underline-offset-4 ml-2"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Products Grid */}
      <ProductGrid
        products={filteredProducts}
        onSelectProduct={onSelectProduct}
        onResetFilters={handleResetFilters}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
      />

    </div>
  );
}
