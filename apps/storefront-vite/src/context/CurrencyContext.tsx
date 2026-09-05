import React, { createContext, useContext, useState, useEffect } from 'react';

type Currency = 'NGN' | 'GBP';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  symbol: string;
  formatPrice: (ngnAmount: number, gbpAmount?: number | null) => string;
  convertPrice: (ngnAmount: number, gbpAmount?: number | null) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Standard exchange rate for fallback conversion (1 GBP ~ 1,600 NGN)
const NGN_TO_GBP_RATE = 1600;

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem('ifemi_currency');
    return (saved === 'GBP' || saved === 'NGN') ? saved : 'NGN';
  });

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem('ifemi_currency', c);
  };

  useEffect(() => {
    const saved = localStorage.getItem('ifemi_currency');
    if (saved === 'GBP' || saved === 'NGN') {
      setCurrencyState(saved);
    }
  }, []);

  const symbol = currency === 'GBP' ? '£' : '₦';

  const convertPrice = (ngnAmount: number, gbpAmount?: number | null): number => {
    if (currency === 'GBP') {
      if (gbpAmount !== undefined && gbpAmount !== null && gbpAmount > 0) {
        return gbpAmount;
      }
      return Math.round(ngnAmount / NGN_TO_GBP_RATE);
    }
    return ngnAmount;
  };

  const formatPrice = (ngnAmount: number, gbpAmount?: number | null): string => {
    const amount = convertPrice(ngnAmount, gbpAmount);
    if (currency === 'GBP') {
      return `£${amount.toLocaleString('en-GB')}`;
    }
    return `₦ ${amount.toLocaleString('en-NG')}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, symbol, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
