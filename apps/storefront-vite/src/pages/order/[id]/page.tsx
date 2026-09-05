
import React from 'react';
import {  Link , useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import Logo from '../../../components/Logo';

export default function OrderTrackingPage() {
  const params = useParams();
  const { orders } = useAuth();
  const [orderId, setOrderId] = React.useState<string>('');

  React.useEffect(() => {
    if (params.id) setOrderId(params.id);
  }, [params.id]);

  const order = orders.find(
    (o) => o.orderNumber.toLowerCase() === orderId.toLowerCase() || o.id === orderId
  ) || {
    id: 'ord-sample',
    orderNumber: orderId || 'IFEMI-92841',
    createdAt: new Date().toISOString(),
    totalAmount: 48000,
    paymentStatus: 'PAID' as const,
    orderStatus: 'CONFIRMED' as const,
    deliveryStatus: 'Order confirmed by Ifẹ́mi Lifestyle. Tailoring team is preparing your package in Lagos.',
    items: [
      { name: 'Midnight Elegance Silk Kaftan', quantity: 1, price: 45000, size: 'One Size', color: 'Midnight Navy' }
    ],
    shippingAddress: {
      fullName: 'Valued Customer',
      address: 'Plot 12 Admiralty Way',
      city: 'Lekki',
      state: 'Lagos',
      phone: '+234 800 000 0000'
    }
  };

  const steps = [
    { title: 'Order Confirmed', desc: 'Payment verified via Paystack', status: 'completed' },
    { title: 'Tailoring & Packaging', desc: 'Inspected and wrapped in luxury box', status: order.orderStatus === 'PROCESSING' || order.orderStatus === 'SHIPPED' || order.orderStatus === 'DELIVERED' ? 'completed' : 'current' },
    { title: 'Dispatched with Courier', desc: 'Handed to Lagos Courier / Nationwide Freight', status: order.orderStatus === 'SHIPPED' || order.orderStatus === 'DELIVERED' ? 'completed' : 'pending' },
    { title: 'Delivered', desc: 'Delivered to your doorstep', status: order.orderStatus === 'DELIVERED' ? 'completed' : 'pending' }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Header Notification */}
        <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm mb-10 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold block mb-1">
            Payment Confirmed
          </span>
          <h1 className="font-playfair text-3xl md:text-4xl text-[var(--color-brand-navy)] mb-2">
            Thank You for Your Order
          </h1>
          <p className="text-gray-500 font-light text-sm">
            Order Reference: <strong className="text-[var(--color-brand-charcoal)] font-mono">{order.orderNumber}</strong>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            A confirmation receipt and dispatch notifications have been logged.
          </p>
        </div>

        {/* Live Timeline Tracker */}
        <div className="bg-white p-8 border border-gray-200 mb-10">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)] mb-6 border-b border-gray-100 pb-3">
            Delivery Status Timeline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-start md:items-center text-left md:text-center relative">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-3 ${
                    step.status === 'completed'
                      ? 'bg-emerald-600 text-white'
                      : step.status === 'current'
                      ? 'bg-[var(--color-brand-purple)] text-white ring-4 ring-[var(--color-brand-lavender)]'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {step.status === 'completed' ? '✓' : idx + 1}
                </div>
                <h4 className="font-playfair text-sm font-semibold text-gray-900">{step.title}</h4>
                <p className="text-[11px] text-gray-400 font-light mt-1">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 text-xs text-gray-600 font-light flex items-center justify-between">
            <span><strong>Latest Courier Update:</strong> {order.deliveryStatus}</span>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="text-[var(--color-brand-purple)] font-bold uppercase tracking-wider text-[10px] hover:underline">
              WhatsApp Concierge Support →
            </a>
          </div>
        </div>

        {/* Items & Receipt Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)] mb-4 border-b pb-2">
              Purchased Pieces
            </h3>
            <div className="space-y-4">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs border-b border-gray-50 pb-3">
                  <div>
                    <span className="font-playfair text-sm font-semibold text-gray-900 block">{item.name}</span>
                    <span className="text-gray-400 uppercase tracking-wider text-[10px]">
                      Qty: {item.quantity} {item.size && `• Size: ${item.size}`} {item.color && `• ${item.color}`}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    ₦ {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-sm font-bold text-[var(--color-brand-navy)]">
              <span>Total Paid</span>
              <span>₦ {order.totalAmount.toLocaleString()}</span>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-navy)] mb-4 border-b pb-2">
                Shipping Destination
              </h3>
              <div className="text-xs text-gray-600 font-light space-y-1">
                <p className="font-semibold text-gray-900">{order.shippingAddress.fullName}</p>
                <p>{order.shippingAddress.address}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
                <p className="pt-2"><strong>Phone:</strong> {order.shippingAddress.phone}</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200 flex gap-4">
              <Link
                to="/shop"
                className="flex-1 py-3 text-center bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-brand-purple)] transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                to="/account"
                className="flex-1 py-3 text-center border border-gray-300 text-gray-700 text-xs uppercase tracking-widest font-bold hover:border-black transition-colors"
              >
                My Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
