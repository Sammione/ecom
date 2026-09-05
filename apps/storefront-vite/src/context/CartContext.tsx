
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string; // product id + variant id
  productId: string;
  name: string;
  price: number;
  image?: string | null;
  size?: string | null;
  color?: string | null;
  quantity: number;
  sku?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity' | 'id'> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  discountCode: string | null;
  discountAmount: number;
  applyDiscount: (code: string) => { success: boolean; message: string };
  removeDiscount: () => void;
  toastMessage: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('ifemi_cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedDiscount = localStorage.getItem('ifemi_discount');
      if (savedDiscount) {
        setDiscountCode(savedDiscount);
      }
    } catch (e) {
      console.error('Failed to load cart from storage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('ifemi_cart', JSON.stringify(items));
        if (discountCode) {
          localStorage.setItem('ifemi_discount', discountCode);
        } else {
          localStorage.removeItem('ifemi_discount');
        }
      } catch (e) {
        console.error('Failed to save cart to storage', e);
      }
    }
  }, [items, discountCode, isLoaded]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addItem = (newItem: Omit<CartItem, 'quantity' | 'id'> & { quantity?: number }) => {
    const qty = newItem.quantity || 1;
    const itemId = `${newItem.productId}-${newItem.size || 'std'}-${newItem.color || 'std'}`;

    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === itemId);
      if (existing) {
        return prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevItems, { ...newItem, id: itemId, quantity: qty }];
    });

    showToast(`Added "${newItem.name}" to your bag`);
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    showToast('Item removed from your bag');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode(null);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const discountAmount = discountCode === 'WELCOME10' ? Math.round(subtotal * 0.1) : 0;

  const applyDiscount = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'WELCOME10') {
      setDiscountCode('WELCOME10');
      showToast('10% VIP Discount applied');
      return { success: true, message: '10% discount applied successfully!' };
    }
    if (cleanCode === 'IFEMI20') {
      setDiscountCode('IFEMI20');
      showToast('20% Exclusive Discount applied');
      return { success: true, message: '20% discount applied successfully!' };
    }
    return { success: false, message: 'Invalid or expired promotional code.' };
  };

  const removeDiscount = () => {
    setDiscountCode(null);
    showToast('Discount removed');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        discountCode,
        discountAmount,
        applyDiscount,
        removeDiscount,
        toastMessage,
      }}
    >
      {children}
      {/* Micro-Interaction Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] px-6 py-4 border border-[var(--color-brand-purple)] shadow-2xl flex items-center gap-3 animate-fade-in text-xs uppercase tracking-widest font-semibold">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-lavender)] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
