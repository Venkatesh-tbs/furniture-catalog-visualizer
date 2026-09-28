import React from 'react';
import { LayoutGrid, Armchair, Coffee, Bed, Briefcase, Sparkles } from 'lucide-react';

const categoryIcons = {
  All: LayoutGrid,
  Sofa: Armchair,
  Chair: Sparkles,
  Table: Coffee,
  Bedroom: Bed,
  Office: Briefcase,
};

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory, counts = {} }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const IconComponent = categoryIcons[category] || LayoutGrid;
        const count = counts[category];

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
              isSelected
                ? 'bg-stone-900 text-stone-50 shadow-md ring-1 ring-stone-900 scale-[1.02]'
                : 'bg-white text-stone-600 hover:text-stone-900 hover:bg-stone-100 border border-stone-200/80'
            }`}
          >
            <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-300' : 'text-stone-400'}`} />
            <span>{category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
