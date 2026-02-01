import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Link to={`/products/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Favorite Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleFavorite}
              className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md transition-smooth"
            >
              <Heart
                className={`w-5 h-5 transition-smooth ${
                  isFavorite ? 'fill-[var(--color-soft-pink)] text-[var(--color-soft-pink)]' : 'text-gray-600'
                }`}
              />
            </motion.button>

            {/* Quick Add Button - Shows on Hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={handleQuickAdd}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-smooth flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Quick Add
                </motion.button>
              )}
            </AnimatePresence>

            {/* Aesthetic Badge */}
            <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
              {product.aesthetic}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <p className="text-xs font-medium text-[var(--color-soft-purple)] mb-1">
              {product.category}
            </p>
            <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating
                      ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.inStock ? (
                <span className="text-xs text-green-600 font-medium">In Stock</span>
              ) : (
                <span className="text-xs text-red-600 font-medium">Out of Stock</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;