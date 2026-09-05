
export default function ReturnsPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 border border-gray-200 shadow-sm">
        <header className="border-b border-gray-200 pb-6 mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">Exchange & Return Protocol</span>
          <h1 className="font-playfair text-3xl md:text-4xl text-[var(--color-brand-navy)] mt-1">
            Return & Refund Policy
          </h1>
          <p className="text-xs text-gray-400 mt-1">We strive for your utmost satisfaction with every piece.</p>
        </header>

        <div className="space-y-6 text-sm text-gray-700 font-light leading-relaxed">
          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">1. Return Window</h3>
          <p>
            You may request an exchange or return for eligible items within <strong>7 days</strong> of receiving your package.
          </p>

          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">2. Eligibility Conditions</h3>
          <p>
            To be eligible for an exchange or refund:<br />
            • Items must be unworn, unwashed, and in the pristine condition in which they were received.<br />
            • All original brand labels, security tags, and dust bags must be intact.<br />
            • Home diffusers must remain sealed and unopened due to hygiene regulations.<br />
            • Custom-tailored bespoke commissions are final sale.
          </p>

          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">3. Refund Processing</h3>
          <p>
            Upon inspection and approval by our quality team in Lagos, refunds will be credited back via the original Paystack payment method or issued as an Ifẹ́mi Lifestyle Store Credit Voucher within 3–5 working days.
          </p>

          <h3 className="font-playfair text-lg text-[var(--color-brand-navy)] font-semibold">4. Initiating a Return</h3>
          <p>
            To begin a return, contact our concierge at <a href="mailto:concierge@ifemi.ng" className="text-[var(--color-brand-purple)] underline font-medium">concierge@ifemi.ng</a> or via WhatsApp with your Order Reference Number and reason for return.
          </p>
        </div>
      </div>
    </main>
  );
}
