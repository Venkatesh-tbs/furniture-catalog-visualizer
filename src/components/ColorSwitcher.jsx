import React from 'react';
import { Check, Sparkles, Palette } from 'lucide-react';

export default function ColorSwitcher({
  availableColors,
  selectedColor,
  onColorChange,
  material = "Custom Finish"
}) {
  return (
    <div className="space-y-4">
      {/* Header: Label and Active Color details */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-brand-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
            Selected Finish:
          </span>
          <span className="text-xs font-semibold text-brand-800 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
            {selectedColor.name}
          </span>
        </div>
        
        {selectedColor.badge && (
          <span className="text-[11px] font-medium text-stone-500 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            {selectedColor.badge}
          </span>
        )}
      </div>

      {/* Swatch Selection Grid / List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableColors.map((color) => {
          const isSelected = selectedColor.id === color.id;
          const isLight = color.hex.toLowerCase() === '#ffffff' || color.id.includes('cream') || color.id.includes('white');

          return (
            <button
              key={color.id}
              onClick={() => onColorChange(color)}
              className={`relative flex items-center gap-3 p-3 rounded-2xl border text-left transition-all duration-200 group focus:outline-none ${
                isSelected
                  ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-md scale-[1.02] ring-2 ring-stone-900 ring-offset-2'
                  : 'bg-white text-stone-800 border-stone-200/90 hover:border-stone-400 hover:bg-stone-50/80 shadow-sm'
              }`}
              aria-label={`Select ${color.name}`}
            >
              {/* Swatch Color Orb */}
              <div
                className={`relative w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center shadow-inner border transition-transform duration-200 group-hover:scale-105 ${
                  isLight ? 'border-stone-300' : 'border-black/10'
                }`}
                style={{ backgroundColor: color.hex }}
              >
                {isSelected && (
                  <Check
                    className={`w-4 h-4 ${
                      isLight ? 'text-stone-900 stroke-[3]' : 'text-white stroke-[3]'
                    }`}
                  />
                )}
              </div>

              {/* Color Metadata */}
              <div className="min-w-0 flex-1">
                <span className={`block text-xs font-bold truncate leading-tight ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {color.name}
                </span>
                <span className={`text-[10px] block truncate font-mono mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                  {color.hex}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Customizer Feedback Info */}
      <div className="rounded-xl bg-stone-100/80 p-3 border border-stone-200/60 flex items-start gap-2.5">
        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 animate-ping" />
        <p className="text-[11px] text-stone-600 leading-relaxed">
          <strong className="text-stone-900 font-semibold">Visualizer Active: </strong>
          Switching colors simulates physical stain pigmentation and ambient studio light reflections across {material}.
        </p>
      </div>
    </div>
  );
}
