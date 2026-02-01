import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, Sparkles, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-7 h-7 text-[var(--color-soft-pink)]" />
            </motion.div>
            <div className="flex flex-col">
              <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-[var(--color-soft-pink)] via-[var(--color-soft-purple)] to-[var(--color-soft-blue)] bg-clip-text text-transparent">
                Little Charms
              </h1>
              <span className="font-accent text-xs text-gray-600 -mt-1">Handmade with love</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-smooth ${
                  isActive(link.path)
                    ? 'text-[var(--color-soft-purple)]'
                    : 'text-gray-700 hover:text-[var(--color-soft-pink)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-smooth">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-smooth"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {getCartCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[var(--color-soft-pink)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {getCartCount()}
                </motion.span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-smooth"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col py-4 px-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium transition-smooth ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;