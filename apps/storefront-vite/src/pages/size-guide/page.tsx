import { Link } from 'react-router-dom';


export default function SizeGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">
            Fit & Measurements
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Size & Fit Guide
          </h1>
          <p className="text-gray-500 font-light text-sm max-w-xl mx-auto">
            Our garments are engineered for effortless elegance. Consult our measurement charts below to select your ideal silhouette.
          </p>
        </header>

        {/* Kaftan One Size Explanation */}
        <div className="bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] p-8 md:p-10 mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2.5 py-1 bg-[var(--color-brand-purple)] text-white text-[10px] uppercase font-bold tracking-widest">
              Signature Cut
            </span>
            <h2 className="font-playfair text-2xl text-white">The Kaftan “One Size” Drape</h2>
          </div>
          <p className="text-sm text-white/80 font-light leading-relaxed mb-4">
            All Ifẹ́mi Lifestyle kaftans are masterfully cut in our signature <strong>One Size Fluid Drape</strong>. Designed with generous side sweeps, weighted hemlines, and adjustable inner tie structures, they comfortably and elegantly flatter silhouettes ranging from <strong>UK 8 to UK 20 (US 4 to US 16)</strong>.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs font-light">
            <div><strong>Garment Length:</strong> 60 inches (152 cm)</div>
            <div><strong>Bust Clearance:</strong> Up to 52 inches</div>
            <div><strong>Waist/Hip:</strong> Fluid Free Sweep</div>
            <div><strong>Sleeve Drape:</strong> 22 inches</div>
          </div>
        </div>

        {/* Trouser Sets & Loungewear Sizing Table */}
        <div className="bg-white p-8 border border-gray-200 shadow-sm mb-12">
          <h2 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] mb-2">
            Trouser Sets & Loungewear Sizing Chart
          </h2>
          <p className="text-xs text-gray-500 font-light mb-6">Measurements provided in inches (and cm equivalent).</p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[var(--color-brand-navy)] text-white uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-3">Size</th>
                  <th className="p-3">UK / Nigerian Size</th>
                  <th className="p-3">Bust (in)</th>
                  <th className="p-3">Waist (in)</th>
                  <th className="p-3">Hips (in)</th>
                  <th className="p-3">Trouser Inseam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-light text-gray-700">
                <tr><td className="p-3 font-bold">XS</td><td className="p-3">UK 6 – 8</td><td className="p-3">32 - 34"</td><td className="p-3">25 - 27"</td><td className="p-3">35 - 37"</td><td className="p-3">33"</td></tr>
                <tr><td className="p-3 font-bold">S</td><td className="p-3">UK 8 – 10</td><td className="p-3">34 - 36"</td><td className="p-3">27 - 29"</td><td className="p-3">37 - 39"</td><td className="p-3">33.5"</td></tr>
                <tr><td className="p-3 font-bold">M</td><td className="p-3">UK 10 – 12</td><td className="p-3">36 - 38"</td><td className="p-3">29 - 31"</td><td className="p-3">39 - 41"</td><td className="p-3">34"</td></tr>
                <tr><td className="p-3 font-bold">L</td><td className="p-3">UK 14 – 16</td><td className="p-3">39 - 42"</td><td className="p-3">32 - 35"</td><td className="p-3">42 - 45"</td><td className="p-3">34"</td></tr>
                <tr><td className="p-3 font-bold">XL</td><td className="p-3">UK 16 – 18</td><td className="p-3">43 - 46"</td><td className="p-3">36 - 39"</td><td className="p-3">46 - 49"</td><td className="p-3">34.5"</td></tr>
                <tr><td className="p-3 font-bold">XXL</td><td className="p-3">UK 18 – 20</td><td className="p-3">47 - 50"</td><td className="p-3">40 - 43"</td><td className="p-3">50 - 53"</td><td className="p-3">34.5"</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Sizing Callout */}
        <div className="p-6 bg-gray-50 border border-gray-200 text-center">
          <p className="text-xs text-gray-600 font-light">
            Need custom length alterations, UK fit consultation, or bespoke sizing? Contact our Lagos atelier &amp; London concierge via{' '}
            <Link to="/contact" className="text-[var(--color-brand-purple)] font-bold underline">
              Concierge Services
            </Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
