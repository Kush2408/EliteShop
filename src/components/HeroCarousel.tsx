import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Discover the latest trends",
    description: "Up to 50% off on selected items",
    image: "/images/FashionSale.JPG",
    cta: "Shop Now",
    link: "/products"
  },
  {
    id: 2,
    title: "Tech Gadgets",
    subtitle: "Innovation at your fingertips",
    description: "Latest smartphones, laptops & accessories",
    image: "/images/Watch.jpeg",
    cta: "Explore",
    link: "/products?category=tech"
  },
  {
    id: 3,
    title: "Home & Living",
    subtitle: "Transform your space",
    description: "Beautiful essentials for modern homes",
    image: "/images/Home.jpeg",
    cta: "Discover",
    link: "/products?category=home"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="carousel-container relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-gradient-to-br from-white via-sky-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10 space-y-6">
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-950/30 px-4 py-1 rounded-full shadow-md transition font-[Poppins]"
            >
              {slides[currentSlide].subtitle}
            </motion.span>

            <motion.h1
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-purple-400 dark:from-blue-300 dark:via-sky-300 dark:to-purple-300 font-[Poppins]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 dark:from-sky-300 dark:to-indigo-300">
                {slides[currentSlide].title.split(" ")[0]}
              </span>{" "}
              {slides[currentSlide].title.split(" ").slice(1).join(" ")}
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="text-lg font-semibold text-sky-600 dark:text-sky-300 tracking-wide font-[Poppins]"
            >
              ✴ {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <Link
                to={slides[currentSlide].link}
                className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 font-[Poppins]"
              >
                {slides[currentSlide].cta}
              </Link>
            </motion.div>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.8 } }
              }}
              className="flex flex-wrap gap-4 pt-4 text-sm font-medium text-blue-400 dark:text-blue-300 font-[Poppins]"
            >
              {[{ label: "🚚 Free Shipping" }, { label: "📦 Easy Returns" }, { label: "⭐ Premium Quality" }].map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="flex items-center gap-2 hover:text-purple-400 dark:hover:text-purple-300 transition duration-300 ease-in-out"
                >
                  {item.label}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center relative">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="max-h-[60vh] md:max-h-[70vh] rounded-3xl shadow-xl object-contain"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 dark:bg-white/10 hover:bg-white/50 dark:hover:bg-white/20 p-3 rounded-full transition"
      >
        <ChevronLeft className="text-gray-800 dark:text-white h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/30 dark:bg-white/10 hover:bg-white/50 dark:hover:bg-white/20 p-3 rounded-full transition"
      >
        <ChevronRight className="text-gray-800 dark:text-white h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${i === currentSlide
                ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                : 'bg-blue-300 dark:bg-blue-500/30 hover:bg-blue-400 dark:hover:bg-blue-400'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
