import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, Heart, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories, testimonials } from '@/data/products';
import { useToast } from '@/components/ui/use-toast';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();
  const featuredProducts = products.slice(0, 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing! 💌",
      description: "You'll receive our latest updates and special offers.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Little Charms - Handmade Y2K & Coquette Jewelry</title>
        <meta name="description" content="Discover beautiful handmade jewelry and accessories with Y2K and coquette aesthetics. Bracelets, rings, phone straps, and keychains crafted with love." />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1686839831821-f766acad9e62)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft-pink)]/80 via-[var(--color-soft-purple)]/80 to-[var(--color-soft-blue)]/80" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Sparkles className="w-16 h-16 mx-auto text-white mb-4 animate-bounce-gentle" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Welcome to <br />Little Charms
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 font-light"
            >
              Handmade jewelry with Y2K & coquette vibes ✨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-soft-purple)] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-smooth"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-20 left-10 text-white/30"
          >
            <Heart className="w-24 h-24" />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-20 right-10 text-white/30"
          >
            <Star className="w-32 h-32" />
          </motion.div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked favorites just for you ✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-smooth"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-gray-600">
                Find your perfect style
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    to={`/products?category=${category.name}`}
                    className="block group"
                  >
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-smooth">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-heading text-2xl font-bold mb-2">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/90">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[var(--color-soft-pink)]/20 via-[var(--color-soft-purple)]/20 to-[var(--color-soft-blue)]/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Real reviews from real charm lovers 💕
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
              >
                <div className="flex items-center gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>

                <p className="text-xl text-gray-700 text-center mb-6 leading-relaxed font-light italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] flex items-center justify-center text-white font-bold">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <span className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </span>
                </div>
              </motion.div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      index === currentTestimonial
                        ? 'bg-[var(--color-soft-purple)] w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Mail className="w-16 h-16 mx-auto text-[var(--color-soft-pink)] mb-6" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get exclusive offers, new product updates, and styling tips delivered to your inbox! ✨
              </p>

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-smooth"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;