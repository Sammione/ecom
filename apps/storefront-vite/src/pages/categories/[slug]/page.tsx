import {  Link , useParams } from 'react-router-dom';

interface CategoryMeta {
  name: string;
  description: string;
  sizes?: string[];
  image: string;
  items: {
    id: string;
    name: string;
    price: number;
    salePrice?: number | null;
    image: string;
    tag?: string;
  }[];
}

const categoryData: Record<string, CategoryMeta> = {
  kaftans: {
    name: "Kaftans",
    description: "Flowing silhouettes crafted for effortless grace. Our kaftans feature our signature One Size Fluid Drape designed to flatter UK 8 through UK 20.",
    image: "/images/products/kaftan-1.svg",
    items: [
      { id: '1', name: 'Midnight Elegance Silk Kaftan', price: 45000, image: '/images/products/kaftan-1.svg', tag: 'Best Seller' },
      { id: '7', name: 'Obsidian Velvet Evening Kaftan', price: 52000, image: '/images/products/kaftan-black.svg', tag: 'Limited' },
      { id: '1', name: 'Gold Filigree Artisanal Kaftan', price: 48000, image: '/images/products/kaftan-2.svg' },
      { id: '1', name: 'Royal Drape Sunset Kaftan', price: 46000, image: '/images/products/kaftan-3.svg' }
    ]
  },
  "trouser-sets": {
    name: "Trouser Sets",
    description: "Tailored coordination. High-waisted trousers with pressed pleats and crossover blouses available in XS through XXL.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    image: "/images/products/trouser-1.svg",
    items: [
      { id: '2', name: 'Royal Purple Crepe Trouser Set', price: 65000, salePrice: 58000, image: '/images/products/trouser-1.svg', tag: 'Sale' },
      { id: '8', name: 'Lapis Linen Tailored Two-Piece', price: 60000, image: '/images/products/trouser-blue.svg' },
      { id: '2', name: 'Midnight Crossover Crepe Set', price: 65000, image: '/images/products/trouser-2.svg' }
    ]
  },
  loungewear: {
    name: "Loungewear",
    description: "Featherweight mulberry silk blends tailored for supreme comfort and relaxed daytime elegance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "/images/products/loungewear-1.svg",
    items: [
      { id: '3', name: 'Lavender Whisper Silk Loungewear', price: 35000, image: '/images/products/loungewear-1.svg', tag: 'New Arrival' },
      { id: '3', name: 'Ivory Silk Lounge Two-Piece', price: 38000, image: '/images/products/trouser-1.svg' }
    ]
  },
  diffusers: {
    name: "Diffusers",
    description: "Botanical home fragrances hand-blended in Lagos with Nigerian cedar, royal oud, and golden amber.",
    image: "/images/products/diffuser-1.svg",
    items: [
      { id: '5', name: 'Royal Oud & Amber Home Diffuser', price: 22000, image: '/images/products/diffuser-1.svg', tag: 'Bestseller' },
      { id: '9', name: 'Sandalwood & Vanilla Reed Diffuser', price: 22000, image: '/images/products/diffuser-2.svg' }
    ]
  },
  cushions: {
    name: "Cushions",
    description: "Textured artisanal cotton cushions handwoven by master Nigerian weavers with geometric motifs.",
    image: "/images/products/cushion-1.svg",
    items: [
      { id: '4', name: 'Handwoven Artisanal Cushion Set', price: 18000, salePrice: 15000, image: '/images/products/cushion-1.svg' },
      { id: '4', name: 'Geometric Motif Woven Cushion', price: 16000, image: '/images/products/cushion-2.svg' }
    ]
  },
  jewellery: {
    name: "Jewellery",
    description: "Handcrafted sculptural brass drop earrings and modern minimalist adornments.",
    image: "/images/products/jewellery-1.svg",
    items: [
      { id: '6', name: 'Sculptural Brass Statement Earrings', price: 18500, image: '/images/products/jewellery-1.svg' },
      { id: '6', name: 'Handcrafted Brass Drop Earrings', price: 17000, image: '/images/products/jewellery-2.svg' }
    ]
  },
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : undefined;

  if (!category) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[var(--color-brand-cream)] pt-28">
        <div className="text-center bg-white p-12 border border-gray-200 shadow-sm max-w-md">
          <h1 className="font-playfair text-3xl text-[var(--color-brand-navy)] mb-4">Category Not Found</h1>
          <p className="text-xs text-gray-500 font-light mb-6">The requested collection does not exist.</p>
          <Link to="/categories" className="px-6 py-3 bg-[var(--color-brand-navy)] text-white uppercase tracking-widest text-xs font-bold hover:bg-[var(--color-brand-purple)] transition-colors">
            ← View All Categories
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-8">
        <Link to="/" className="hover:text-[var(--color-brand-navy)] transition-colors">Home</Link>
        <span>/</span>
        <Link to="/categories" className="hover:text-[var(--color-brand-navy)] transition-colors">Categories</Link>
        <span>/</span>
        <span className="text-[var(--color-brand-charcoal)] font-semibold">{category.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-14 max-w-2xl border-b border-gray-200 pb-8">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">
          Ifẹ́mi Collection
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-2 mb-4">
          {category.name}
        </h1>
        <p className="text-gray-500 font-light text-sm leading-relaxed">{category.description}</p>
        {category.sizes && (
          <div className="mt-4 flex gap-2 flex-wrap items-center">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Available Sizes:</span>
            {category.sizes.map((s) => (
              <span key={s} className="px-2.5 py-0.5 border border-gray-300 text-[10px] text-gray-700 font-bold bg-white">{s}</span>
            ))}
          </div>
        )}
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item, idx) => (
          <div key={idx} className="group bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden mb-4 shadow-sm">
              {item.tag && (
                <span className="absolute top-3 left-3 z-10 text-[9px] uppercase tracking-widest font-bold px-2.5 py-0.5 bg-[var(--color-brand-purple)] text-white shadow">
                  {item.tag}
                </span>
              )}
              <Link to={`/shop/${item.id}`} className="block w-full h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">{category.name}</span>
              <Link to={`/shop/${item.id}`}>
                <h3 className="font-playfair text-lg text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-purple)] transition-colors mt-0.5">
                  {item.name}
                </h3>
              </Link>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-baseline gap-2">
                  <span className="font-light text-sm text-[var(--color-brand-navy)]">
                    ₦ {(item.salePrice || item.price).toLocaleString()}
                  </span>
                  {item.salePrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₦ {item.price.toLocaleString()}
                    </span>
                  )}
                </div>
                <Link to={`/shop/${item.id}`} className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-brand-purple)] hover:underline">
                  View Piece →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
