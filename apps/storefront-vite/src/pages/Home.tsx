import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';

export default function Home() {
  const { currency } = useCurrency();

  const featuredCategories = [
    {
      name: 'Kaftans',
      slug: 'kaftans',
      subtitle: 'One Size Fluid Drape (UK 8–20)',
      image: '/images/products/kaftan-1.svg'
    },
    {
      name: 'Trouser Sets',
      slug: 'trouser-sets',
      subtitle: 'British-Cut Tailored Sets (XS–XXL)',
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
      desc: 'Masterfully handwoven by master Nigerian weavers.'
    },
    {
      name: 'Sculptural Brass Jewellery',
      slug: 'jewellery',
      image: '/images/products/jewellery-1.svg',
      desc: 'Lost-wax cast modern African minimalist statements.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Editorial Background */}
      <section className="relative min-h-[95vh] w-full bg-[var(--color-brand-navy)] overflow-hidden flex items-center justify-center pt-28 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1800&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-navy)]/95 via-[var(--color-brand-navy)]/80 to-[var(--color-brand-purple)]/90" />
        
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl py-12">
          {/* Dual-Presence Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.25em] font-semibold mb-6">
            <span>Lagos Atelier 🇳🇬</span>
            <span>•</span>
            <span>London Studio 🇬🇧</span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[var(--color-brand-cream)] leading-tight mb-6">
            Lagos Craftsmanship. <br/> London Elegance.
          </h1>
          
          <p className="text-[var(--color-brand-cream)] text-base md:text-xl font-light mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contemporary African luxury crafted by master artisans in Lagos and curated in London. Discover hand-finished silk kaftans, sharp tailored crepe sets, and artisanal home scents with express doorstep delivery across Nigeria and the United Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="bg-[var(--color-brand-cream)] text-[var(--color-brand-navy)] px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-[var(--color-brand-lavender)] transition-colors duration-300 shadow-2xl"
            >
              Explore Collection ({currency}) →
            </Link>
            <Link
              to="/categories/kaftans"
              className="border border-white/40 text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-[var(--color-brand-navy)] transition-colors backdrop-blur-sm"
            >
              Signature Kaftans (UK 8–20)
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-Border Pillars: Lagos x London */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-lavender)] flex items-center justify-center text-[var(--color-brand-purple)] font-bold shrink-0">
              🇳🇬
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold text-[var(--color-brand-navy)]">Handmade in Lagos</h4>
              <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                Every piece is tailored by heritage Nigerian craftspeople in our Victoria Island atelier using mulberry silks and breathable crepes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-lavender)] flex items-center justify-center text-[var(--color-brand-purple)] font-bold shrink-0">
              🇬🇧
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold text-[var(--color-brand-navy)]">Curated in London</h4>
              <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                Precision British cuts, standard UK sizing (UK 6–20), and local UK concierge with rapid Royal Mail &amp; DPD tracked dispatch.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-lavender)] flex items-center justify-center text-[var(--color-brand-purple)] font-bold shrink-0">
              ✈️
            </div>
            <div>
              <h4 className="font-playfair text-lg font-bold text-[var(--color-brand-navy)]">Dual-Currency &amp; Shipping</h4>
              <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                Seamless checkout in ₦ NGN or £ GBP. Zero customs surprises for UK clients and same-day delivery options across Lagos.
              </p>
            </div>
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
            The Transatlantic Atelier Standard
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl leading-tight mb-6">
            “Rooted in Lagos heritage. Styled for cosmopolitan London living.”
          </h2>
          <p className="text-white/70 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            From our design atelier in Lagos to our presence in London, Ifẹ́mi bridges continents. Every kaftan, tailored set, and diffuser tells a story of modern African luxury with British sophistication.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[var(--color-brand-navy)] transition-colors"
            >
              Our Story (Lagos &amp; London) →
            </Link>
            <Link
              to="/shipping"
              className="inline-block px-8 py-3.5 bg-white/10 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition-colors"
            >
              Delivery Guide (UK &amp; Nigeria)
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle & Home Accents */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-bold">Living &amp; Sensory Rituals</span>
            <h2 className="font-playfair text-4xl text-[var(--color-brand-navy)] mt-1 mb-3">Ifẹ́mi Home &amp; Accents</h2>
            <p className="text-gray-500 font-light text-sm">Elevate your living space in Lagos, London, and beyond with artisanal diffusers, handwoven cushions, and sculptural brass jewellery.</p>
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
