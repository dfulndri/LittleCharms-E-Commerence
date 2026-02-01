import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/products';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Little Charms</title>
        <meta name="description" content="Read the latest from Little Charms - styling tips, trends, care guides, and more." />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        {/* Hero Section */}
        <section className="relative h-80 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1693910907642-d498cb0725b0)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft-pink)]/90 via-[var(--color-soft-purple)]/90 to-[var(--color-soft-blue)]/90" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-4"
          >
            <BookOpen className="w-16 h-16 mx-auto text-white mb-4" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              Little Charms Blog
            </h1>
            <p className="text-xl text-white/90">
              Styling tips, trends, and everything charms ✨
            </p>
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600">
                Discover tips, trends, and inspiration for your jewelry collection
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>

            {/* Load More - Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-smooth border-2 border-gray-300">
                Load More Articles
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 px-4 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Never Miss a Post
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to get our latest articles delivered straight to your inbox!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
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
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;