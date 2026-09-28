import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, onSearchChange, placeholder = "Search sofa, lounge chair, oak dining table..." }) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
          <Search className="w-5 h-5" />
        </div>
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-3.5 bg-white border border-stone-300/80 rounded-2xl text-stone-900 placeholder-stone-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 shadow-sm transition-all duration-200"
        />

        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-700 transition-colors"
            title="Clear search"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
