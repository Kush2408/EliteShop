import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; // ✅ Import Auth context
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate for redirection
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth(); // ✅ Use the user state from Auth
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const navigate = useNavigate(); // ✅ Use navigate for redirection

  // Load saved wishlist from localStorage when user logs in
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem('wishlistItems');
      if (saved) {
        setWishlistItems(JSON.parse(saved));
      }
    } else {
      // Clear wishlist on logout
      setWishlistItems([]);
      localStorage.removeItem('wishlistItems');
    }
  }, [user]);

  // Save wishlist to localStorage only if logged in
  useEffect(() => {
    if (user) {
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, user]);

  const addToWishlist = (item: WishlistItem) => {
    if (!user) {
      toast.error('Please login to add items to your wishlist.');
      navigate('/login'); // ✅ Redirect to login
      return;
    }

    setWishlistItems(prev => {
      if (prev.find(wishlistItem => wishlistItem.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const isInWishlist = (id: string) => {
    return wishlistItems.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
