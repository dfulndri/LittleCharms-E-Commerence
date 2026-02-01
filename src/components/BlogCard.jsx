import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/blog/${post.id}`}>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth overflow-hidden">
          {/* Featured Image */}
          <div className="relative aspect-video overflow-hidden bg-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
              {post.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--color-soft-purple)] transition-smooth">
              {post.title}
            </h3>

            <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-2 text-[var(--color-soft-purple)] font-semibold group-hover:gap-3 transition-all">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;