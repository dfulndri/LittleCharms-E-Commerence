import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQItem';
import { faqs } from '@/data/products';

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Little Charms</title>
        <meta name="description" content="Frequently asked questions about Little Charms - shipping, returns, care, and more." />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        {/* Hero Section */}
        <section className="relative h-80 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1689777238122-fa6d2b32168d)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft-pink)]/90 via-[var(--color-soft-purple)]/90 to-[var(--color-soft-blue)]/90" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-4"
          >
            <HelpCircle className="w-16 h-16 mx-auto text-white mb-4" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              We're here to help! Find answers to common questions below.
            </p>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <p className="text-center text-lg text-gray-700 mb-8">
                Can't find what you're looking for? <a href="/contact" className="text-[var(--color-soft-purple)] hover:underline font-semibold">Contact us</a> and we'll be happy to help!
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FAQItem faq={faq} />
                </motion.div>
              ))}
            </div>

            {/* Still Have Questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-br from-[var(--color-soft-pink)]/20 to-[var(--color-soft-purple)]/20 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We're here to help! Reach out to us anytime.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-smooth"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;