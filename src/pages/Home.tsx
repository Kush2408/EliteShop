
import React from 'react';
import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoryShowcase from '../components/CategoryShowcase';
import StatsSection from '../components/StatsSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <HeroCarousel />
      <StatsSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <NewsletterSection />
    </motion.div>
  );
};

export default Home;
