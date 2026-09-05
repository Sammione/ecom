import { Link } from 'react-router-dom';


export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-16 border border-gray-200 shadow-sm">
        {/* Header */}
        <header className="border-b border-gray-200 pb-8 mb-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Commercial & Legal Framework
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Terms & Conditions of Sale
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-light">
            <span><strong>Effective Date:</strong> August 29, 2026</span>
            <span>•</span>
            <span><strong>Jurisdiction:</strong> Federal Republic of Nigeria (Lagos State)</span>
            <span>•</span>
            <span><strong>Version:</strong> 3.1</span>
          </div>
        </header>

        {/* Legal Advisory Notice */}
        <div className="bg-[var(--color-brand-navy)]/5 border-l-4 border-[var(--color-brand-navy)] p-4 mb-10 text-xs text-gray-700 leading-relaxed font-light">
          <strong>Binding Legal Agreement:</strong> These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding electronic agreement between you (&ldquo;Customer&rdquo;, &ldquo;Client&rdquo;, or &ldquo;User&rdquo;) and <strong>Ifẹ́mi Lifestyle Ltd</strong> (RC No: 1984210, &ldquo;Ifẹ́mi&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;). By accessing <strong>ifemi.ng</strong>, creating an account, or placing an order, you represent that you possess legal contractual capacity under Nigerian Law and unreservedly agree to these Terms.
        </div>

        {/* Sectional Articles */}
        <div className="space-y-10 text-sm text-gray-700 font-light leading-relaxed">
          {/* Article 1 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              1. Electronic Contracting & Account Registration
            </h2>
            <p>
              Pursuant to the <strong>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</strong> and the <strong>Electronic Transactions regulations</strong> of Nigeria, contracts concluded electronically via this platform are legally valid and enforceable.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li>You must be at least 18 years of age or possess parental/guardian consent to conduct transactions.</li>
              <li>You are solely responsible for maintaining the confidentiality of your account credentials and password.</li>
              <li>Ifẹ́mi reserves the right to terminate accounts, cancel unverified orders, or refuse service in instances of suspected identity fraud or unauthorized credential usage.</li>
            </ul>
          </section>

          {/* Article 2 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              2. Offer, Acceptance & Contract Formation
            </h2>
            <p>
              The display of garments, diffusers, cushions, and jewellery on this storefront represents an <em>invitation to treat</em> rather than a binding legal offer.
            </p>
            <p className="mt-2">
              <strong>Order Formation:</strong> When you complete the checkout sequence and authorize payment, your order constitutes an offer to purchase. A legally binding contract of sale is concluded only when we issue a formal <strong>Order Dispatch Confirmation</strong> with an assigned courier tracking code.
            </p>
            <p className="mt-2">
              We reserve the right to decline or cancel any order prior to dispatch due to inventory unavailability, material defects identified during final inspection, or payment authorization discrepancies. In such cases, any debited funds will be refunded in full.
            </p>
          </section>

          {/* Article 3 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              3. Pricing, Currency & Typographical Disclaimer
            </h2>
            <p>
              All prices are denominated in Nigerian Naira (₦) and are inclusive of statutory Value Added Tax (VAT) where applicable pursuant to the Nigerian Value Added Tax Act.
            </p>
            <p className="mt-2">
              In accordance with Section 115 of the <strong>Federal Competition and Consumer Protection Act 2018 (FCCPA)</strong>, we endeavor to ensure all pricing and descriptions are accurate. However, if a pricing typographical error occurs, we are not obligated to fulfill an order at the erroneously displayed price and will offer you the option to confirm at the correct price or cancel for an immediate 100% refund.
            </p>
          </section>

          {/* Article 4 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              4. Bespoke Garment Commissions & Artisanal Variations
            </h2>
            <p>
              Ifẹ́mi Lifestyle pieces are crafted by master Nigerian artisans utilizing genuine silks, hand-dyed Adire textiles, and raw recycled brass.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li><strong>Natural Textile Variations:</strong> Minor variations in organic dye intensity, weave texture, or brass patina are intrinsic characteristics of authentic handcraftsmanship and do not constitute manufacturing defects.</li>
              <li><strong>Custom Alterations:</strong> Bespoke hem adjustments or tailor-made size modifications finalized via our concierge team cannot be returned or exchanged once cutting has commenced.</li>
            </ul>
          </section>

          {/* Article 5 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              5. Delivery Timelines, Title & Risk of Loss
            </h2>
            <p>
              Delivery estimates (e.g., 24–48 hours for Lagos, 2–4 business days nationwide) are commercial estimates provided in good faith.
            </p>
            <p className="mt-2">
              <strong>Passing of Title and Risk:</strong> Title to and risk of loss for purchased merchandise transfer to you immediately upon physical delivery by the carrier to your designated delivery address or recipient.
            </p>
          </section>

          {/* Article 6 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              6. Intellectual Property & Brand Protection
            </h2>
            <p>
              All trademarks, service marks, logo designs (&ldquo;ifẹ́mi lifestyle&rdquo;), custom textile prints, architectural garment silhouettes, editorial photography, and codebases are the exclusive intellectual property of Ifẹ́mi Lifestyle Ltd, protected under the <strong>Copyright Act 2022</strong> and <strong>Trademarks Act of Nigeria</strong>.
            </p>
            <p className="mt-2 text-xs text-red-900 bg-red-50 p-3 border border-red-200">
              <strong>Strict Prohibition:</strong> Any commercial reproduction, reverse-engineering of patterns, scraping, or distribution of our media assets without prior written authorization will be subject to immediate injunctive relief and statutory damages.
            </p>
          </section>

          {/* Article 7 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              7. Limitation of Liability & Indemnity
            </h2>
            <p>
              To the maximum extent permissible under applicable Nigerian law, Ifẹ́mi Lifestyle Ltd, its directors, employees, and artisans shall not be liable for any indirect, consequential, or punitive damages arising from the use of our products or platform.
            </p>
            <p className="mt-2">
              <strong>Aggregate Liability Cap:</strong> Our total aggregate liability for any claim arising out of or related to these Terms or any purchase shall not exceed the exact purchase price paid by you for the specific item giving rise to the claim.
            </p>
          </section>

          {/* Article 8 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              8. Force Majeure
            </h2>
            <p>
              Neither party shall be held liable for failure or delay in performance resulting from events beyond reasonable control (&ldquo;Force Majeure&rdquo;), including acts of God, extreme civil unrest, regional telecommunication/power outages, strikes, port customs closures, or severe governmental import/export embargoes.
            </p>
          </section>

          {/* Article 9 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              9. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms and any non-contractual obligations arising out of them are governed exclusively by the laws of the <strong>Federal Republic of Nigeria</strong>.
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200 text-xs mt-3 space-y-2">
              <p>
                <strong>Tier 1 — Amicable Concierge Mediation:</strong> In the event of any controversy, the parties agree to first attempt resolution through good-faith discussions with our Lagos Executive Legal Concierge (<a href="mailto:legal@ifemi.ng" className="text-[var(--color-brand-purple)] underline">legal@ifemi.ng</a>).
              </p>
              <p>
                <strong>Tier 2 — Arbitration:</strong> If unresolved within thirty (30) days, the dispute shall be finally settled by arbitration administered by the <strong>Lagos Court of Arbitration (LCA)</strong> under the LCA Arbitration Rules. The seat of arbitration shall be Lagos, Nigeria, and proceedings conducted in English.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ifẹ́mi Lifestyle Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-[var(--color-brand-purple)] hover:underline font-semibold">Privacy Policy →</Link>
            <Link to="/cookies" className="text-[var(--color-brand-purple)] hover:underline font-semibold">Cookie Policy →</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
