
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, subtotal, discountCode, discountAmount, applyDiscount, removeDiscount } = useCart();
  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      const res = applyDiscount(promoInput);
      setPromoFeedback(res);
    }
  };

  const estimatedDelivery = subtotal > 100000 || items.length === 0 ? 0 : 3000;
  const finalTotal = Math.max(0, subtotal - discountAmount + (items.length > 0 ? estimatedDelivery : 0));

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">
              Shopping Bag
            </span>
            <h1 className="font-playfair text-4xl text-[var(--color-brand-navy)] mt-1">
              Your Selection ({items.reduce((s, i) => s + i.quantity, 0)})
            </h1>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors"
            >
              Clear Entire Bag
            </button>
          )}
        </header>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-20 h-28 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 flex items-center justify-center text-[9px] text-gray-400 font-light border border-gray-200 text-center p-2">
                      {item.name.slice(0, 15)}...
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-[var(--color-brand-charcoal)]">
                        {item.name}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-1 uppercase tracking-wider">
                        {item.size && <span>Size: <strong className="text-gray-800">{item.size}</strong></span>}
                        {item.color && <span>Color: <strong className="text-gray-800">{item.color}</strong></span>}
                      </div>
                      <div className="text-sm font-semibold text-[var(--color-brand-navy)] mt-2">
                        ₦ {item.price.toLocaleString()} each
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                    <div className="flex items-center border border-gray-300 bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-gray-500 hover:text-black transition-colors text-sm"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-3 text-xs font-bold text-gray-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-gray-500 hover:text-black transition-colors text-sm"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[90px]">
                      <span className="font-light text-base text-[var(--color-brand-navy)]">
                        ₦ {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1"
                      title="Remove item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              {/* Free Delivery threshold alert */}
              <div className="bg-[var(--color-brand-navy)]/5 p-4 border border-[var(--color-brand-navy)]/10 text-xs text-[var(--color-brand-navy)] flex items-center justify-between">
                <span>🚚 Orders over ₦100,000 qualify for <strong>Complimentary Lagos Delivery</strong>.</span>
                <Link to="/shop" className="font-bold underline uppercase tracking-widest text-[10px]">Add More Pieces</Link>
              </div>
            </div>

            {/* Order Summary & Coupon Card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white p-8 shadow-sm border border-gray-200">
                <h2 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] mb-6 pb-3 border-b border-gray-200">
                  Order Summary
                </h2>

                {/* Promo Code Box */}
                <form onSubmit={handleApplyPromo} className="mb-6">
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                    Promotional Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      placeholder="Try WELCOME10"
                      className="flex-1 border border-gray-300 px-3 py-2 text-xs uppercase tracking-wider focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-brand-purple)] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoFeedback && (
                    <p className={`text-xs mt-2 font-light ${promoFeedback.success ? 'text-emerald-600' : 'text-red-500'}`}>
                      {promoFeedback.message}
                    </p>
                  )}
                  {discountCode && (
                    <div className="mt-3 flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 p-2 border border-emerald-200">
                      <span>Code <strong>{discountCode}</strong> Applied</span>
                      <button onClick={removeDiscount} className="underline text-[10px]">Remove</button>
                    </div>
                  )}
                </form>

                {/* Calculation Rows */}
                <div className="space-y-3 text-sm font-light border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Bag Subtotal</span>
                    <span>₦ {subtotal.toLocaleString()}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>VIP Discount</span>
                      <span>- ₦ {discountAmount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Shipping (Lagos)</span>
                    <span>{estimatedDelivery === 0 ? 'FREE' : `₦ ${estimatedDelivery.toLocaleString()}`}</span>
                  </div>
                </div>

                {/* Grand Total */}
                <div className="flex justify-between items-end border-t-2 border-gray-200 pt-4 mb-8">
                  <div>
                    <span className="uppercase tracking-widest text-xs font-bold text-gray-800 block">Total</span>
                    <span className="text-[10px] text-gray-400">VAT included</span>
                  </div>
                  <span className="text-2xl font-light text-[var(--color-brand-navy)] font-playfair">
                    ₦ {finalTotal.toLocaleString()}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full py-4 text-center bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[var(--color-brand-purple)] transition-colors shadow-md"
                >
                  Proceed to Checkout →
                </Link>

                <div className="mt-4 text-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                    🔒 256-Bit SSL Encrypted Checkout
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-gray-200 p-16 text-center max-w-xl mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-[var(--color-brand-lavender)]/30 flex items-center justify-center mx-auto mb-4 text-[var(--color-brand-purple)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
            </div>
            <h2 className="font-playfair text-3xl text-[var(--color-brand-navy)] mb-2">Your Bag is Empty</h2>
            <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">
              Explore our new silk kaftans, tailored two-piece sets, and curated home diffusers.
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-4 bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] uppercase tracking-[0.2em] text-xs font-bold hover:bg-[var(--color-brand-purple)] transition-colors"
            >
              Explore Collections
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
