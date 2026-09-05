import { Link } from 'react-router-dom';


export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-16 border border-gray-200 shadow-sm">
        {/* Header */}
        <header className="border-b border-gray-200 pb-8 mb-10">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Regulatory Compliance & Data Protection
          </span>
          <h1 className="font-playfair text-3xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-light">
            <span><strong>Effective Date:</strong> August 29, 2026</span>
            <span>•</span>
            <span><strong>Governing Framework:</strong> Nigeria Data Protection Act (NDPA 2023) & GDPR</span>
            <span>•</span>
            <span><strong>Version:</strong> 2.4</span>
          </div>
        </header>

        {/* Legal Notice */}
        <div className="bg-[var(--color-brand-navy)]/5 border-l-4 border-[var(--color-brand-navy)] p-4 mb-10 text-xs text-gray-700 leading-relaxed font-light">
          <strong>Summary Notice:</strong> Ifẹ́mi Lifestyle Ltd (&ldquo;Ifẹ́mi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is dedicated to preserving the privacy, integrity, and confidentiality of your Personal Data. This Privacy Policy details how we collect, process, store, transfer, and safeguard your personal information when you access <strong>ifemi.ng</strong>, interact with our concierge services, or purchase luxury garments and lifestyle goods.
        </div>

        {/* Sectional Content */}
        <div className="space-y-10 text-sm text-gray-700 font-light leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              1. Identity of the Data Controller
            </h2>
            <p>
              For the purposes of the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and applicable international data protection standards (including Regulation (EU) 2016/679 - GDPR), the Data Controller responsible for your personal information is:
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200 text-xs text-gray-600 mt-3 space-y-1 font-mono">
              <p><strong>Entity Name:</strong> Ifẹ́mi Lifestyle Ltd (RC No: 1984210)</p>
              <p><strong>Registered Atelier & Office:</strong> Plot 14 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</p>
              <p><strong>Data Protection Officer (DPO) Contact:</strong> privacy@ifemi.ng / dpo@ifemi.ng</p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              2. Categories of Personal Data We Collect
            </h2>
            <p>We collect and process the following categories of data directly from you or automatically through platform interaction:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong>Identity & Contact Information:</strong> Full legal name, billing address, residential/dispatch address, telephone number, WhatsApp contact identifier, and email address.
              </li>
              <li>
                <strong>Bespoke Sizing & Preference Data:</strong> Body measurements, garment alteration specifications, preferred colorways, and bespoke design notes collected during concierge consultations.
              </li>
              <li>
                <strong>Transactional & Order Records:</strong> Detailed purchase history, order numbers, invoice identifiers, delivery zone classifications, returns records, and discount code redemptions.
              </li>
              <li>
                <strong>Technical & Device Metadata:</strong> Internet Protocol (IP) address, browser classification, operating system, device identifiers, session tokens, referring URLs, and telemetry data.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              3. Payment Information & PCI-DSS Compliance
            </h2>
            <p>
              Ifẹ́mi Lifestyle enforces strict separation between application data and financial instruments. <strong>We do not process, intercept, or store raw credit or debit card primary account numbers (PAN), CVVs, or cardholder PINs on our servers.</strong>
            </p>
            <p className="mt-2">
              All payment transactions are tokenized and handed off directly to our licensed, <strong>PCI-DSS Level 1 Certified</strong> payment processor, <strong>Paystack Payments Limited</strong>. Paystack processes transactions under strict compliance with Central Bank of Nigeria (CBN) regulatory frameworks and global security mandates.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              4. Lawful Bases and Purposes for Processing
            </h2>
            <p>We process your Personal Data solely under recognized lawful bases pursuant to Section 25 of the NDPA 2023 and Article 6 of the GDPR:</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs text-left border border-gray-200">
                <thead className="bg-gray-100 uppercase text-[10px] font-semibold text-gray-700">
                  <tr>
                    <th className="p-3 border-b">Processing Purpose</th>
                    <th className="p-3 border-b">Categories of Data</th>
                    <th className="p-3 border-b">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600">
                  <tr>
                    <td className="p-3 font-medium">Order fulfillment, garment tailoring, and courier dispatch</td>
                    <td className="p-3">Identity, Contact, Sizing, Delivery Address</td>
                    <td className="p-3">Performance of Contract</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Payment verification and fraud detection</td>
                    <td className="p-3">Transaction Reference, IP, Contact</td>
                    <td className="p-3">Legal Obligation & Legitimate Interest</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Concierge WhatsApp support & order status notifications</td>
                    <td className="p-3">Phone, Name, Order Number</td>
                    <td className="p-3">Performance of Contract / Consent</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Private collection previews & VIP email newsletters</td>
                    <td className="p-3">Email, First Name</td>
                    <td className="p-3">Consent (freely revocable at any time)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              5. Third-Party Disclosures & International Transfers
            </h2>
            <p>
              We do not sell, rent, or trade your personal data. We disclose information strictly to certified third-party service providers (&ldquo;Data Processors&rdquo;) under executed Data Processing Agreements (DPAs):
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong>Logistics & Freight Partners:</strong> Certified couriers (e.g., DHL Express, GIG Logistics, dedicated Lagos dispatch riders) solely for dispatching physical packages.</li>
              <li><strong>Payment Infrastructures:</strong> Paystack Payments Ltd for transaction verification.</li>
              <li><strong>Cloud & Hosting Infrastructure:</strong> Cloud hosting providers enforcing SOC 2 Type II and ISO 27001 data center physical security.</li>
            </ul>
            <p className="mt-3">
              Where data is transferred across borders (e.g., for cloud hosting or international delivery), we ensure adequate safeguards are in place in accordance with Section 41 of the NDPA 2023.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              6. Data Subject Rights
            </h2>
            <p>Under the NDPA 2023 and GDPR, you possess the following statutory rights regarding your personal information:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
              <div className="p-3 bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block mb-1">Right to Access (SAR):</strong>
                Request a certified copy of the personal records we hold concerning you.
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block mb-1">Right to Rectification:</strong>
                Request the correction of inaccurate, incomplete, or outdated data.
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block mb-1">Right to Erasure (&ldquo;To Be Forgotten&rdquo;):</strong>
                Request deletion of your data where continued retention lacks a lawful basis.
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200">
                <strong className="text-gray-900 block mb-1">Right to Restrict or Object:</strong>
                Object to direct marketing or restrict processing under certain conditions.
              </div>
            </div>
            <p className="mt-3 text-xs">
              To exercise any of these rights, contact our Data Protection Officer at <a href="mailto:dpo@ifemi.ng" className="text-[var(--color-brand-purple)] underline font-medium">dpo@ifemi.ng</a>. We respond to all verified requests within thirty (30) calendar days at zero cost.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              7. Security Architecture & Technical Safeguards
            </h2>
            <p>
              Ifẹ́mi Lifestyle maintains rigorous technical and organizational security measures:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2 text-xs">
              <li><strong>Transport Layer Security (TLS 1.3):</strong> End-to-end encryption for all data in transit across our digital storefront.</li>
              <li><strong>Encryption at Rest (AES-256):</strong> Stored database records are encrypted using industry-standard cryptography.</li>
              <li><strong>Least-Privilege Role-Based Access Control (RBAC):</strong> Administrative access is restricted strictly to authorized staff.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-playfair text-xl font-bold text-[var(--color-brand-navy)] mb-3">
              8. Retention & Policy Amendments
            </h2>
            <p>
              We retain transactional records for seven (7) years in compliance with the Federal Inland Revenue Service (FIRS) statutory tax auditing mandates and Companies and Allied Matters Act (CAMA 2020). Non-transactional profile tokens are deleted upon account closure.
            </p>
            <p className="mt-2">
              We reserve the right to amend this Privacy Policy periodically. Material modifications will be highlighted through website notices or direct email communications.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ifẹ́mi Lifestyle Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="text-[var(--color-brand-purple)] hover:underline font-semibold">Terms & Conditions →</Link>
            <Link to="/cookies" className="text-[var(--color-brand-purple)] hover:underline font-semibold">Cookie Policy →</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
