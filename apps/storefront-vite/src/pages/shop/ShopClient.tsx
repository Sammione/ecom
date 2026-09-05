
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCurrency } from '../../context/CurrencyContext';

export interface CatalogProduct {
  id: string;
  name: string;
  price: number;
  salePrice?: number | null;
  category: string;
  image: string;
  isOneSize?: boolean;
  stock: number;
  sku: string;
  tag?: string;
}

const initialProducts: CatalogProduct[] = [
  {
    id: '1',
    name: 'Midnight Elegance Silk Kaftan',
    price: 45000,
    category: 'Kaftans',
    image: '/images/products/kaftan-1.svg',
    isOneSize: true,
    stock: 14,
    sku: 'KAFTAN-BLU-001',
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Royal Purple Crepe Trouser Set',
    price: 65000,
    salePrice: 58000,
    category: 'Trouser Sets',
    image: '/images/products/trouser-1.svg',
    isOneSize: false,
    stock: 8,
    sku: 'TSET-PRP-002',
    tag: 'Sale'
  },
  {
    id: '3',
    name: 'Lavender Whisper Silk Loungewear',
    price: 35000,
    category: 'Loungewear',
    image: '/images/products/loungewear-1.svg',
    isOneSize: false,
    stock: 12,
    sku: 'LNG-LAV-003',
    tag: 'New Arrival'
  },
  {
    id: '4',
    name: 'Handwoven Artisanal Cushion Set',
    price: 18000,
    salePrice: 15000,
    category: 'Cushions',
    image: '/images/products/cushion-1.svg',
    isOneSize: true,
    stock: 20,
    sku: 'CSH-IVO-004'
  },
  {
    id: '5',
    name: 'Royal Oud & Amber Home Diffuser (250ml)',
    price: 22000,
    category: 'Diffusers',
    image: '/images/products/diffuser-1.svg',
    isOneSize: true,
    stock: 25,
    sku: 'DIF-OUD-005',
    tag: 'Bestseller'
  },
  {
    id: '6',
    name: 'Sculptural Brass Statement Earrings',
    price: 18500,
    category: 'Jewellery',
    image: '/images/products/jewellery-1.svg',
    isOneSize: true,
    stock: 16,
    sku: 'JWL-BRS-006'
  },
  {
    id: '7',
    name: 'Obsidian Velvet Evening Kaftan',
    price: 52000,
    category: 'Kaftans',
    image: '/images/products/kaftan-black.svg',
    isOneSize: true,
    stock: 6,
    sku: 'KAFTAN-BLK-007',
    tag: 'Limited'
  },
  {
    id: '8',
    name: 'Lapis Linen Tailored Two-Piece',
    price: 60000,
    category: 'Trouser Sets',
    image: '/images/products/trouser-blue.svg',
    isOneSize: false,
    stock: 9,
    sku: 'TSET-BLU-008'
  },
  {
    id: '9',
    name: 'Sandalwood & Vanilla Reed Diffuser',
    price: 22000,
    category: 'Diffusers',
    image: '/images/products/diffuser-2.svg',
    isOneSize: true,
    stock: 18,
    sku: 'DIF-VAN-009'
  }
];

