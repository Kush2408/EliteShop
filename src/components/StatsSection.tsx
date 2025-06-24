import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products'; // Adjust this path if needed

const personalizedTags = [
  'Just for You',
  'Handpicked',
  'Trending Now',
  'Based on Your Interest',
  'Popular Pick',
  'Customers Love This',
];

const RecommendationSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 0.5;

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 1
        ) {
          scrollContainer.scrollLeft = 0;
        }

        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  return (
    <section className="min-h-[100vh] py-24 bg-gradient-to-br from-white via-sky-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Recommended for You
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Hover to explore hand-picked items tailored to your preferences.
          </p>
        </motion.div>

        {/* Cards container */}
        <div
          ref={scrollRef}
          onMouseEnter={startAutoScroll}
          onMouseLeave={stopAutoScroll}
          className="flex gap-6 w-full overflow-x-scroll whitespace-nowrap relative no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>
            {`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {products.slice(0, 12).map((product, index) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="inline-block min-w-[300px] max-w-[320px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {personalizedTags[index % personalizedTags.length]}
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
                  {product.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
