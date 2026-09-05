import Logo from '../../components/Logo';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const nigerianDeliveryZones = [
  { state: 'Lagos - Island (Ikoyi, Lekki, VI, Ajah)', fee: 3000, days: '24-48 hours' },
  { state: 'Lagos - Mainland (Ikeja, Surulere, Yaba, Maryland)', fee: 3000, days: '24-48 hours' },
  { state: 'Abuja (FCT)', fee: 6000, days: '2-3 working days' },
  { state: 'Rivers (Port Harcourt)', fee: 6000, days: '2-3 working days' },
  { state: 'Oyo (Ibadan)', fee: 5000, days: '2-3 working days' },
  { state: 'Ogun (Abeokuta / Sagamu)', fee: 5000, days: '2-3 working days' },
  { state: 'Delta (Asaba / Warri)', fee: 6500, days: '3-4 working days' },
  { state: 'Enugu', fee: 6500, days: '3-4 working days' },
  { state: 'Kano', fee: 7000, days: '3-5 working days' },
  { state: 'Other Nationwide Nigerian State', fee: 7000, days: '3-5 working days' }
];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, subtotal, discountAmount, discountCode, clearCart } = useCart();
  const { user, addOrder } = useAuth();

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    address: user?.addresses[0]?.addressLine1 || '',
    city: user?.addresses[0]?.city || 'Lekki',
    state: nigerianDeliveryZones[0]?.state || 'Lagos - Island (Ikoyi, Lekki, VI, Ajah)',
    deliveryNotes: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackModal, setPaystackModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const selectedZone = nigerianDeliveryZones.find((z) => z.state === formData.state) || nigerianDeliveryZones[0];
  const deliveryFee = subtotal > 100000 && formData.state?.includes('Lagos') ? 0 : selectedZone?.fee || 3000;
  const grandTotal = Math.max(0, subtotal - discountAmount + (items.length > 0 ? deliveryFee : 0));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInitiatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.address || !formData.phone) {
      setErrorMsg('Please complete all required customer and delivery fields.');
      return;
    }
    if (items.length === 0) {
      setErrorMsg('Your bag is empty.');
      return;
    }
    setErrorMsg('');
    setPaystackModal(true);
  };

  const handleConfirmPaystack = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const orderNumber = `IFEMI-${Math.floor(10000 + Math.random() * 90000)}`;
      
      const newOrderId = addOrder({
        orderNumber,
        totalAmount: grandTotal,
        paymentStatus: 'PAID',
        orderStatus: 'CONFIRMED',
        deliveryStatus: `Order confirmed. Preparing dispatch to ${formData.city}, ${formData.state.split(' ')[0]}.`,
        items: items.map((i) => ({
          name: i.name,
          quantity: i.quantity,
          price: i.price,
          size: i.size || undefined,
          color: i.color || undefined
        })),
        shippingAddress: {
          fullName: `${formData.firstName} ${formData.lastName}`,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          phone: formData.phone
        }
      });

      clearCart();
      setIsProcessing(false);
      setPaystackModal(false);
      navigate(`/order/${orderNumber}`);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--color-brand-cream)] pt-32 px-4 flex flex-col items-center justify-center">
        <Logo className="mb-6" />
        <div className="bg-white p-12 border border-gray-200 text-center max-w-md w-full shadow-sm">
          <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-2">No Items to Checkout</h2>
          <p className="text-gray-500 font-light text-xs mb-6">Your shopping bag is currently empty.</p>
          <Link to="/shop" className="inline-block px-6 py-3 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold">
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)]">
        {/* Left: Form Flow */}
        <div className="lg:col-span-7 p-6 md:p-12 lg:p-16 bg-white border-r border-gray-200">
          <div className="mb-8">
            <Logo />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold block mt-3">
              Secure Checkout • 256-Bit SSL Encryption
            </span>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleInitiatePayment} className="space-y-10">
            {/* 1. Contact Info */}
            <section>
              <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)]">
                  1. Contact Information
                </h2>
                {!user && (
                  <Link to="/login" className="text-xs text-[var(--color-brand-purple)] hover:underline font-light">
                    Already have an account? Sign In
                  </Link>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. adaeze@example.com"
                    className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Phone Number (WhatsApp Preferred) *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+234 803 000 0000"
                    className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>
              </div>
            </section>

            {/* 2. Delivery Address */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)] mb-4 border-b border-gray-200 pb-2">
                2. Nigerian Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Adaeze"
                    className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Okonkwo"
                    className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Delivery Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House/Plot number, Street name, Estate / Apartment name"
                    className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">City / Area *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Lekki Phase 1, Ikeja, Maitama"
                    className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Delivery State / Region *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)] bg-white"
                  >
                    {nigerianDeliveryZones.map((z) => (
                      <option key={z.state} value={z.state}>
                        {z.state} — ₦{z.fee.toLocaleString()} ({z.days})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* 3. Payment Method */}
            <section>
              <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)] mb-4 border-b border-gray-200 pb-2">
                3. Secure Payment Provider
              </h2>
              <div className="border-2 border-[var(--color-brand-purple)] bg-[var(--color-brand-lavender)]/10 p-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[var(--color-brand-navy)]">Paystack Direct Gateway</span>
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[var(--color-brand-purple)] text-white font-bold">Verified</span>
                  </div>
                  <p className="text-xs text-gray-500 font-light mt-1">
                    Pay securely with Nigerian Debit Cards (Mastercard, Visa, Verve), Bank Transfer, or USSD.
                  </p>
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="w-full py-5 bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] text-xs uppercase tracking-[0.25em] font-bold hover:bg-[var(--color-brand-purple)] transition-colors duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              <span>Pay ₦ {grandTotal.toLocaleString()} with Paystack</span>
              <span>🔒</span>
            </button>
          </form>
        </div>

        {/* Right: Order Summary Breakdown */}
        <div className="lg:col-span-5 p-6 md:p-12 lg:p-16 bg-gray-50 flex flex-col justify-between">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-gray-800 mb-6 pb-2 border-b border-gray-300">
              Bag Summary ({items.reduce((s, i) => s + i.quantity, 0)} Pieces)
            </h2>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 text-xs font-light">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-16 bg-gray-200 border border-gray-300 flex items-center justify-center text-[8px] text-gray-400 shrink-0">
                      {item.name.slice(0, 8)}
                    </div>
                    <div>
                      <h4 className="font-playfair text-sm text-gray-900 font-semibold">{item.name}</h4>
                      <p className="text-gray-500 uppercase tracking-wider text-[10px]">
                        Qty: {item.quantity} {item.size && `• Size: ${item.size}`} {item.color && `• Color: ${item.color}`}
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 shrink-0">
                    ₦ {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-300 pt-4 space-y-2 text-xs font-light text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦ {subtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Promo Code ({discountCode})</span>
                  <span>- ₦ {discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Delivery ({selectedZone?.days})</span>
                <span>{deliveryFee === 0 ? 'FREE' : `₦ ${deliveryFee.toLocaleString()}`}</span>
              </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4 mt-4 flex justify-between items-end">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-gray-900 block">Total Due</span>
                <span className="text-[10px] text-gray-400">Includes Nigerian VAT</span>
              </div>
              <span className="font-playfair text-3xl text-[var(--color-brand-navy)] font-light">
                ₦ {grandTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-[10px] text-gray-400 font-light space-y-1">
            <p>• Ifẹ́mi Lifestyle pieces are hand-finished to order.</p>
            <p>• Tracking code sent via SMS & WhatsApp upon dispatch.</p>
          </div>
        </div>
      </div>

      {/* Paystack Simulation Gateway Modal */}
      {paystackModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white max-w-md w-full p-8 shadow-2xl border border-gray-200 text-center relative">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold block mb-1">Paystack Gateway</span>
            <h3 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-1">Authorize Payment</h3>
            <p className="text-sm font-bold text-[var(--color-brand-purple)] mb-6">
              ₦ {grandTotal.toLocaleString()}
            </p>

            <div className="bg-gray-50 p-4 border border-gray-200 text-xs text-left mb-6 space-y-1 font-light">
              <p><strong>Customer:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Merchant:</strong> Ifẹ́mi Lifestyle Ltd</p>
              <p><strong>Reference:</strong> PAY_{Date.now().toString().slice(-8)}</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                disabled={isProcessing}
                onClick={() => setPaystackModal(false)}
                className="flex-1 py-3 border border-gray-300 text-xs uppercase tracking-widest text-gray-600 hover:border-black font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleConfirmPaystack}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold transition-colors"
              >
                {isProcessing ? 'Verifying...' : 'Authorize (Success)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
