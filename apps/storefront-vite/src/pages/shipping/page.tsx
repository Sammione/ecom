
export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 border border-gray-200 shadow-sm">
        <header className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">Delivery Guidelines</span>
          <h1 className="font-playfair text-3xl md:text-4xl text-[var(--color-brand-navy)] mt-1">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs text-gray-400 mt-1">Reliable, insured delivery across Lagos, Nigeria, and worldwide.</p>
        </header>

        <div className="space-y-6 text-sm text-gray-700 font-light leading-relaxed">
          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">1. Lagos Deliveries (Island & Mainland)</h3>
          <p>
            • Orders placed before 12:00 PM (WAT) are processed for next-day dispatch.<br />
            • Delivery Fee: Flat rate of <strong>₦3,000</strong>.<br />
            • <strong>Complimentary Shipping:</strong> Orders valued at <strong>₦100,000 and above</strong> receive free Lagos delivery.
          </p>

          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">2. Nationwide Deliveries (Across Nigeria)</h3>
          <p>
            • We deliver to Abuja, Port Harcourt, Ibadan, Kano, Enugu, Asaba, and all other Nigerian states via certified courier partners (DHL / GIG Logistics).<br />
            • Timelines: <strong>2 – 4 working days</strong> from dispatch.<br />
            • Standard Nationwide Delivery Fee: <strong>₦5,000 – ₦7,000</strong> depending on state destination.
          </p>

          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">3. International Deliveries</h3>
          <p>
            • Global express shipping is dispatched via DHL Express with door-to-door tracking.<br />
            • Timelines: <strong>5 – 7 business days</strong>.<br />
            • Custom duties/taxes are calculated in accordance with the destination country's regulations.
          </p>

          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">4. Tracking Your Package</h3>
          <p>
            Once your order leaves our Lagos atelier, you will receive an SMS and WhatsApp notification containing your active courier tracking number and real-time timeline link.
          </p>
        </div>
      </div>
    </main>
  );
}
