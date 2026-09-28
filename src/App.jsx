import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import { PRODUCTS } from './data/products';
import { AlertTriangle, Home as HomeIcon, Compass } from 'lucide-react';

function parseHash() {
  if (typeof window === 'undefined') {
    return { route: 'home', productId: null, colorId: null, category: 'All', q: '' };
  }
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  const [pathPart, queryPart] = rawHash.split('?');
  const path = pathPart ? pathPart.toLowerCase() : '';
  const params = new URLSearchParams(queryPart || '');

  if (!path || path === '' || path === 'home') {
    return { route: 'home', productId: null, colorId: null, category: 'All', q: '' };
  } else if (path === 'catalog') {
    return {
      route: 'catalog',
      productId: null,
      colorId: null,
      category: params.get('category') || 'All',
      q: params.get('q') || ''
    };
  } else if (path.startsWith('product/')) {
    const id = path.replace('product/', '');
    return {
      route: 'product',
      productId: id,
      colorId: params.get('color') || null,
      category: 'All',
      q: ''
    };
  } else if (path === 'about') {
    return { route: 'about', productId: null, colorId: null, category: 'All', q: '' };
  } else if (path === 'contact') {
    return { route: 'contact', productId: null, colorId: null, category: 'All', q: '' };
  } else {
    return { route: '404', productId: null, colorId: null, category: 'All', q: '' };
  }
}

export default function App() {
  const initial = parseHash();
  const [currentRoute, setCurrentRoute] = useState(initial.route);
  const [activeProductId, setActiveProductId] = useState(initial.productId);
  const [activeColorId, setActiveColorId] = useState(initial.colorId);
  const [searchQuery, setSearchQuery] = useState(initial.q);
  const [selectedCategory, setSelectedCategory] = useState(initial.category);

  useEffect(() => {
    const onHashChange = () => {
      const state = parseHash();
      setCurrentRoute(state.route);
      setActiveProductId(state.productId);
      setActiveColorId(state.colorId);
      if (state.category) setSelectedCategory(state.category);
      if (state.q !== undefined) setSearchQuery(state.q);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Update hash when navigating programmatically
  const navigateTo = (route, params = {}) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (route === 'home') {
      window.location.hash = '#/';
    } else if (route === 'catalog') {
      const qParams = new URLSearchParams();
      if (params.category && params.category !== 'All') qParams.set('category', params.category);
      if (params.q) qParams.set('q', params.q);
      const qStr = qParams.toString();
      window.location.hash = qStr ? `#/catalog?${qStr}` : '#/catalog';
    } else if (route === 'product') {
      const qParams = new URLSearchParams();
      if (params.colorId) qParams.set('color', params.colorId);
      const qStr = qParams.toString();
      window.location.hash = qStr ? `#/product/${params.productId}?${qStr}` : `#/product/${params.productId}`;
    } else if (route === 'about') {
      window.location.hash = '#/about';
    } else if (route === 'contact') {
      window.location.hash = '#/contact';
    } else {
      window.location.hash = `#/${route}`;
    }
  };

  const handleSelectProduct = (productId, colorId = null) => {
    navigateTo('product', { productId, colorId });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    navigateTo('catalog', { category, q: searchQuery });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 selection:bg-brand-500 selection:text-white">
      {/* Universal Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={(route) => navigateTo(route)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <Home
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onNavigateCatalog={() => navigateTo('catalog')}
          />
        )}

        {currentRoute === 'catalog' && (
          <Catalog
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentRoute === 'product' && (
          <Product
            productId={activeProductId}
            colorId={activeColorId}
            products={PRODUCTS}
            onBack={() => navigateTo('catalog')}
            onNavigateCatalog={() => navigateTo('catalog')}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentRoute === 'about' && (
          <About onNavigateCatalog={() => navigateTo('catalog')} />
        )}

        {currentRoute === 'contact' && (
          <Contact />
        )}

        {/* 404 Invalid Route Handling */}
        {currentRoute === '404' && (
          <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-stone-200 text-stone-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8 text-brand-600" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              Error 404
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900">
              Page Not Found
            </h1>
            <p className="text-stone-500 max-w-md mx-auto text-sm sm:text-base">
              The route you requested does not exist in Furniture Studio.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-brand-700 transition-colors shadow-sm"
              >
                <HomeIcon className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
              <button
                onClick={() => navigateTo('catalog')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 text-stone-800 font-semibold text-xs uppercase tracking-wider hover:bg-stone-50 transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Catalog</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={(route) => navigateTo(route)}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  );
}
