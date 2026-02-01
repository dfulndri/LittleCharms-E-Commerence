import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { toast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('littleCharmsCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('littleCharmsCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, options = {}) => {
    const { size = 'One Size', color = product.colors[0], quantity = 1 } = options;
    
    const cartItem = {
      ...product,
      selectedSize: size,
      selectedColor: color,
      quantity: quantity,
      cartId: `${product.id}-${size}-${color}`
    };

    setCartItems(prev => {
      const existingItem = prev.find(item => item.cartId === cartItem.cartId);
      
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Increased ${product.name} quantity`,
        });
        return prev.map(item =>
          item.cartId === cartItem.cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast({
          title: "Added to cart! ✨",
          description: `${product.name} has been added to your cart`,
        });
        return [...prev, cartItem];
      }
    });
  };

  const removeFromCart = (cartId) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartId);
      return;
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};