export default function ShopClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(70000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { formatPrice } = useCurrency();

  const categories = ['All', 'Kaftans', 'Trouser Sets', 'Loungewear', 'Diffusers', 'Cushions', 'Jewellery'];

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
        const currentPrice = product.salePrice || product.price;
        if (currentPrice > maxPrice) return false;
        if (inStockOnly && product.stock <= 0) return false;
        return true;
      })
      .sort((a, b) => {
        const priceA = a.salePrice || a.price;
        const priceB = b.salePrice || b.price;
        if (sortBy === 'price-low') return priceA - priceB;
        if (sortBy === 'price-high') return priceB - priceA;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [selectedCategory, sortBy, maxPrice, inStockOnly]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">
          Ifẹ́mi Collection
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-3">
          The Shop
        </h1>
        <p className="text-gray-500 font-light max-w-2xl text-sm leading-relaxed">
          Discover hand-finished kaftans, sharp tailored silhouettes, and evocative lifestyle accents crafted with premium Nigerian textiles.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 space-y-8">
          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-[var(--color-brand-navy)] mb-4 border-b border-gray-200 pb-2">
              Categories
            </h3>
            <div className="flex flex-col space-y-2 text-sm font-light">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left py-1 transition-colors flex items-center justify-between ${
                    selectedCategory === cat
                      ? 'text-[var(--color-brand-purple)] font-bold'
                      : 'text-gray-600 hover:text-[var(--color-brand-navy)]'
                  }`}
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && <span className="text-xs">●</span>}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="uppercase tracking-widest text-xs font-bold text-[var(--color-brand-navy)]">
                Price Up To
              </h3>
              <span className="text-xs font-semibold text-[var(--color-brand-purple)]">
                ₦ {maxPrice.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={15000}
              max={70000}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[var(--color-brand-navy)]"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>₦15,000</span>
              <span>₦70,000</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <label className="flex items-center gap-3 cursor-pointer text-xs uppercase tracking-wider text-gray-700 font-medium">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-[var(--color-brand-navy)] rounded-none"
              />
              <span>In Stock Only</span>
            </label>
          </div>

          <button
            onClick={() => {
              setSelectedCategory('All');
              setMaxPrice(70000);
              setInStockOnly(false);
              setSortBy('featured');
            }}
            className="w-full py-2.5 border border-gray-300 text-gray-500 text-xs uppercase tracking-widest hover:border-black hover:text-black transition-colors"
          >
            Reset Filters
          </button>
        </aside>

        {/* Product Grid Area */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 border border-gray-100 shadow-sm">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-light">
              Showing <strong>{filteredProducts.length}</strong> piece{filteredProducts.length === 1 ? '' : 's'}
            </span>

            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-gray-200 px-3 py-1.5 text-xs text-gray-700 font-light focus:outline-none focus:border-[var(--color-brand-navy)] uppercase tracking-wider"
              >
                <option value="featured">Featured Collection</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const isFavorited = isInWishlist(product.id);
              return (
                <div key={product.id} className="group flex flex-col bg-white p-4 border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Visual Image Frame */}
                  <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden mb-4 shadow-sm">
                    {product.tag && (
                      <span className="absolute top-3 left-3 z-10 text-[9px] uppercase tracking-widest font-bold px-2.5 py-0.5 bg-[var(--color-brand-purple)] text-white shadow">
                        {product.tag}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist({
                          productId: product.id,
                          name: product.name,
                          price: product.salePrice || product.price,
                          category: product.category,
                          image: product.image
                        });
                      }}
                      className="absolute top-3 right-3 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow"
                      aria-label="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </button>

                    <Link to={`/shop/${product.id}`} className="block w-full h-full bg-stone-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        onClick={() => addItem({
                          productId: product.id,
                          name: product.name,
                          price: product.salePrice || product.price,
                          size: product.isOneSize ? 'One Size' : 'M',
                          quantity: 1,
                          image: product.image,
                          sku: product.sku
                        })}
                        className="w-full py-2.5 bg-white text-[var(--color-brand-navy)] text-[10px] uppercase tracking-widest font-bold hover:bg-[var(--color-brand-lavender)] transition-colors shadow"
                      >
                        + Quick Add to Bag
                      </button>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                        {product.category} {product.isOneSize && '• One Size'}
                      </span>
                      <Link to={`/shop/${product.id}`}>
                        <h3 className="font-playfair text-lg text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-purple)] transition-colors mt-0.5 line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-baseline gap-2">
                        <span className="font-light text-sm text-[var(--color-brand-navy)]">
                          {formatPrice(product.salePrice || product.price)}
                        </span>
                        {product.salePrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {formatPrice(product.price)}
                          </span>
                        )}
                      </div>
                      <Link to={`/shop/${product.id}`} className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-brand-purple)] hover:underline">
                        View Piece →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
