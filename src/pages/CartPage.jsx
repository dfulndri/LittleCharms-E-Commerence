import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - Little Charms</title>
          <meta name="description" content="Your shopping cart at Little Charms" />
        </Helmet>

        <div className="min-h-screen bg-[var(--color-cream)]">
          <Header />

          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
              <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Looks like you haven't added anything yet. Let's find you something beautiful!
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-smooth"
              >
                Continue Shopping
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Shopping Cart - Little Charms</title>
        <meta name="description" content="Review your shopping cart and proceed to checkout" />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Shopping Cart
          </motion.h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.cartId} item={item} />
              ))}

              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="flex-1 py-3 text-center border-2 border-[var(--color-soft-purple)] text-[var(--color-soft-purple)] font-semibold rounded-lg hover:bg-[var(--color-soft-purple)] hover:text-white transition-smooth"
                >
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="px-6 py-3 text-red-600 hover:bg-red-50 font-semibold rounded-lg transition-smooth"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24 bg-white rounded-2xl shadow-xl p-6"
              >
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-gray-600">
                      Free shipping on orders over $50!
                    </p>
                  )}
                  <div className="flex justify-between text-gray-700">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="font-heading text-xl font-bold text-gray-900">
                        Total
                      </span>
                      <span className="font-heading text-2xl font-bold text-[var(--color-soft-purple)]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold text-center rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-smooth"
                >
                  Proceed to Checkout
                </Link>

                <p className="text-xs text-gray-600 text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CartPage;