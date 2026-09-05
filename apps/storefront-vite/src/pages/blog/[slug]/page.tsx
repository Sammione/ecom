import {  Link , useParams } from 'react-router-dom';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-16 border border-gray-200 shadow-sm">
        <Link to="/blog" className="text-xs uppercase tracking-widest text-[var(--color-brand-purple)] font-bold mb-8 inline-block hover:underline">
          ← Back to Journal
        </Link>

        <header className="mb-10 border-b border-gray-200 pb-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">
            <span className="text-[var(--color-brand-purple)]">Style & Heritage</span>
            <span>•</span>
            <span>Published August 2026</span>
          </div>
          <h1 className="font-playfair text-3xl md:text-5xl text-[var(--color-brand-navy)] leading-tight mb-4">
            The Art of the Modern Kaftan: Fluid Royalty for Every Celebration
          </h1>
          <p className="text-gray-500 font-light text-base leading-relaxed">
            Exploring the timeless architecture, drape, and enduring cultural reverence behind Nigeria's most celebrated garment.
          </p>
        </header>

        <div className="prose prose-sm font-light text-gray-700 space-y-6 leading-relaxed text-sm md:text-base">
          <p>
            The kaftan is more than attire; it is an architectural expression of freedom, poise, and dignity. In West African lifestyle, the fluid silhouette has long represented a deliberate rejection of restrictive tailoring in favor of grandeur and movement.
          </p>

          <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 my-8 flex items-center justify-center text-xs text-gray-400 font-light">
            Editorial Photograph: The Midnight Silk Kaftan
          </div>

          <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] font-semibold mt-8 mb-3">
            1. Fabric Weight and Fluidity
          </h2>
          <p>
            When designing the Ifẹ́mi Kaftan collection, our focal point was gravity. A truly royal kaftan requires fabric with sufficient body to drape cleanly without clinging, combined with the breathability necessary for tropical climates and climate-controlled gala spaces alike.
          </p>

          <h2 className="font-playfair text-2xl text-[var(--color-brand-navy)] font-semibold mt-8 mb-3">
            2. The “One Size” Geometry
          </h2>
          <p>
            Traditional fast fashion enforces rigid sizing matrices that fail to account for the dynamic curves of African women. By utilizing generous diagonal cutaways and internal cinch ribbons, our one-size silhouettes conform effortlessly to UK sizes 8 through 20 with bespoke precision.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-light">Written by the Ifẹ́mi Editorial Team</span>
          <Link to="/shop" className="px-6 py-3 bg-[var(--color-brand-navy)] text-white text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-brand-purple)] transition-colors">
            Shop Kaftans →
          </Link>
        </div>
      </article>
    </main>
  );
}
