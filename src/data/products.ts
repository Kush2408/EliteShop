
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
  },
  {
    id: "7",
    name: "AirPods Pro Max Wireless",
    price: 4599,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Electronics",
    description: "Premium over-ear headphones with spatial audio and active noise cancellation. Experience studio-quality sound with up to 20 hours of battery life.",
    features: ["Spatial Audio", "Active Noise Cancellation", "20hr Battery", "Premium Build"],
    rating: 4.8,
    reviews: 2156,
    inStock: true,
    colors: ["Space Grey", "Silver", "Sky Blue", "Pink", "Green"],
    tags: ["premium", "bestseller", "audio"]
  },
{
  id: "8",
  name: "Silk Kurta Set - Royal Blue",
  price: 349,
  originalPrice: 499,
  image: "https://assets0.mirraw.com/images/8360461/image_zoom.jpeg?1602665754",
  images: [
    "https://<your-cdn-or-local-path>/silk-kurta-royal-blue.jpg"
  ],
  category: "Fashion",
  description: "Elegant handwoven silk kurta with intricate embroidery and matching dupatta. Perfect for festivals, weddings, and special occasions.",
  features: ["Handwoven Silk", "Embroidered Design", "Matching Dupatta", "Traditional Craft"],
  rating: 4.6,
  reviews: 847,
  inStock: true,
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Royal Blue", "Emerald Green", "Maroon", "Golden"],
  tags: ["traditional", "festive", "premium"]
},

  {
    id: "9",
    name: "Smart Air Purifier Pro",
    price: 1299,
    originalPrice: 1599,
    image: "https://cdn.shopify.com/s/files/1/0279/4559/9064/products/01.00_OA1_PlasmaPro400S_07.jpg?v=1631052785",
    images: [
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Home",
    description: "WiFi-enabled air purifier with HEPA filter and real-time air quality monitoring. Covers up to 500 sq ft with whisper-quiet operation.",
    features: ["HEPA Filter", "WiFi Enabled", "500 sq ft Coverage", "Quiet Operation"],
    rating: 4.7,
    reviews: 1234,
    inStock: true,
    colors: ["White", "Black"],
    tags: ["smart", "health", "featured"]
  },
  {
    id: "10",
    name: "Vitamin C Glow Serum",
    price: 1899,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Beauty",
    description: "20% Vitamin C brightening serum with hyaluronic acid for radiant skin. Clinically proven to reduce dark spots and boost collagen production.",
    features: ["20% Vitamin C", "Hyaluronic Acid", "Dark Spot Reduction", "Dermatologist Tested"],
    rating: 4.9,
    reviews: 3421,
    inStock: true,
    tags: ["skincare", "bestseller", "vegan"]
  },
  {
    id: "11",
    name: "Yoga Mat Pro - Eco Bamboo",
    price: 229,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Sports",
    description: "Premium 6mm thick yoga mat made from sustainable bamboo fiber. Non-slip surface with alignment guides for perfect poses every time.",
    features: ["6mm Thickness", "Bamboo Fiber", "Non-slip Surface", "Alignment Guides"],
    rating: 4.5,
    reviews: 678,
    inStock: true,
    colors: ["Natural", "Deep Purple", "Ocean Blue"],
    tags: ["eco-friendly", "fitness", "premium"]
  },
  {
    id: "12",
    name: "Gaming Laptop RTX 4060",
    price: 8999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Electronics",
    description: "High-performance gaming laptop with RTX 4060, 15.6-inch 144Hz display. Perfect for gaming, streaming, and creative work with RGB keyboard.",
    features: ["RTX 4060 GPU", "144Hz Display", "RGB Keyboard", "16GB RAM"],
    rating: 4.7,
    reviews: 1876,
    inStock: true,
    colors: ["Black", "Space Grey"],
    tags: ["gaming", "performance", "featured"]
  },
  {
    id: "13",
    name: "Designer Handbag - Tan Leather",
    price: 899,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Fashion",
    description: "Handcrafted genuine leather handbag with gold hardware and multiple compartments. Timeless design that complements both casual and formal outfits.",
    features: ["Genuine Leather", "Gold Hardware", "Multiple Compartments", "Handcrafted"],
    rating: 4.7,
    reviews: 542,
    inStock: true,
    colors: ["Tan", "Black", "Burgundy", "Navy"],
    tags: ["luxury", "leather", "timeless"]
  },
  {
    id: "14",
    name: "Smart Coffee Maker Deluxe",
    price: 1599,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Home",
    description: "App-controlled coffee maker with built-in grinder and temperature control. Schedule your perfect brew and wake up to fresh coffee every morning.",
    features: ["Built-in Grinder", "App Control", "Temperature Control", "Programmable"],
    rating: 4.6,
    reviews: 934,
    inStock: true,
    colors: ["Stainless Steel", "Black"],
    tags: ["smart", "appliance", "gift"]
  },
  {
    id: "15",
    name: "Luxury Face Cream Set",
    price: 459,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Beauty",
    description: "Premium anti-aging face cream with retinol and peptides in elegant packaging. Reduces fine lines and improves skin texture for a youthful glow.",
    features: ["Retinol Formula", "Peptide Complex", "Anti-aging", "Luxury Packaging"],
    rating: 4.8,
    reviews: 1567,
    inStock: true,
    tags: ["luxury", "anti-aging", "gift"]
  },
  {
    id: "16",
    name: "Resistance Band Set Pro",
    price: 1799,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "Sports",
    description: "Complete resistance training set with 5 bands, door anchor, and workout guide. Build strength and muscle at home with this portable gym solution.",
    features: ["5 Resistance Levels", "Door Anchor", "Workout Guide", "Portable Design"],
    rating: 4.4,
    reviews: 892,
    inStock: true,
    colors: ["Multi-color", "Black Set"],
    tags: ["fitness", "home-workout", "bestseller"]
  },
]


export const categories = [
  { id: 'electronics', name: 'Electronics', count: 15 },
  { id: 'fashion', name: 'Fashion', count: 23 },
  { id: 'home', name: 'Home & Living', count: 18 },
  { id: 'sports', name: 'Sports & Fitness', count: 12 },
  { id: 'beauty', name: 'Beauty & Care', count: 9 }
];
