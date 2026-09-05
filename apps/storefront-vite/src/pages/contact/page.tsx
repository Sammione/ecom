
import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Bespoke Order Inquiry', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-14 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Concierge & Inquiries
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Contact Ifẹ́mi Lifestyle
          </h1>
          <p className="text-gray-500 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Our Lagos styling concierge is available to assist with bespoke order consultations, sizing inquiries, and delivery updates.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="font-playfair text-2xl mb-6 border-b border-white/10 pb-4">
                Transatlantic Concierge
              </h2>

              <div className="space-y-6 text-xs font-light text-white/80 leading-relaxed">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
                  <h4 className="uppercase tracking-widest text-[var(--color-brand-lavender)] font-bold text-[10px] mb-1 flex items-center gap-1.5">
                    <span>🇳🇬</span> Lagos Flagship Atelier
                  </h4>
                  <p>Plot 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
                  <p className="mt-1 text-white font-medium">Direct Line: +234 (0) 803 123 4567</p>
                  <p className="text-white/60">Hours: Mon – Fri: 9:00 AM – 6:00 PM (WAT)</p>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
                  <h4 className="uppercase tracking-widest text-[var(--color-brand-lavender)] font-bold text-[10px] mb-1 flex items-center gap-1.5">
                    <span>🇬🇧</span> London Concierge Studio
                  </h4>
                  <p>Mayfair, London W1K, United Kingdom</p>
                  <p className="mt-1 text-white font-medium">UK Concierge: +44 (0) 20 7946 0912</p>
                  <p className="text-white/60">Hours: Mon – Fri: 9:00 AM – 5:30 PM (GMT)</p>
                </div>

                <div>
                  <h4 className="uppercase tracking-widest text-[var(--color-brand-lavender)] font-bold text-[10px] mb-1">
                    Email Inquiries
                  </h4>
                  <p>concierge@ifemi.ng (Global &amp; UK Inquiries)</p>
                  <p>orders@ifemi.ng</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span>💬 Chat on WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="font-playfair text-2xl text-[var(--color-brand-navy)] mb-2">Message Dispatched</h3>
                <p className="text-gray-500 font-light text-xs max-w-sm mx-auto mb-6">
                  Thank you, {form.name}. Our styling and customer care team will respond within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 border border-gray-300 text-xs uppercase tracking-widest font-semibold hover:border-black"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] mb-4">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adaeze Okonkwo"
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="adaeze@example.com"
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+234 803 000 0000"
                      className="w-full h-11 border border-gray-300 px-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Subject of Inquiry</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full h-11 border border-gray-300 px-4 text-xs font-light focus:outline-none focus:border-[var(--color-brand-navy)] bg-white"
                    >
                      <option>Bespoke Order / Sizing Inquiry</option>
                      <option>Delivery & Tracking Status</option>
                      <option>Wholesale & Corporate Gifting</option>
                      <option>Returns & Exchanges</option>
                      <option>Press & Collaborations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">Your Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How may our concierge assist you today?"
                    className="w-full border border-gray-300 p-4 text-sm font-light focus:outline-none focus:border-[var(--color-brand-navy)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-[var(--color-brand-purple)] transition-colors shadow"
                >
                  Dispatch Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
