import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // ✅ import auth context
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth(); // ✅ get user from auth
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate(); // ✅ import useNavigate from react-router-dom

  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem('cartItems');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } else {
      // Clear cart when user logs out
      setCartItems([]);
      localStorage.removeItem('cartItems');
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    if (!user) {
      toast.error('Please login to add items to your cart.');
      navigate('/login'); // ✅ redirect to login
      return;
    }

    setCartItems(prev => {
      const existingItem = prev.find(cartItem =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
      );

      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
