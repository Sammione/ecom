
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'How does delivery work across Lagos and nationwide Nigerian states?',
    a: 'For orders within Lagos (Island and Mainland), deliveries are completed within 24–48 hours via dedicated dispatch. For orders across Abuja, Port Harcourt, and other states, delivery takes 2–4 business days via DHL/GIG Logistics. Orders over ₦100,000 enjoy complimentary Lagos delivery.'
  },
  {
    q: 'Are Ifẹ́mi Lifestyle kaftans suitable for different body types?',
    a: 'Yes. Our signature kaftans feature an engineered One Size Fluid Drape with inner waist adjustments. They comfortably and beautifully flatter women from UK size 8 up to UK size 20.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We process all payments through Paystack, accepting Nigerian Naira debit cards (Mastercard, Visa, Verve), direct bank transfers, USSD, and Apple Pay where enabled. All transactions are 256-bit SSL encrypted.'
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We accept returns and exchanges for unworn garments with original tags attached within 7 days of delivery. Custom-tailored pieces or opened home diffusers cannot be returned.'
  },
  {
    q: 'Can I request bespoke sizing or custom lengths?',
    a: 'Yes, our Lagos atelier accommodates bespoke requests and custom hem lengths. Please contact our WhatsApp concierge before or immediately after placing your order.'
  },
  {
    q: 'How long do your botanical reed diffusers last?',
    a: 'Ifẹ́mi 250ml luxury reed diffusers provide a continuous aroma for 3 to 4 months. We recommend turning the natural reeds once per week for optimal projection.'
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Customer Care
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 font-light text-sm">
            Everything you need to know about our collections, delivery, and payment.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-playfair text-lg text-[var(--color-brand-charcoal)] font-semibold">
                  {faq.q}
                </span>
                <span className="text-xl font-light text-[var(--color-brand-purple)] shrink-0">
                  {openIdx === idx ? '−' : '+'}
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-[var(--color-brand-navy)] text-white p-8">
          <h3 className="font-playfair text-xl mb-2">Still have questions?</h3>
          <p className="text-xs text-white/70 font-light mb-4">Our Lagos styling team is available to assist.</p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-[var(--color-brand-lavender)] text-[var(--color-brand-navy)] text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors">
            Contact Concierge →
          </Link>
        </div>
      </div>
    </main>
  );
}
