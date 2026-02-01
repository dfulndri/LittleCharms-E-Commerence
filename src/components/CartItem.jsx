import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-smooth"
    >
      {/* Product Image */}
      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 mb-1 truncate">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {item.selectedColor} • {item.selectedSize}
        </p>
        <div className="flex items-center gap-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
              className="p-1 hover:bg-white rounded transition-smooth"
            >
              <Minus className="w-4 h-4 text-gray-700" />
            </motion.button>
            <span className="w-8 text-center font-semibold text-gray-900">
              {item.quantity}
            </span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
              className="p-1 hover:bg-white rounded transition-smooth"
            >
              <Plus className="w-4 h-4 text-gray-700" />
            </motion.button>
          </div>

          {/* Delete Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => removeFromCart(item.cartId)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-smooth"
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="font-heading text-xl font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">${item.price} each</p>
      </div>
    </motion.div>
  );
};

export default CartItem;