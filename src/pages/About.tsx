
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Truck, HeartHandshake, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Your data and transactions are protected with industry-leading security measures.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50 with express delivery options available.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: '24/7 customer support and hassle-free returns within 30 days.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'We curate only the finest products from trusted brands and suppliers.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '10K+', label: 'Products' },
    { number: '25+', label: 'Countries' },
    { number: '5★', label: 'Average Rating' }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About EliteShop
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We're passionate about bringing you the finest products from around the world. 
              Since our founding in 2020, we've been committed to quality, innovation, and exceptional customer service.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <img
                    key={index}
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">Trusted by thousands</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At EliteShop, we believe that shopping should be more than just a transaction. 
                It should be an experience that brings joy, discovery, and value to your life.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We carefully curate our collection to offer products that meet our high standards 
                for quality, design, and sustainability. Every item in our store is chosen with 
                our customers' needs and values in mind.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Our mission"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind EliteShop who work tirelessly to bring you the best experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover your next favorite product today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Explore Products
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
