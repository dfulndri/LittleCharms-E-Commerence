import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: '',
    aesthetic: '',
    priceRange: 'all'
  });
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [location]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = [...products];

      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category);
      }

      if (filters.aesthetic) {
        filtered = filtered.filter(p => p.aesthetic === filters.aesthetic);
      }

      if (filters.priceRange !== 'all') {
        switch (filters.priceRange) {
          case 'under20':
            filtered = filtered.filter(p => p.price < 20);
            break;
          case '20to30':
            filtered = filtered.filter(p => p.price >= 20 && p.price <= 30);
            break;
          case 'over30':
            filtered = filtered.filter(p => p.price > 30);
            break;
        }
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      category: '',
      aesthetic: '',
      priceRange: 'all'
    });
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading text-xl font-bold text-gray-900">Filters</h3>
        {(filters.category || filters.aesthetic || filters.priceRange !== 'all') && (
          <button
            onClick={clearFilters}
            className="text-sm text-[var(--color-soft-purple)] hover:underline"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.name} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.name}
                onChange={(e) => setFilters({ ...filters, category: e.target.checked ? cat.name : '' })}
                className="w-4 h-4 text-[var(--color-soft-purple)] focus:ring-[var(--color-soft-pink)]"
              />
              <span className="text-gray-700 group-hover:text-[var(--color-soft-purple)] transition-smooth">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Aesthetic Filter */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Aesthetic</h4>
        <div className="space-y-2">
          {['Y2K', 'Coquette', 'Album Music'].map((aesthetic) => (
            <label key={aesthetic} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="aesthetic"
                checked={filters.aesthetic === aesthetic}
                onChange={(e) => setFilters({ ...filters, aesthetic: e.target.checked ? aesthetic : '' })}
                className="w-4 h-4 text-[var(--color-soft-purple)] focus:ring-[var(--color-soft-pink)]"
              />
              <span className="text-gray-700 group-hover:text-[var(--color-soft-purple)] transition-smooth">
                {aesthetic}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under20', label: 'Under $20' },
            { value: '20to30', label: '$20 - $30' },
            { value: 'over30', label: 'Over $30' }
          ].map((range) => (
            <label key={range.value} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === range.value}
                onChange={() => setFilters({ ...filters, priceRange: range.value })}
                className="w-4 h-4 text-[var(--color-soft-purple)] focus:ring-[var(--color-soft-pink)]"
              />
              <span className="text-gray-700 group-hover:text-[var(--color-soft-purple)] transition-smooth">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Products - Little Charms</title>
        <meta name="description" content="Browse our collection of handmade Y2K and coquette jewelry. Bracelets, rings, phone straps, and keychains." />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Collection
            </h1>
            <p className="text-lg text-gray-600">
              Discover handmade treasures crafted with love ✨
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
                <FilterSection />
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-smooth"
              >
                <Filter className="w-5 h-5" />
                <span className="font-semibold">Filters</span>
              </button>
            </div>

            {/* Mobile Filter Modal */}
            {mobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFilterOpen(false)} />
                <motion.div
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading text-xl font-bold">Filters</h3>
                    <button onClick={() => setMobileFilterOpen(false)}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <FilterSection />
                </motion.div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                </p>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                      <div className="aspect-square bg-gray-200" />
                      <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-1/2" />
                        <div className="h-6 bg-gray-200 rounded w-1/4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-600 mb-4">No products found with these filters</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-semibold rounded-full hover:shadow-lg transition-smooth"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;