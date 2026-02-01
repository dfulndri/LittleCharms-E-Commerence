import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent! 💌",
        description: "Thank you for contacting us! We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@littlecharms.com",
      link: "mailto:hello@littlecharms.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Charm Street, Creative City, CC 12345",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", link: "#" },
    { icon: Facebook, label: "Facebook", link: "#" },
    { icon: Twitter, label: "Twitter", link: "#" }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Little Charms</title>
        <meta name="description" content="Get in touch with Little Charms. We'd love to hear from you!" />
      </Helmet>

      <div className="min-h-screen bg-[var(--color-cream)]">
        <Header />

        {/* Hero Section */}
        <section className="relative h-80 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1543054427-02ca4148b9c4)',
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
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you! 💕
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            >
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900 transition-smooth"
                    placeholder="Your name"
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
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900 transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900 transition-smooth"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--color-soft-purple)] focus:outline-none text-gray-900 transition-smooth resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-smooth"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] rounded-xl flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700">{info.content}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-br from-[var(--color-soft-pink)] to-[var(--color-soft-purple)] rounded-full flex items-center justify-center hover:shadow-lg transition-smooth"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;