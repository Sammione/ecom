
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserAddress {
  id: string;
  addressLine1: string;
  city: string;
  state: string;
  isDefault: boolean;
}

export interface CustomerOrder {
  id: string;
  orderNumber: string;
  createdAt: string;
  totalAmount: number;
  paymentStatus: 'PAID' | 'PENDING' | 'FAILED';
  orderStatus: 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED';
  deliveryStatus: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    size?: string;
    color?: string;
  }[];
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    phone: string;
  };
}

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: 'CUSTOMER' | 'ADMIN' | 'STAFF';
  addresses: UserAddress[];
}

interface AuthContextType {
  user: UserProfile | null;
  orders: CustomerOrder[];
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  register: (data: { firstName: string; lastName: string; email: string; phone?: string; password: string }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  addOrder: (order: Omit<CustomerOrder, 'id' | 'createdAt'>) => string;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('ifemi_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      const savedOrders = localStorage.getItem('ifemi_orders');
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        // Mock sample initial order for realistic customer demo
        const defaultOrder: CustomerOrder = {
          id: 'ord-demo-1',
          orderNumber: 'IFEMI-92841',
          createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
          totalAmount: 70000,
          paymentStatus: 'PAID',
          orderStatus: 'SHIPPED',
          deliveryStatus: 'In transit with Lagos Courier Express',
          items: [
            { name: 'Royal Purple Trouser Set', quantity: 1, price: 65000, size: 'M', color: 'Royal Purple' }
          ],
          shippingAddress: {
            fullName: 'Adaeze Okonkwo',
            address: '14 Victoria Garden City',
            city: 'Lekki',
            state: 'Lagos',
            phone: '+234 803 123 4567'
          }
        };
        setOrders([defaultOrder]);
      }
    } catch (e) {
      console.error('Failed to load auth state', e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        localStorage.setItem('ifemi_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('ifemi_user');
      }
      localStorage.setItem('ifemi_orders', JSON.stringify(orders));
    }
  }, [user, orders, isLoaded]);

  const login = async (email: string, pass: string) => {
    if (!email || !pass) return { success: false, error: 'Please provide email and password' };
    
    // Create or retrieve session
    const mockUser: UserProfile = {
      id: 'usr-' + Date.now(),
      firstName: email.split('@')[0] || 'Esteemed',
      lastName: 'Client',
      email,
      phone: '+234 800 000 0000',
      role: email.includes('admin') ? 'ADMIN' : 'CUSTOMER',
      addresses: [
        {
          id: 'addr-1',
          addressLine1: 'Plot 12 Admiralty Way, Lekki Phase 1',
          city: 'Lagos',
          state: 'Lagos',
          isDefault: true
        }
      ]
    };

    setUser(mockUser);
    return { success: true };
  };

  const register = async (data: { firstName: string; lastName: string; email: string; phone?: string; password: string }) => {
    if (!data.email || !data.password || !data.firstName) {
      return { success: false, error: 'Please fill in all required fields' };
    }

    const newUser: UserProfile = {
      id: 'usr-' + Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone || '',
      role: 'CUSTOMER',
      addresses: []
    };

    setUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  const addOrder = (orderData: Omit<CustomerOrder, 'id' | 'createdAt'>) => {
    const newOrderId = 'ord-' + Date.now();
    const newOrder: CustomerOrder = {
      ...orderData,
      id: newOrderId,
      createdAt: new Date().toISOString()
    };
    setOrders((prev) => [newOrder, ...prev]);
    return newOrder.orderNumber;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        login,
        register,
        logout,
        updateProfile,
        addOrder,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
