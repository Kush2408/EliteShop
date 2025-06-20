
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  sizes?: string[];
  colors?: string[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'Electronics',
    description: 'Experience superior sound quality with our premium wireless headphones. Features active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Wireless Charging', 'Premium Materials'],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    colors: ['Black', 'White', 'Silver'],
    tags: ['featured', 'bestseller', 'new']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'Electronics',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    colors: ['Black', 'Rose Gold', 'Silver'],
    tags: ['featured', 'fitness']
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    price: 149,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'Fashion',
    description: 'Stylish designer sunglasses with UV protection and premium materials.',
    features: ['UV Protection', 'Polarized Lenses', 'Titanium Frame', 'Designer Brand'],
    rating: 4.7,
    reviews: 543,
    inStock: true,
    colors: ['Black', 'Brown', 'Gold'],
    tags: ['designer', 'summer']
  },
  {
    id: '4',
    name: 'Modern Desk Lamp',
    price: 89,
    originalPrice: 119,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'Home',
    description: 'Illuminate your workspace with this sleek, adjustable LED desk lamp.',
    features: ['LED Lighting', 'Adjustable Arm', 'Touch Controls', 'Energy Efficient'],
    rating: 4.5,
    reviews: 324,
    inStock: true,
    colors: ['White', 'Black', 'Silver'],
    tags: ['home', 'office']
  },
  {
    id: '5',
    name: 'Luxury Backpack',
    price: 159,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'Fashion',
    description: 'Premium leather backpack perfect for work or travel with multiple compartments.',
    features: ['Genuine Leather', 'Multiple Compartments', 'Laptop Sleeve', 'Water Resistant'],
    rating: 4.9,
    reviews: 672,
    inStock: true,
    colors: ['Brown', 'Black', 'Tan'],
    tags: ['luxury', 'travel']
  },
  {
    id: '6',
    name: 'Wireless Speaker',
    price: 129,
    originalPrice: 159,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    category: 'Electronics',
    description: 'Portable wireless speaker with 360-degree sound and waterproof design.',
    features: ['360° Sound', 'Waterproof', '12-hour Battery', 'Bluetooth 5.0'],
    rating: 4.4,
    reviews: 456,
    inStock: true,
    colors: ['Blue', 'Red', 'Black'],
    tags: ['portable', 'music']
  }
];

export const categories = [
  { id: 'electronics', name: 'Electronics', count: 15 },
  { id: 'fashion', name: 'Fashion', count: 23 },
  { id: 'home', name: 'Home & Living', count: 18 },
  { id: 'sports', name: 'Sports & Fitness', count: 12 },
  { id: 'beauty', name: 'Beauty & Care', count: 9 }
];
