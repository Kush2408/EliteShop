import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { products } from '../data/products';
import { Link, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const tags = [
  'Recommended',
  'Trending',
  'Top Pick',
  'Just for You',
  'Hot Deal',
  'Popular Now',
];

const RecommendationSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const { addToCart } = useCart(); // ✅ useCart from context
  const navigate = useNavigate();

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

  const handleAddToCart = (product: typeof products[number]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    navigate('/cart'); 
  };

  return (
    <SectionWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: 'easeOut',
              staggerChildren: 0.2,
            },
          },
        }}
        className="text-center mb-10 font-[Poppins]"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          }}
          className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-sky-500 to-teal-400 bg-clip-text text-transparent"
        >
          Recommended for You
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
          className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-4 text-lg font-semibold leading-relaxed tracking-tight"
        >
          Discover a curated selection of our top-rated and most-loved products, chosen just for you.
        </motion.p>
      </motion.div>

      <ScrollableWrapper
        ref={scrollRef}
        onMouseEnter={startAutoScroll}
        onMouseLeave={stopAutoScroll}
      >
        {products.slice(0, 12).map((product, index) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card>
              <div className="tag">{tags[index % tags.length]}</div>
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="info">
                <span>{product.name}</span>
                <div className="rating">
                  <Star className="icon" />
                  <span>{product.rating.toFixed(1)}</span>
                </div>
                <p>₹{product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </Card>
          </Link>
        ))}
      </ScrollableWrapper>
    </SectionWrapper>
  );
};

export default RecommendationSection;

// -------------------- Styled Components --------------------

const SectionWrapper = styled.section`
  padding: 60px 20px;
  overflow: hidden;
  background: linear-gradient(to bottom right, #f0f4ff, #f0f4ff);
  .text-center {
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

const ScrollableWrapper = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: scroll;
  padding: 0 20px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  position: relative;
  background: #fff;
  width: 260px;
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  .tag {
    position: absolute;
    top: 12px;
    left: 12px;
    background-color: #facc15;
    color: #1f2937;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: 999px;
    box-shadow: 0 0 6px #facc15;
    animation: glowTag 2s infinite;
    z-index: 2;
  }

  @keyframes glowTag {
    0%, 100% {
      text-shadow: 0 0 3px #fff, 0 0 5px #facc15;
    }
    50% {
      text-shadow: 0 0 1px #fff, 0 0 3px #facc15;
    }
  }

  .image {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    transition: all 0.5s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }
  }

  .info {
    position: absolute;
    bottom: -50%;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 20px 10px;
    background-color: #ffffffcc;
    backdrop-filter: blur(6px);
    transition: all 0.4s ease;
    opacity: 0;

    span {
      display: block;
      font-size: 1.1rem;
      font-weight: 600;
      color: #181818;
    }

    .rating {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;
      gap: 4px;
      color: #facc15;

      .icon {
        width: 16px;
        height: 16px;
        fill: #facc15;
      }

      span {
        font-size: 0.9rem;
        color: #555;
        font-weight: 500;
      }
    }

    p {
      font-size: 1rem;
      font-weight: bold;
      color: #16a34a;
    }

    button {
      margin-top: 10px;
      padding: 8px 14px;
      background: #181818;
      color: #fff;
      border: none;
      border-radius: 999px;
      font-weight: 600;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #000;
      }
    }
  }

  &:hover .image img {
    transform: scale(0.8) rotate(5deg);
  }

  &:hover .info {
    bottom: 10%;
    opacity: 1;
  }
`;
