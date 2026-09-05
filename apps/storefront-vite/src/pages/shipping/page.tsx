export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 border border-gray-200 shadow-sm">
        <header className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">
            Transatlantic Fulfillment
          </span>
          <h1 className="font-playfair text-3xl md:text-4xl text-[var(--color-brand-navy)] mt-1">
            Shipping &amp; Delivery (UK &amp; Nigeria)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Operating domestic distribution hubs in both Lagos, Nigeria and London, United Kingdom.
          </p>
        </header>

        <div className="space-y-8 text-sm text-gray-700 font-light leading-relaxed">
          {/* UK Deliveries */}
          <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-xs">
            <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold flex items-center gap-2 mb-2">
              <span>🇬🇧</span> United Kingdom Domestic Deliveries
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Dispatched locally from our London Studio hub. <strong>No customs duties, import tariffs, or surprise clearance fees</strong> for UK orders.
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li><strong>London &amp; UK Mainland:</strong> 2 – 3 business days via Royal Mail Tracked 24/48 or DPD.</li>
              <li><strong>Standard UK Shipping Fee:</strong> £6.50 flat rate.</li>
              <li><strong>Complimentary UK Shipping:</strong> Orders valued at <strong>£100 and above</strong> qualify for free tracked delivery.</li>
            </ul>
          </div>

          {/* Nigeria Deliveries */}
          <div className="p-5 bg-emerald-50/50 border border-emerald-100 rounded-xs">
            <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold flex items-center gap-2 mb-2">
              <span>🇳🇬</span> Nigeria Domestic Deliveries
            </h3>
            <p className="mb-3 text-xs text-gray-600">
              Dispatched directly from our Victoria Island, Lagos Atelier.
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li><strong>Lagos (Island &amp; Mainland):</strong> 1 – 2 business days (Same-day dispatch for orders placed before 12:00 PM WAT). Flat rate of <strong>₦3,500</strong>.</li>
              <li><strong>Abuja, Port Harcourt, Ibadan &amp; Nationwide:</strong> 2 – 4 working days via certified express couriers (GIG Logistics / DHL). Flat rate of <strong>₦6,000</strong>.</li>
              <li><strong>Complimentary Nigeria Shipping:</strong> Orders valued at <strong>₦100,000 and above</strong> qualify for free nationwide delivery.</li>
            </ul>
          </div>

          {/* Europe & International */}
          <div>
            <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold mb-2 flex items-center gap-2">
              <span>✈️</span> Europe &amp; Rest of the World
            </h3>
            <p className="text-xs text-gray-600 mb-2">
              European and worldwide orders are dispatched via DHL Express with signature door-to-door tracking.
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
              <li><strong>Western Europe / Ireland:</strong> 3 – 5 business days (£18.00 / ₦28,000).</li>
              <li><strong>USA, Canada &amp; Global:</strong> 4 – 7 business days (£25.00 / ₦35,000).</li>
            </ul>
          </div>

          {/* Tracking */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="font-playfair text-base text-[var(--color-brand-navy)] font-semibold mb-2">
              Real-Time Tracking &amp; Concierge Updates
            </h3>
            <p className="text-xs text-gray-600">
              Upon dispatch, you will immediately receive an automated email, SMS, and WhatsApp notification containing your courier tracking number and real-time transit link. For urgent inquiries, reach out to our concierge via WhatsApp in Lagos (+234) or London (+44).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
