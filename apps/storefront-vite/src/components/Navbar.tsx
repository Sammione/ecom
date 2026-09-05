
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { isAuthenticated, user } = useAuth();
  const { currency, setCurrency } = useCurrency();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'Kaftans', href: '/categories/kaftans' },
    { name: 'Sets', href: '/categories/trouser-sets' },
    { name: 'Loungewear', href: '/categories/loungewear' },
    { name: 'Lifestyle', href: '/categories/diffusers' },
  ];

  return (
    <>
      {/* Top Transatlantic Bar */}
      <div className="w-full bg-[var(--color-brand-navy)] text-white text-[10px] tracking-[0.15em] uppercase py-2 px-4 md:px-12 fixed top-0 z-50 flex items-center justify-between border-b border-white/10 shadow-xs">
        <div className="hidden lg:flex items-center gap-2 text-gray-300 font-medium">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Lagos Atelier 🇳🇬 × London Studio 🇬🇧</span>
        </div>
        <div className="text-center mx-auto text-[9px] md:text-[10px] font-medium text-gray-200">
          <span>Express Delivery Across Nigeria &amp; UK Tracked Delivery via Royal Mail / DPD</span>
        </div>
        <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-xs">
          <button
            onClick={() => setCurrency('NGN')}
            className={`px-1.5 py-0.5 font-bold transition-all text-[9px] ${
              currency === 'NGN' ? 'bg-[var(--color-brand-purple)] text-white' : 'text-gray-300 hover:text-white'
            }`}
            title="Nigerian Naira"
          >
            ₦ NGN
          </button>
          <span className="opacity-40 text-xs">|</span>
          <button
            onClick={() => setCurrency('GBP')}
            className={`px-1.5 py-0.5 font-bold transition-all text-[9px] ${
              currency === 'GBP' ? 'bg-[var(--color-brand-purple)] text-white' : 'text-gray-300 hover:text-white'
            }`}
            title="British Pound Sterling"
          >
            £ GBP
          </button>
        </div>
      </div>

      <header className="w-full h-20 flex items-center justify-between px-6 md:px-12 fixed top-8 z-50 bg-[var(--color-brand-cream)]/95 backdrop-blur-md border-b border-[var(--color-brand-navy)]/10 transition-all">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[var(--color-brand-navy)] p-1"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Ifẹ́mi Lifestyle Logo */}
        <Logo />

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors font-medium relative py-1 ${
                  isActive
                    ? 'text-[var(--color-brand-purple)] font-bold'
                    : 'text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-purple)]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[var(--color-brand-purple)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5 text-[var(--color-brand-charcoal)]">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Open search"
            className="hover:text-[var(--color-brand-purple)] transition-colors p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>

          {/* Wishlist Indicator */}
          <Link
            to="/account?tab=wishlist"
            aria-label="Wishlist"
            className="hover:text-[var(--color-brand-purple)] transition-colors relative p-1 hidden sm:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            {totalWishlistItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-brand-purple)] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                {totalWishlistItems}
              </span>
            )}
          </Link>

          {/* Account Link */}
          <Link
            to={isAuthenticated ? "/account" : "/login"}
            aria-label="Account"
            className="hover:text-[var(--color-brand-purple)] transition-colors p-1 flex items-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            {isAuthenticated && user && (
              <span className="text-[10px] uppercase font-bold tracking-wider hidden lg:inline text-[var(--color-brand-purple)]">
                {user.firstName}
              </span>
            )}
          </Link>

          {/* Cart Bag Trigger */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="hover:text-[var(--color-brand-purple)] transition-colors relative p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden pt-20">
          <div className="bg-[var(--color-brand-cream)] w-4/5 max-w-sm h-full p-8 flex flex-col justify-between shadow-2xl border-r border-gray-200">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-semibold">Navigation</span>
              <div className="flex flex-col gap-4 text-sm uppercase tracking-widest font-semibold">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-purple)] py-1 border-b border-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-purple)] py-1 border-b border-gray-100"
                >
                  About Brand
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-purple)] py-1 border-b border-gray-100"
                >
                  Contact Concierge
                </Link>
                <a
                  href="http://localhost:3001"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--color-brand-purple)] hover:underline py-1 border-b border-gray-100 font-bold flex items-center justify-between"
                >
                  <span>Staff / Admin Portal</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 text-xs text-gray-500 font-light">
              <p>Lagos, Nigeria</p>
              <p className="mt-1">Nationwide Delivery Available</p>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-28 px-4 animate-fade-in">
          <div className="w-full max-w-2xl bg-white shadow-2xl border border-gray-200">
            <form onSubmit={handleSearch} className="flex items-center border-b-2 border-[var(--color-brand-navy)]">
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Kaftans, Trouser Sets, Diffusers..."
                className="flex-1 h-16 px-6 text-lg text-[var(--color-brand-charcoal)] placeholder-gray-400 focus:outline-none font-light"
              />
              <button type="submit" className="px-6 text-[var(--color-brand-navy)] hover:text-[var(--color-brand-purple)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="px-6 text-gray-400 hover:text-gray-700 text-xl font-light"
                aria-label="Close search"
              >
                ✕
              </button>
            </form>
            <div className="p-6 bg-gray-50">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">Suggested Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Silk Kaftan', 'Trouser Sets', 'Loungewear', 'Oud Diffuser', 'Cushions', 'Brass Jewellery'].map((term) => (
                  <button
                    key={term}
                    onClick={() => { navigate(`/search?q=${encodeURIComponent(term)}`); setSearchOpen(false); }}
                    className="px-4 py-2 bg-white border border-gray-200 text-xs text-gray-700 hover:border-[var(--color-brand-navy)] hover:text-[var(--color-brand-navy)] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
