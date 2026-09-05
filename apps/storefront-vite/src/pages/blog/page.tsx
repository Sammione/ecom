import { Link } from 'react-router-dom';


const articles = [
  {
    slug: 'the-art-of-the-modern-kaftan',
    title: 'The Art of the Modern Kaftan: Fluid Royalty for Every Celebration',
    date: 'August 24, 2026',
    category: 'Style & Silhouettes',
    readTime: '4 min read',
    excerpt: 'Why the Nigerian kaftan has transcended occasional wear to become a quintessential wardrobe masterpiece for global African women.'
  },
  {
    slug: 'sensory-living-oud-amber-notes',
    title: 'Sensory Living: Crafting Atmosphere with Nigerian Cedar and Royal Oud',
    date: 'August 18, 2026',
    category: 'Home & Living',
    readTime: '3 min read',
    excerpt: 'An insider look into our botanical blending process in Lagos, balancing heavy agarwood resins with luminous floral top notes.'
  },
  {
    slug: 'styling-monochromatic-sets-from-lagos-to-london',
    title: 'Effortless Coordination: Transitioning Tailored Sets from Day to Evening',
    date: 'August 10, 2026',
    category: 'Style Guide',
    readTime: '5 min read',
    excerpt: 'How to accessorize rich royal purple and midnight navy crepe trouser sets for boardroom authority and evening opulence.'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-brand-purple)] font-bold">
            Editorial Journal
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-[var(--color-brand-navy)] mt-2 mb-4">
            Stories & Lifestyle
          </h1>
          <p className="text-gray-500 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Explorations into modern African heritage, mindful home rituals, and the craftsmanship shaping our collections.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Link
              key={art.slug}
              to={`/blog/${art.slug}`}
              className="group bg-white p-6 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-gray-100 to-gray-200 mb-6 flex items-center justify-center text-xs text-gray-400 font-light relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-0 group-hover:opacity-10 transition-opacity" />
                  <span>Journal Photography</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-gray-400 mb-2 font-semibold">
                  <span className="text-[var(--color-brand-purple)]">{art.category}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-purple)] transition-colors leading-snug mb-3">
                  {art.title}
                </h3>
                <p className="text-gray-500 font-light text-xs leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-light">{art.date}</span>
                <span className="uppercase tracking-widest font-bold text-[var(--color-brand-purple)] text-[10px]">
                  Read Story →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
