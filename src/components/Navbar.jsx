import React, { useState, useEffect } from 'react';
import { Armchair, Search, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ currentRoute, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', route: 'home' },
    { label: 'Catalog', route: 'catalog' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5'
          : 'bg-[#FBF9F5] border-b border-stone-200/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            aria-label="Furniture Studio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-stone-100 flex items-center justify-center shadow-md group-hover:bg-brand-600 transition-colors duration-300">
              <Armchair className="w-5 h-5 text-brand-200 group-hover:text-white transition-colors" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-stone-900 block leading-tight">
                Furniture Studio
              </span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium block">
                Catalog & Visualizer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-stone-900 bg-stone-200/70 shadow-sm font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('catalog')}
              className="p-2.5 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-200/50 transition-colors"
              title="Search Catalog"
              aria-label="Search Catalog"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleNavClick('catalog')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-wider hover:bg-brand-700 transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-300" />
              <span>Customize</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FBF9F5] px-4 pt-4 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNavClick(link.route)}
              className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                currentRoute === link.route
                  ? 'bg-stone-900 text-stone-50 font-semibold'
                  : 'text-stone-700 hover:bg-stone-200/50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('catalog')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 text-white font-medium text-sm tracking-wide shadow-sm hover:bg-brand-700 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Customizer</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
