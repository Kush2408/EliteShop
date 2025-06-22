import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔁 Load user from localStorage
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("🔄 Restored user from localStorage:", parsedUser);
      }
    } catch (error) {
      console.error("❌ Failed to parse user from localStorage", error);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 🛡️ Admin credentials
    if (email === 'admin@example.com' && password === 'Admin@123') {
      const adminUser: User = {
        id: 'admin-1',
        email,
        name: 'Admin User',
        role: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      console.log("✅ Logged in as admin:", adminUser);
      setLoading(false);
      return;
    }

    // 👤 Regular user
    if (email && password) {
      const normalUser: User = {
        id: 'user-1',
        email,
        name: email.split('@')[0],
        role: 'user'
      };
      setUser(normalUser);
      localStorage.setItem('user', JSON.stringify(normalUser));
      console.log("✅ Logged in as user:", normalUser);
      setLoading(false);
      return;
    }

    setLoading(false);
    throw new Error('Invalid credentials');
  };

  const signup = async (email: string, password: string, name: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser: User = {
      id: 'user-2',
      email,
      name,
      role: 'user'
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log("🆕 Signed up user:", newUser);
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    console.log("🚪 Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
