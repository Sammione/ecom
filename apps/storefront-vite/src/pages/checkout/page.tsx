import Logo from '../../components/Logo';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useCurrency } from '../../context/CurrencyContext';

const ukDeliveryZones = [
  { state: 'London & Greater London (Royal Mail Tracked 24)', fee: 6.5, days: '1-2 business days' },
  { state: 'England, Wales & Scotland (Royal Mail Tracked 48)', fee: 6.5, days: '2-3 business days' },
  { state: 'Northern Ireland & Channel Islands (DPD)', fee: 8.5, days: '2-3 business days' }
];

const nigerianDeliveryZones = [
  { state: 'Lagos - Island (Ikoyi, Lekki, VI, Ajah)', fee: 3500, days: '24-48 hours' },
  { state: 'Lagos - Mainland (Ikeja, Surulere, Yaba, Maryland)', fee: 3500, days: '24-48 hours' },
  { state: 'Abuja (FCT)', fee: 6000, days: '2-3 working days' },
  { state: 'Rivers (Port Harcourt)', fee: 6000, days: '2-3 working days' },
  { state: 'Oyo (Ibadan)', fee: 5500, days: '2-3 working days' },
  { state: 'Ogun (Abeokuta / Sagamu)', fee: 5500, days: '2-3 working days' },
  { state: 'Delta (Asaba / Warri)', fee: 6500, days: '3-4 working days' },
  { state: 'Enugu', fee: 6500, days: '3-4 working days' },
  { state: 'Kano', fee: 7000, days: '3-5 working days' },
  { state: 'Other Nationwide Nigerian State', fee: 7000, days: '3-5 working days' }
];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, subtotal, discountAmount, discountCode, clearCart } = useCart();
  const { user, addOrder } = useAuth();
  const { currency, setCurrency, formatPrice } = useCurrency();

  const [country, setCountry] = useState<'UK' | 'NIGERIA'>('UK');

  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    address: user?.addresses[0]?.addressLine1 || '',
    city: user?.addresses[0]?.city || 'London',
    postalCode: user?.addresses[0]?.postalCode || '',
    state: ukDeliveryZones[0].state,
    deliveryNotes: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const activeZones = country === 'UK' ? ukDeliveryZones : nigerianDeliveryZones;
  const selectedZone = activeZones.find((z) => z.state === formData.state) || activeZones[0];

  // Delivery fee calculation
  let deliveryFee = selectedZone.fee;
  if (country === 'UK') {
    if (currency === 'GBP') {
      deliveryFee = subtotal > 160000 ? 0 : 6.5;
    } else {
      deliveryFee = subtotal > 100000 ? 0 : 10000;
    }
  } else {
    // Nigeria
    if (currency === 'GBP') {
      deliveryFee = subtotal > 160000 ? 0 : 4.0;
    } else {
      deliveryFee = subtotal > 100000 && formData.state.includes('Lagos') ? 0 : selectedZone.fee;
    }
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + (items.length > 0 ? deliveryFee : 0));

  const handleCountryChange = (newCountry: 'UK' | 'NIGERIA') => {
    setCountry(newCountry);
    if (newCountry === 'UK') {
      setFormData(prev => ({
        ...prev,
        city: 'London',
        state: ukDeliveryZones[0].state
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        city: 'Lagos',
        state: nigerianDeliveryZones[0].state
      }));
    }
  };

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
    setPaymentModal(true);
  };

  const handleConfirmPayment = async () => {
    setIsProcessing(true);

    const prefix = country === 'UK' ? 'IFEMI-UK' : 'IFEMI-NG';
    const orderNumber = `${prefix}-${Math.floor(10000 + Math.random() * 90000)}`;

    // Call active backend API in background
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id,
          cartItems: items,
          currency,
          shippingRegion: country,
          shippingAddress: {
            country,
            ...formData
          }
        })
      });
    } catch (e) {
      // Graceful fallback to client context
    }

    setTimeout(() => {
      addOrder({
        orderNumber,
        totalAmount: grandTotal,
        paymentStatus: 'PAID',
        orderStatus: 'CONFIRMED',
        deliveryStatus: `Order confirmed. Preparing dispatch to ${formData.city}, ${country === 'UK' ? 'United Kingdom 🇬🇧' : 'Nigeria 🇳🇬'}.`,
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
      setPaymentModal(false);
      navigate(`/order/${orderNumber}`);
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--color-brand-cream)] pt-32 px-4 flex flex-col items-center justify-center">
        <h1 className="font-playfair text-3xl text-[var(--color-brand-navy)] mb-3">No Items in Bag</h1>
        <p className="text-gray-500 font-light text-sm mb-6">Select pieces before proceeding to checkout.</p>
        <Link to="/shop" className="px-8 py-3.5 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold">
          Explore Shop
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Transatlantic Express Checkout
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-[var(--color-brand-navy)] mt-2">
            Order &amp; Dispatch
          </h1>
          <p className="text-xs text-gray-500 font-light mt-1">
            Fulfillment from London Studio 🇬🇧 &amp; Lagos Atelier 🇳🇬
          </p>
        </header>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs text-center font-medium">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Customer & Delivery Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-gray-200 shadow-sm">
            <form onSubmit={handleInitiatePayment} className="space-y-8">
              {/* Destination Country Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--color-brand-navy)] mb-2 font-bold">
                  Destination Country / Region *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleCountryChange('UK')}
                    className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-2 transition-all ${
                      country === 'UK'
                        ? 'border-[var(--color-brand-navy)] bg-[var(--color-brand-navy)] text-white shadow-sm'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <span>🇬🇧</span> United Kingdom (Domestic)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCountryChange('NIGERIA')}
                    className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border flex items-center justify-center gap-2 transition-all ${
                      country === 'NIGERIA'
                        ? 'border-[var(--color-brand-navy)] bg-[var(--color-brand-navy)] text-white shadow-sm'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <span>🇳🇬</span> Nigeria (Nationwide)
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <section>
                <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                  <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)]">
                    1. Contact Details
                  </h2>
                  {!user && (
                    <Link to="/login" className="text-xs text-[var(--color-brand-purple)] hover:underline font-light">
                      Sign In for Fast Checkout
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
                      placeholder="e.g. adaeze@example.co.uk"
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                      Phone Number (WhatsApp or Direct) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={country === 'UK' ? '+44 7123 456789' : '+234 803 000 0000'}
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                </div>
              </section>

              {/* Delivery Address */}
              <section>
                <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)] mb-4 border-b border-gray-200 pb-2">
                  2. {country === 'UK' ? 'UK Shipping Address' : 'Nigerian Shipping Address'}
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
                    <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder={country === 'UK' ? 'Flat/House number, Street name' : 'House number, Street, Estate'}
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">City / Town *</label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder={country === 'UK' ? 'e.g. London, Manchester' : 'e.g. Lagos, Abuja'}
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">
                      {country === 'UK' ? 'Postcode *' : 'State / Zone *'}
                    </label>
                    {country === 'UK' ? (
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="e.g. W1K 1AB"
                        className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)] uppercase"
                      />
                    ) : (
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full h-11 border border-gray-300 px-3 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)] bg-white"
                      >
                        {nigerianDeliveryZones.map((zone) => (
                          <option key={zone.state} value={zone.state}>
                            {zone.state}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {country === 'UK' && (
                    <div className="md:col-span-2">
                      <label className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">Delivery Service</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full h-11 border border-gray-300 px-3 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)] bg-white"
                      >
                        {ukDeliveryZones.map((zone) => (
                          <option key={zone.state} value={zone.state}>
                            {zone.state} — {zone.days}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </section>

              {/* Payment Gateway Preview */}
              <section className="pt-2 border-t border-gray-200">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xs mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]">
                      Payment Currency:
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCurrency('GBP')}
                        className={`px-2 py-1 text-xs font-bold uppercase transition-all ${
                          currency === 'GBP' ? 'bg-[var(--color-brand-purple)] text-white' : 'bg-white border text-gray-600'
                        }`}
                      >
                        £ GBP (Stripe &amp; UK Cards)
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrency('NGN')}
                        className={`px-2 py-1 text-xs font-bold uppercase transition-all ${
                          currency === 'NGN' ? 'bg-[var(--color-brand-purple)] text-white' : 'bg-white border text-gray-600'
                        }`}
                      >
                        ₦ NGN (Paystack)
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-brand-navy)] text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-[var(--color-brand-purple)] transition-colors shadow-lg"
                >
                  Confirm &amp; Proceed to Payment ({formatPrice(grandTotal)}) →
                </button>
              </section>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-5 bg-white p-8 border border-gray-200 shadow-sm h-fit">
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-6 border-b border-gray-200 pb-3">
              Order Summary ({items.reduce((s, i) => s + i.quantity, 0)} Items)
            </h3>

            <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto pr-2 mb-6">
              {items.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <span className="text-gray-500 font-light">
                      Qty: {item.quantity} {item.size && `• Size: ${item.size}`}
                    </span>
                  </div>
                  <span className="font-semibold text-[var(--color-brand-navy)]">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-xs font-light border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600">
                  <span>Discount</span>
                  <span>- {formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-600">
                <span>Shipping ({country === 'UK' ? 'UK Domestic' : 'Nigeria'})</span>
                <span>{deliveryFee === 0 ? 'FREE' : formatPrice(deliveryFee)}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline border-t-2 border-gray-200 pt-4 mb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-800">Total Payable</span>
              <span className="font-playfair text-2xl font-bold text-[var(--color-brand-navy)]">
                {formatPrice(grandTotal)}
              </span>
            </div>

            <div className="text-[10px] text-gray-400 text-center leading-relaxed">
              Dispatched with care from our London Studio or Lagos Atelier. Tracked door-to-door.
            </div>
          </div>
        </div>
      </div>

      {/* Payment Gateway Modal (Paystack / Stripe) */}
      {paymentModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8 shadow-2xl border border-gray-200 animate-fadeIn">
            <div className="text-center mb-6">
              <Logo className="mx-auto mb-3" />
              <h3 className="font-playfair text-xl text-[var(--color-brand-navy)]">
                {currency === 'GBP' ? 'Stripe UK Checkout' : 'Paystack Secure Checkout'}
              </h3>
              <p className="text-xs text-gray-500 font-light mt-1">
                Authorizing {formatPrice(grandTotal)} for Ifẹ́mi Lifestyle Ltd.
              </p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-200 text-xs space-y-2 mb-6 text-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-400">Customer:</span>
                <span className="font-semibold">{formData.firstName} {formData.lastName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Destination:</span>
                <span className="font-semibold">{formData.city}, {country === 'UK' ? 'United Kingdom 🇬🇧' : 'Nigeria 🇳🇬'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Payment Gateway:</span>
                <span className="font-semibold text-[var(--color-brand-purple)]">
                  {currency === 'GBP' ? 'Stripe & UK Card Processing' : 'Paystack Nigeria'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirmPayment}
                disabled={isProcessing}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold transition-colors disabled:opacity-50"
              >
                {isProcessing ? 'Authorizing Payment...' : `Authorize ${formatPrice(grandTotal)}`}
              </button>
              <button
                onClick={() => setPaymentModal(false)}
                disabled={isProcessing}
                className="w-full py-2.5 border border-gray-300 text-gray-600 hover:text-black text-xs uppercase tracking-widest font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
