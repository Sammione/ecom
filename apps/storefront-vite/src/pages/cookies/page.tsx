import { Link } from 'react-router-dom';


export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-16 border border-gray-200 shadow-sm">
        {/* Header */}
        <header className="border-b border-gray-200 pb-8 mb-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Electronic Privacy & Data Telemetry
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Cookie & Tracking Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-light">
            <span><strong>Effective Date:</strong> August 29, 2026</span>
            <span>•</span>
            <span><strong>Framework:</strong> NDPA 2023, ePrivacy Directive & GDPR Recital 30</span>
            <span>•</span>
            <span><strong>Version:</strong> 2.2</span>
          </div>
        </header>

        {/* Executive Summary */}
        <div className="bg-[var(--color-brand-navy)]/5 border-l-4 border-[var(--color-brand-navy)] p-4 mb-10 text-xs text-gray-700 leading-relaxed font-light">
          <strong>Transparency Disclosure:</strong> This Cookie Policy explains how Ifẹ́mi Lifestyle Ltd (&ldquo;Ifẹ́mi&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) employs cookies, pixel tags, local storage objects (HTML5 Web Storage), and related tracking technologies on <strong>ifemi.ng</strong>. We are committed to transparency regarding how your browser interacts with our digital commerce infrastructure.
        </div>

        {/* Content Articles */}
        <div className="space-y-10 text-sm text-gray-700 font-light leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              1. What Are Cookies & Local Storage Objects?
            </h2>
            <p>
              A <strong>cookie</strong> is a compact alphanumeric data file placed on your computer or mobile device by a web server. Cookies permit our digital platform to recognize your browser, maintain continuous user sessions, and remember your curated shopping preferences.
            </p>
            <p className="mt-2">
              In addition to cookies, we utilize <strong>HTML5 Local Storage</strong>—a modern web standard that allows our application to securely store shopping bag data and discount vouchers client-side without transmitting repetitive data across the network on every page navigation.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              2. Classification of Tracking Technologies We Deploy
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-xs uppercase text-[var(--color-brand-navy)] mb-1">
                  Category A: Strictly Necessary / Essential Tokens (Always Active)
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  These tokens are technically indispensable for the operation of the e-commerce storefront. They maintain your active items in the shopping bag, record discount voucher validation, maintain encrypted customer login sessions, and protect against Cross-Site Request Forgery (CSRF). Under Section 24 of the NDPA and GDPR, these do not require prior consent as they are vital for executing your requested transaction.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-xs uppercase text-[var(--color-brand-navy)] mb-1">
                  Category B: Functional & Preference Storage
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  Enables enhanced personalization, remembering your preferred Nigerian delivery state calculation, saved wishlist pieces, and previously viewed kaftan colorways.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-xs uppercase text-[var(--color-brand-navy)] mb-1">
                  Category C: Payment Gateway & Anti-Fraud Security (Third-Party)
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  When you initiate Paystack checkout, Paystack deploys encrypted telemetry identifiers to evaluate risk scoring, device fingerprinting, and prevent unauthorized debit card usage in compliance with Central Bank of Nigeria (CBN) regulations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Technical Audit Matrix */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              3. Technical Audit Inventory of Storage Items
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-gray-200">
                <thead className="bg-gray-100 uppercase text-[10px] font-semibold text-gray-700">
                  <tr>
                    <th className="p-3 border-b">Token / Key Name</th>
                    <th className="p-3 border-b">Type / Storage</th>
                    <th className="p-3 border-b">Lifespan</th>
                    <th className="p-3 border-b">Technical Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600 font-mono text-[11px]">
                  <tr>
                    <td className="p-3 font-bold text-gray-900">ifemi_cart</td>
                    <td className="p-3">HTML5 LocalStorage</td>
                    <td className="p-3">Persistent (30 Days)</td>
                    <td className="p-3 font-sans text-xs">Maintains active garment selection, sizes, and quantities in bag.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">ifemi_discount</td>
                    <td className="p-3">HTML5 LocalStorage</td>
                    <td className="p-3">Session / 7 Days</td>
                    <td className="p-3 font-sans text-xs">Stores verified promotional voucher status (e.g. WELCOME10).</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">ifemi_wishlist</td>
                    <td className="p-3">HTML5 LocalStorage</td>
                    <td className="p-3">Persistent (90 Days)</td>
                    <td className="p-3 font-sans text-xs">Saves client favorite pieces for subsequent review.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">ifemi_user</td>
                    <td className="p-3">Encrypted Session</td>
                    <td className="p-3">Session / 30 Days</td>
                    <td className="p-3 font-sans text-xs">Maintains client portal authentication token and delivery address.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-gray-900">__pstk_ref</td>
                    <td className="p-3">Secure Cookie (Paystack)</td>
                    <td className="p-3">Transaction Duration</td>
                    <td className="p-3 font-sans text-xs">PCI-DSS certified payment session verification and fraud risk assessment.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              4. Managing & Disabling Cookies
            </h2>
            <p>
              You maintain total autonomy over how tracking technologies are retained on your device. Most web browsers allow you to review, block, or delete cookies via their configuration preferences:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3 text-xs">
              <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party Cookies.</li>
              <li><strong>Apple Safari (iOS & macOS):</strong> Preferences → Privacy → Manage Website Data.</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Enhanced Tracking Protection.</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and Site Permissions.</li>
            </ul>
            <p className="mt-3 text-xs bg-amber-50 p-3 border border-amber-200 text-amber-900">
              <strong>Technical Notice:</strong> Disabling essential storage keys (such as <code>ifemi_cart</code>) will prevent the platform from holding items in your shopping bag or calculating checkout totals.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              5. Queries & Legal Inquiries
            </h2>
            <p>
              For further technical details regarding our data collection mechanisms, contact our Data Protection Team at <a href="mailto:privacy@ifemi.ng" className="text-[var(--color-brand-purple)] underline font-medium">privacy@ifemi.ng</a>.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ifẹ́mi Lifestyle Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-[var(--color-brand-purple)] hover:underline font-semibold">Privacy Policy →</Link>
            <Link to="/terms" className="text-[var(--color-brand-purple)] hover:underline font-semibold">Terms & Conditions →</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
