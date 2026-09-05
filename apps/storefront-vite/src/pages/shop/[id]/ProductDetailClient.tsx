
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';

export interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: number;
    salePrice?: number | null;
    sku: string;
    category: string;
    description: string;
    fabricCare: string;
    images: string[];
    colors: { name: string; hex: string; bgClass: string }[];
    sizes?: string[];
    isOneSize?: boolean;
    stock: number;
  };
}

export default function ProductDetailClient({ product }: ProductDetailProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(product.isOneSize ? 'One Size' : product.sizes?.[0] || 'M');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'delivery' | 'reviews'>('details');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isFavorited = isInWishlist(product.id);

  const currentImage = product.images?.[activeImageIndex] || product.images?.[0] || 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop';

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      size: selectedSize,
      color: selectedColor,
      quantity,
      image: currentImage,
      sku: `${product.sku}-${selectedColor.slice(0, 3).toUpperCase()}-${selectedSize}`
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const handleToggleWishlist = () => {
    toggleWishlist({
      productId: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      category: product.category,
      image: currentImage
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-8">
        <Link to="/" className="hover:text-[var(--color-brand-navy)] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-[var(--color-brand-navy)] transition-colors">Shop</Link>
        <span>/</span>
        <Link to={`/categories/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-[var(--color-brand-navy)] transition-colors">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-[var(--color-brand-charcoal)] font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: High Fashion Gallery */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 shrink-0">
            {product.images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`w-20 h-28 border transition-all relative overflow-hidden ${
                  activeImageIndex === idx
                    ? 'border-[var(--color-brand-navy)] ring-2 ring-[var(--color-brand-navy)]'
                    : 'border-gray-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${product.name} angle ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>

          {/* Main Visual Frame */}
          <div className="flex-1 aspect-[3/4] bg-gray-100 border border-gray-200 relative overflow-hidden group shadow-sm">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute top-4 left-4 bg-[var(--color-brand-navy)] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 shadow">
              {product.category}
            </div>

            <button
              onClick={handleToggleWishlist}
              className="absolute top-4 right-4 p-2.5 bg-white/90 rounded-full shadow hover:bg-white transition-colors"
              aria-label="Toggle Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-colors ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="border-b border-gray-200 pb-6 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">
              {product.category} • SKU: {product.sku}
            </span>
            <h1 className="font-playfair text-3xl md:text-4xl text-[var(--color-brand-navy)] mt-2 mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mt-2">
              <span className="text-2xl font-light text-[var(--color-brand-navy)]">
                ₦ {(product.salePrice || product.price).toLocaleString()}
              </span>
              {product.salePrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₦ {product.price.toLocaleString()}
                </span>
              )}
              <span className="text-xs font-semibold px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200">
                In Stock ({product.stock} ready in Lagos atelier)
              </span>
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-charcoal)]">
                Color: <span className="font-light text-gray-600">{selectedColor}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={color.name}
                  className={`w-9 h-9 rounded-full transition-all flex items-center justify-center ${
                    selectedColor === color.name
                      ? 'ring-2 ring-[var(--color-brand-navy)] ring-offset-2 scale-105 shadow'
                      : 'hover:scale-105 opacity-80 hover:opacity-100 border border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                >
                  {selectedColor === color.name && (
                    <span className="w-2 h-2 rounded-full bg-white shadow" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-charcoal)]">
                Size: <span className="font-light text-gray-600">{selectedSize}</span>
              </span>
              <Link to="/size-guide" className="text-xs text-[var(--color-brand-purple)] hover:underline tracking-wider font-semibold">
                Size Guide →
              </Link>
            </div>

            {product.isOneSize ? (
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="px-6 py-3 border-2 border-[var(--color-brand-navy)] bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold shadow-sm"
                >
                  One Size (Fluid Drape)
                </button>
                <span className="text-xs text-gray-500 font-light italic">
                  Engineered to flatter UK 8 through UK 20
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-11 px-4 text-xs font-semibold uppercase tracking-wider border transition-all ${
                      selectedSize === size
                        ? 'border-[var(--color-brand-navy)] bg-[var(--color-brand-navy)] text-white shadow-sm'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quantity & CTAs */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex gap-3">
              <div className="flex items-center border border-gray-300 bg-white px-3 py-2 shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-500 hover:text-black px-2 py-1"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="text-gray-500 hover:text-black px-2 py-1"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-brand-purple)] transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
                Add to Bag • ₦ {((product.salePrice || product.price) * quantity).toLocaleString()}
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full py-3.5 bg-[var(--color-brand-purple)] text-white text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity shadow"
            >
              Instant Checkout with Paystack →
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="bg-white p-4 border border-gray-200 mb-8 grid grid-cols-2 gap-3 text-xs text-gray-600 font-light">
            <div className="flex items-center gap-2"><span>🚚</span><span>Lagos & Nationwide Delivery</span></div>
            <div className="flex items-center gap-2"><span>✨</span><span>Hand-Finished Nigerian Silk</span></div>
            <div className="flex items-center gap-2"><span>🔒</span><span>Paystack 256-Bit Encryption</span></div>
            <div className="flex items-center gap-2"><span>🔄</span><span>7-Day Return & Exchange Policy</span></div>
          </div>

          {/* Accordion Tabs */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex border-b border-gray-200 gap-6 text-xs uppercase tracking-widest font-semibold">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'details' ? 'text-[var(--color-brand-navy)]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Description
                {activeTab === 'details' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-brand-navy)]" />}
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'care' ? 'text-[var(--color-brand-navy)]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Fabric & Care
                {activeTab === 'care' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-brand-navy)]" />}
              </button>
              <button
                onClick={() => setActiveTab('delivery')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'delivery' ? 'text-[var(--color-brand-navy)]' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Shipping & Lagos Dispatch
                {activeTab === 'delivery' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-brand-navy)]" />}
              </button>
            </div>

            <div className="py-5 text-sm text-gray-600 font-light leading-relaxed">
              {activeTab === 'details' && <p>{product.description}</p>}
              {activeTab === 'care' && <p>{product.fabricCare}</p>}
              {activeTab === 'delivery' && (
                <div className="space-y-2">
                  <p>• <strong>Lagos Island & Mainland:</strong> 24–48 hours delivery (₦3,000 flat fee or Free over ₦100,000).</p>
                  <p>• <strong>Nationwide (Abuja, Port Harcourt, Kano, etc.):</strong> 2–4 working days via DHL/GIG Logistics.</p>
                  <p>• <strong>International Shipping:</strong> 5–7 business days with DHL Express.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
