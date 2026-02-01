import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lock, CreditCard, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    paymentMethod: 'card'
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      toast({
        title: "Order placed successfully! 🎉",
        description: "Thank you for your purchase! You'll receive a confirmation email shortly.",
      });
      navigate('/');
    }, 2000);
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Little Charms</title>
        <meta name="description" content="Complete your purchase securely" />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 flex items-center gap-3"
          >
            <Lock className="w-10 h-10 text-green-600" />
            Secure Checkout
          </motion.h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Customer Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                    Customer Information
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Shipping Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                    Shipping Address
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                      />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zip"
                          required
                          value={formData.zip}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Payment Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    Payment Method
                  </h2>

                  <div className="space-y-3">
                    {[
                      { value: 'card', label: 'Credit/Debit Card' },
                      { value: 'paypal', label: 'PayPal' },
                      { value: 'apple', label: 'Apple Pay' },
                      { value: 'google', label: 'Google Pay' }
                    ].map((method) => (
                      <label
                        key={method.value}
                        className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[var(--color-soft-purple)] transition-smooth"
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={formData.paymentMethod === method.value}
                          onChange={handleChange}
                          className="w-5 h-5 text-[var(--color-soft-purple)]"
                        />
                        <span className="font-semibold text-gray-900">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
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

                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cartItems.map((item) => (
                      <div key={item.cartId} className="flex gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-gray-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
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
                    <div className="flex justify-between text-gray-700">
                      <span>Tax</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        Place Order
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center mt-4">
                    Your payment information is secure and encrypted
                  </p>
                </motion.div>
              </div>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;