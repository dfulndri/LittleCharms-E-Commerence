import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const customerService = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping Info', path: '/faq' },
    { name: 'Returns', path: '/faq' },
    { name: 'Blog', path: '/blog' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[var(--color-soft-pink)] via-[var(--color-soft-purple)] to-[var(--color-soft-blue)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span className="font-heading text-2xl font-bold">Little Charms</span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Handmade jewelry and accessories crafted with love. Each piece tells a unique story and adds a touch of magic to your everyday style.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-heading text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <span className="font-heading text-lg font-semibold mb-4 block">Customer Service</span>
            <ul className="space-y-2">
              {customerService.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <span className="font-heading text-lg font-semibold mb-4 block">Stay Connected</span>
            <p className="text-white/90 text-sm mb-4">
              Subscribe to get special offers and updates!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-[var(--color-soft-purple)] font-semibold rounded-lg hover:bg-white/90 transition-smooth"
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/90 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 fill-current" /> by Little Charms Team
            </p>
            <p className="text-white/90 text-sm">
              © 2026 Little Charms. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;