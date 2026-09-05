import { Link } from 'react-router-dom';


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-brand-purple)] font-bold">
            Our Heritage & Vision
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-[var(--color-brand-navy)] mt-3 mb-6">
            Crafted for the Discerning
          </h1>
          <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Ifẹ́mi Lifestyle was born in Lagos from a profound reverence for African craftsmanship, architectural drapery, and the effortless grace of modern women.
          </p>
        </header>

        {/* Story Section 1 */}
        <section className="bg-white p-8 md:p-14 border border-gray-200 shadow-sm mb-12 space-y-6 text-gray-700 font-light leading-relaxed text-sm md:text-base">
          <h2 className="font-playfair text-2xl md:text-3xl text-[var(--color-brand-navy)]">
            Where Tradition Meets Modernity
          </h2>
          <p>
            In Yoruba, <em>Ifẹ́mi</em> translates to “My Love” or “What I Cherish”. That devotion informs every textile we select, every seam our artisans hand-finish in Lagos, and every bespoke home fragrance we blend.
          </p>
          <p>
            We reject mass production. Instead, our kaftans, tailored trouser sets, and home diffusers are crafted in limited batches, ensuring unparalleled attention to detail, fabric weight, and timeless longevity.
          </p>
        </section>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-gray-100 text-center">
            <span className="text-2xl mb-3 block">👑</span>
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-2">Artisanal Integrity</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Every piece is hand-finished by master Nigerian craftspeople earning fair living wages in our Lagos studios.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-100 text-center">
            <span className="text-2xl mb-3 block">✨</span>
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-2">Fluid Elegance</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Silhouettes designed to drape with fluid royalty, honoring women across diverse body types and celebrations.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-100 text-center">
            <span className="text-2xl mb-3 block">🌿</span>
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-2">Sustainable Luxury</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Natural mulberry silks, breathable African linen, and recyclable packaging designed to respect the earth.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] p-12">
          <h2 className="font-playfair text-3xl mb-4">Experience the Collection</h2>
          <p className="text-xs text-white/70 font-light max-w-md mx-auto mb-8">
            Explore our signature kaftans, tailored two-pieces, and botanical home diffusers.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-[var(--color-brand-lavender)] text-[var(--color-brand-navy)] text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors"
          >
            Explore The Shop →
          </Link>
        </div>
      </div>
    </main>
  );
}
