import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Users, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Handmade with Love",
      description: "Every piece is crafted by hand with care, attention to detail, and lots of love."
    },
    {
      icon: Sparkles,
      title: "Unique Designs",
      description: "Our designs blend Y2K nostalgia with modern coquette aesthetics for truly unique pieces."
    },
    {
      icon: Users,
      title: "Community First",
      description: "We value our community and create pieces that help you express your unique personality."
    },
    {
      icon: Award,
      title: "Quality Materials",
      description: "We use only the finest materials to ensure your jewelry lasts and looks beautiful."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Little Charms</title>
        <meta name="description" content="Learn about Little Charms - handmade jewelry crafted with love, blending Y2K and coquette aesthetics." />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1470214357563-9b47e2b66596)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-soft-pink)]/90 via-[var(--color-soft-purple)]/90 to-[var(--color-soft-blue)]/90" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-xl text-white/90">
              Crafting magic, one charm at a time ✨
            </p>
          </motion.div>
        </section>

        {/* Brand Story */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Little Charms
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Little Charms was born from a passion for creating beautiful, meaningful accessories that tell a story. What started as a small hobby in 2023 has blossomed into a beloved brand that brings joy to charm lovers worldwide.
              </p>
              <p>
                We believe that jewelry should be more than just an accessory—it should be an expression of your unique personality and style. That's why each piece we create is handmade with love, combining the nostalgic vibes of Y2K aesthetics with the soft, romantic touches of coquette style.
              </p>
              <p>
                Our mission is simple: to create jewelry that makes you feel confident, beautiful, and uniquely yourself. Whether you're layering bracelets, stacking rings, or adding a cute phone strap to your collection, every Little Charm is designed to bring a smile to your face.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600">
                What makes Little Charms special
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[var(--color-soft-pink)]/10 to-[var(--color-soft-purple)]/10 rounded-2xl p-8 hover:shadow-lg transition-smooth"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] rounded-2xl flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Creator
            </h2>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                LC
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                The Little Charms Team
              </h3>
              <p className="text-gray-600 mb-4">Founder & Creator</p>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                "I started Little Charms because I wanted to create accessories that bring joy and help people express their unique style. Every piece is made with love and attention to detail, and I'm so grateful to share my creations with you. Thank you for being part of our Little Charms family! 💕"
              </p>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gradient-to-br from-[var(--color-soft-pink)]/20 via-[var(--color-soft-purple)]/20 to-[var(--color-soft-blue)]/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Little Charms?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Fast Shipping", desc: "Orders ship within 1-2 business days" },
                { title: "Quality Guaranteed", desc: "30-day return policy on all items" },
                { title: "Eco-Friendly", desc: "Sustainable materials and packaging" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                >
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;