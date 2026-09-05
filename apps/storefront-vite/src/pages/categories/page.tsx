import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Kaftans",
    slug: "kaftans",
    description: "Flowing silhouettes crafted for effortless grace. Our kaftans feature our signature One Size Fluid Drape designed to flatter UK 8 through UK 20.",
    count: "12 pieces",
    image: "/images/products/kaftan-1.svg"
  },
  {
    name: "Trouser Sets",
    slug: "trouser-sets",
    description: "Coordinated two-piece ensembles with high-waisted tailored trousers and crossover blouses. Available in XS through XXL.",
    count: "8 pieces",
    image: "/images/products/trouser-1.svg"
  },
  {
    name: "Loungewear",
    slug: "loungewear",
    description: "Featherweight mulberry silk blends tailored for supreme comfort and relaxed daytime elegance.",
    count: "10 pieces",
    image: "/images/products/loungewear-1.svg"
  },
  {
    name: "Diffusers",
    slug: "diffusers",
    description: "Botanical home fragrances hand-blended in Lagos with Nigerian cedar, royal oud, and golden amber.",
    count: "6 pieces",
    image: "/images/products/diffuser-1.svg"
  },
  {
    name: "Cushions",
    slug: "cushions",
    description: "Textured artisanal cotton cushions handwoven by master Nigerian weavers with geometric motifs.",
    count: "9 pieces",
    image: "/images/products/cushion-1.svg"
  },
  {
    name: "Jewellery",
    slug: "jewellery",
    description: "Handcrafted sculptural brass drop earrings and modern minimalist adornments.",
    count: "14 pieces",
    image: "/images/products/jewellery-1.svg"
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      {/* Header */}
      <header className="mb-16 max-w-2xl">
        <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--color-brand-purple)] font-bold">Curated Collections</span>
        <h1 className="font-playfair text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">All Categories</h1>
        <p className="text-gray-500 font-light text-sm leading-relaxed">
          Every piece is designed with intention. Explore our signature apparel and sensory home decor.
        </p>
      </header>

      {/* Categories Grid with Editorial Imagery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/categories/${category.slug}`}
            className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-100">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white/90 text-[var(--color-brand-navy)] text-[9px] uppercase font-bold tracking-widest px-2.5 py-1">
                {category.count}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-purple)] transition-colors mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-500 font-light text-xs leading-relaxed line-clamp-3">
                  {category.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Explore Line</span>
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-purple)] group-hover:translate-x-1 transition-transform">
                  Shop Collection →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
