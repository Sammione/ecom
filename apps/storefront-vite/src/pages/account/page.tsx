
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export default function AccountPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as any) || 'orders';

  const { user, orders, logout, isAuthenticated, updateProfile } = useAuth();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'profile'>(initialTab);
  const [profileForm, setProfileForm] = useState({
    firstName: user?.firstName || 'Adaeze',
    lastName: user?.lastName || 'Okonkwo',
    phone: user?.phone || '+234 803 123 4567'
  });
  const [savedMsg, setSavedMsg] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 border-b border-gray-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">
              Client Portal
            </span>
            <h1 className="font-playfair text-4xl text-[var(--color-brand-navy)] mt-1">
              Welcome, {user?.firstName || 'Esteemed Client'}
            </h1>
            <p className="text-xs text-gray-500 font-light mt-1">
              {user?.email || 'client@ifemi.ng'} • VIP Member
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs uppercase tracking-widest text-red-500 hover:underline font-semibold"
          >
            Sign Out
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Navigation Tabs */}
          <aside className="lg:col-span-3">
            <div className="bg-white border border-gray-200 p-2 space-y-1">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-between ${
                  activeTab === 'orders'
                    ? 'bg-[var(--color-brand-navy)] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>My Orders</span>
                <span className="text-[10px] opacity-70">({orders.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('wishlist')}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-between ${
                  activeTab === 'wishlist'
                    ? 'bg-[var(--color-brand-navy)] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span>Saved Wishlist</span>
                <span className="text-[10px] opacity-70">({wishlist.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('addresses')}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === 'addresses'
                    ? 'bg-[var(--color-brand-navy)] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Address Book
              </button>

              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-[var(--color-brand-navy)] text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Account Details
              </button>
            </div>

            <div className="mt-6 bg-[var(--color-brand-navy)]/5 p-4 border border-[var(--color-brand-navy)]/10 text-xs text-gray-600 font-light">
              <p className="font-semibold text-[var(--color-brand-navy)] uppercase text-[10px] tracking-wider mb-1">
                Concierge Assistance
              </p>
              <p className="text-[11px] leading-relaxed">
                Need bespoke tailoring or delivery changes? Speak directly with our Lagos styling team on WhatsApp.
              </p>
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-[10px] uppercase tracking-widest font-bold text-[var(--color-brand-purple)] hover:underline"
              >
                Open WhatsApp →
              </a>
            </div>
          </aside>

          {/* Main Tab Content */}
          <section className="lg:col-span-9 bg-white border border-gray-200 p-8 shadow-sm">
            {/* 1. ORDERS TAB */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-6 pb-2 border-b border-gray-100">
                  Order History & Tracking
                </h2>

                {orders.length > 0 ? (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2 mb-4">
                          <div>
                            <span className="font-mono text-sm font-bold text-[var(--color-brand-navy)]">
                              {order.orderNumber}
                            </span>
                            <span className="text-xs text-gray-400 block font-light">
                              Placed on {new Date(order.createdAt).toLocaleDateString()}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`px-2.5 py-1 text-[10px] uppercase tracking-widest font-bold rounded ${
                              order.orderStatus === 'DELIVERED'
                                ? 'bg-emerald-100 text-emerald-800'
                                : order.orderStatus === 'SHIPPED'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {order.orderStatus}
                            </span>
                            <span className="font-bold text-sm text-gray-900">
                              ₦ {order.totalAmount.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Items in order */}
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs text-gray-600 font-light">
                              <span>{item.name} × {item.quantity} {item.size && `(${item.size})`}</span>
                              <span>₦ {(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-3 bg-gray-50 p-3">
                          <span className="text-gray-500 font-light">
                            <strong>Status:</strong> {order.deliveryStatus}
                          </span>
                          <Link
                            to={`/order/${order.orderNumber}`}
                            className="font-bold text-[var(--color-brand-purple)] uppercase tracking-wider text-[10px] hover:underline"
                          >
                            Live Tracking Timeline →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 font-light text-sm text-center py-12">
                    No orders placed yet. Explore our latest pieces in the shop.
                  </p>
                )}
              </div>
            )}

            {/* 2. WISHLIST TAB */}
            {activeTab === 'wishlist' && (
              <div>
                <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-6 pb-2 border-b border-gray-100">
                  Your Saved Wishlist
                </h2>

                {wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {wishlist.map((item) => (
                      <div key={item.productId} className="border border-gray-200 p-4 flex gap-4 items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{item.category}</span>
                          <h4 className="font-playfair text-base text-gray-900 font-semibold mt-0.5">{item.name}</h4>
                          <span className="text-sm font-light text-[var(--color-brand-navy)] block mt-1">
                            ₦ {item.price.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex flex-col gap-2 shrink-0">
                          <button
                            onClick={() => {
                              addItem({
                                productId: item.productId,
                                name: item.name,
                                price: item.price,
                                quantity: 1
                              });
                            }}
                            className="px-4 py-2 bg-[var(--color-brand-navy)] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[var(--color-brand-purple)] transition-colors"
                          >
                            + Bag
                          </button>
                          <button
                            onClick={() => removeFromWishlist(item.productId)}
                            className="text-[10px] uppercase tracking-wider text-red-500 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 font-light text-sm text-center py-12">
                    Your wishlist is currently empty. Click the heart icon on any product to save it.
                  </p>
                )}
              </div>
            )}

            {/* 3. ADDRESSES TAB */}
            {activeTab === 'addresses' && (
              <div>
                <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-6 pb-2 border-b border-gray-100">
                  Saved Delivery Addresses
                </h2>

                <div className="border border-gray-200 p-6 mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]">
                      Primary Delivery Address (Default)
                    </span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 font-bold uppercase">Active</span>
                  </div>
                  <p className="text-sm text-gray-700 font-light">Plot 12 Admiralty Way, Lekki Phase 1</p>
                  <p className="text-sm text-gray-700 font-light">Lagos Island, Lagos State, Nigeria</p>
                  <p className="text-xs text-gray-500 font-light mt-2">Recipient: Adaeze Okonkwo • +234 803 123 4567</p>
                </div>
              </div>
            )}

            {/* 4. PROFILE TAB */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-6 pb-2 border-b border-gray-100">
                  Personal Information
                </h2>

                {savedMsg && (
                  <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                    Profile details updated successfully.
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">First Name</label>
                    <input
                      type="text"
                      value={profileForm.firstName}
                      onChange={(e) => setProfileForm({ ...profileForm, firstName: e.target.value })}
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={profileForm.lastName}
                      onChange={(e) => setProfileForm({ ...profileForm, lastName: e.target.value })}
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={profileForm.phone}
                      onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-brand-purple)] transition-colors"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
