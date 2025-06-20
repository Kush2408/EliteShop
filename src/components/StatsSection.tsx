
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ end, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = end / steps;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-lg">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Join our growing community of satisfied customers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem end={50000} label="Happy Customers" suffix="+" />
          <StatItem end={1200} label="Products" suffix="+" />
          <StatItem end={99} label="Satisfaction Rate" suffix="%" />
          <StatItem end={24} label="Support" suffix="/7" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
