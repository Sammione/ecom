import { Link } from 'react-router-dom';

export default function Home() {
  const featuredCategories = [
    {
      name: 'Kaftans',
      slug: 'kaftans',
      subtitle: 'One Size Fluid Drape',
      image: '/images/products/kaftan-1.svg'
    },
    {
      name: 'Trouser Sets',
      slug: 'trouser-sets',
      subtitle: 'Tailored Coordination (XS–XXL)',
      image: '/images/products/trouser-1.svg'
    },
    {
      name: 'Loungewear',
      slug: 'loungewear',
      subtitle: 'Pure Mulberry Silk',
      image: '/images/products/loungewear-1.svg'
    }
  ];

  const lifestyleHighlights = [
    {
      name: 'Royal Botanical Diffusers',
      slug: 'diffusers',
      image: '/images/products/diffuser-1.svg',
      desc: 'Hand-blended agarwood and Nigerian cedar aromas.'
    },
    {
      name: 'Artisanal Woven Cushions',
      slug: 'cushions',
      image: '/images/products/cushion-1.svg',
      desc: 'Masterfully handwoven in Southwestern Nigeria.'
    },
    {
      name: 'Sculptural Brass Jewellery',
      slug: 'jewellery',
      image: '/images/products/jewellery-1.svg',
      desc: 'Hand-forged modern African minimalist statements.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Editorial Background */}
      <section className="relative min-h-[95vh] w-full bg-[var(--color-brand-navy)] overflow-hidden flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1800&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-navy)]/90 via-[var(--color-brand-navy)]/70 to-[var(--color-brand-purple)]/90" />
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl py-24">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[var(--color-brand-cream)] leading-tight mb-8">
            Elegance <br/> Redefined.
          </h1>
          <p className="text-[var(--color-brand-cream)] text-base md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Discover hand-finished silk kaftans, tailored crepe silhouettes, and curated botanical home scents crafted in Lagos for the discerning global woman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="bg-[var(--color-brand-cream)] text-[var(--color-brand-navy)] px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[var(--color-brand-lavender)] transition-colors duration-300 shadow-2xl"
            >
              Explore Collection →
            </Link>
            <Link
              to="/categories/kaftans"
              className="border border-white/40 text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-[var(--color-brand-navy)] transition-colors backdrop-blur-sm"
            >
              Signature Kaftans
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Apparel Categories */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--color-brand-cream)]">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">Curated Silhouettes</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-1">Shop by Category</h2>
          </div>
          <Link to="/categories" className="uppercase tracking-widest text-xs font-bold text-[var(--color-brand-purple)] hover:text-[var(--color-brand-navy)] transition-colors">
            View All Categories →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link key={category.slug} to={`/categories/${category.slug}`} className="group cursor-pointer flex flex-col bg-white p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[3/4] w-full bg-gray-200 mb-6 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs uppercase tracking-widest font-bold">
                    Discover Collection →
                  </span>
                </div>
              </div>
              <h3 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-purple)] transition-colors">
                {category.name}
              </h3>
              <span className="text-xs text-gray-500 font-light mt-1">
                {category.subtitle}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Narrative Banner */}
      <section className="bg-[var(--color-brand-navy)] text-white py-20 px-6 md:px-12 lg:px-24 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-brand-lavender)] font-bold block mb-4">
            The Ifẹ́mi Atelier Standard
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-6">
            “True luxury is not hurried. Every seam, fold, and botanical note is intentional.”
          </h2>
          <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            From our design studio in Lekki, Lagos, we celebrate African identity through fluid architectural kaftans, sharp tailored coordination, and evocative artisanal home fragrances.
          </p>
          <Link
            to="/about"
            className="inline-block px-8 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[var(--color-brand-navy)] transition-colors"
          >
            Read Our Story →
          </Link>
        </div>
      </section>

      {/* Lifestyle & Home Accents */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">Living & Sensory Rituals</span>
            <h2 className="font-playfair text-4xl text-[var(--color-brand-navy)] mt-1 mb-3">Ifẹ́mi Home & Accents</h2>
            <p className="text-gray-500 font-light text-sm">Elevate your living space with artisanal diffusers, handwoven cushions, and sculptural brass jewellery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lifestyleHighlights.map((item) => (
              <Link key={item.slug} to={`/categories/${item.slug}`} className="group flex flex-col">
                <div className="aspect-[4/3] w-full bg-gray-100 mb-4 overflow-hidden relative shadow-sm border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-playfair text-xl text-gray-900 group-hover:text-[var(--color-brand-purple)] transition-colors font-semibold">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 font-light mt-1">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
