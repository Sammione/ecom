import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'How does delivery work in the UK and Nigeria?',
    a: 'We operate domestic distribution hubs in both Lagos, Nigeria and London, United Kingdom. In the UK, delivery takes 2–3 business days via Royal Mail Tracked and DPD with zero customs duties. In Nigeria, Lagos delivery takes 24–48 hours, and nationwide delivery (Abuja, Port Harcourt, etc.) takes 2–4 days via DHL/GIG Logistics.'
  },
  {
    q: 'Can I pay in British Pounds (GBP) or Nigerian Naira (NGN)?',
    a: 'Yes. You can switch your currency anytime via the top header bar. We accept Paystack for Nigerian Naira cards and bank transfers, and Stripe / international card checkout for British Pound (£ GBP) payments.'
  },
  {
    q: 'Are Ifẹ́mi Lifestyle kaftans and trouser sets tailored to UK sizing?',
    a: 'Yes. Our signature kaftans feature our One Size Fluid Drape engineered to flatter silhouettes from UK size 8 to UK size 20. Our tailored trouser sets and loungewear pieces follow standard British sizing from UK 6 (XS) to UK 20 (XXL).'
  },
  {
    q: 'Are there any customs duties or taxes for UK orders?',
    a: 'No. Orders dispatched to UK addresses are shipped directly from our London Studio hub. You will not face any import tariffs, customs clearance delays, or unexpected handling charges.'
  },
  {
    q: 'What is your return and exchange policy in the UK and Nigeria?',
    a: 'We accept returns and exchanges for unworn garments with original tags intact within 7 days of delivery. UK customers can return items directly to our London Studio address, while Nigerian customers return to our Lagos Atelier.'
  },
  {
    q: 'Can I request bespoke sizing or custom hem alterations?',
    a: 'Yes, our Lagos atelier accommodates bespoke requests and custom hem lengths. Contact our concierge via WhatsApp in Lagos (+234) or London (+44) before placing your order.'
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Transatlantic Customer Care
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 font-light text-sm">
            Everything you need to know about our Lagos atelier, London studio, UK delivery, and multi-currency payments.
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
          <p className="text-xs text-white/70 font-light mb-4">Our Lagos &amp; London concierge team is available to assist.</p>
          <Link to="/contact" className="inline-block px-6 py-3 bg-[var(--color-brand-lavender)] text-[var(--color-brand-navy)] text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors">
            Contact Concierge →
          </Link>
        </div>
      </div>
    </main>
  );
}
