import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-brand-purple)] font-bold">
            Our Transatlantic Heritage
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl text-[var(--color-brand-navy)] mt-3 mb-6">
            Lagos Heart. London Soul.
          </h1>
          <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Ifẹ́mi Lifestyle operates between Nigeria and the United Kingdom — bridging the rich artisanal textile traditions of West Africa with cosmopolitan British elegance and global luxury.
          </p>
        </header>

        {/* Story Section 1: Transatlantic Journey */}
        <section className="bg-white p-8 md:p-14 border border-gray-200 shadow-sm mb-12 space-y-6 text-gray-700 font-light leading-relaxed text-sm md:text-base">
          <h2 className="font-playfair text-2xl md:text-3xl text-[var(--color-brand-navy)]">
            A Tale of Two Fashion Capitals
          </h2>
          <p>
            In Yoruba, <em>Ifẹ́mi</em> translates to “What I Cherish” or “My Beloved”. Our journey began from a shared love for the vibrant energy of Lagos and the structured refinement of London. We wanted to create pieces that feel equally commanding walking into a private dinner in Mayfair, London as they do at an exclusive Sunday brunch in Ikoyi, Lagos.
          </p>
          <p>
            We operate two dedicated hubs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div className="p-5 bg-[var(--color-brand-cream)] border border-gray-200">
              <h4 className="font-playfair text-lg font-bold text-[var(--color-brand-navy)] mb-1">
                🇳🇬 The Lagos Atelier
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Located in Victoria Island, Lagos, our atelier is where our master patternmakers, tailors, and textile artisans hand-finish our fluid kaftans, extract natural Nigerian botanical essences, and hand-pour our diffusers.
              </p>
            </div>
            <div className="p-5 bg-[var(--color-brand-cream)] border border-gray-200">
              <h4 className="font-playfair text-lg font-bold text-[var(--color-brand-navy)] mb-1">
                🇬🇧 The London Studio
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Based in London, our studio oversees creative direction, British tailoring proportions (UK sizing 6–20), European quality control, and rapid domestic UK dispatch via Royal Mail Tracked and DPD.
              </p>
            </div>
          </div>
          <p>
            We reject fast, disposable fashion. Every kaftan, tailored crepe set, handwoven cushion, and fragrance bottle is produced in limited artisanal runs, ensuring ethical compensation for our Nigerian artisans and pristine luxury standards for our global clientele.
          </p>
        </section>

        {/* 3 Transatlantic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 border border-gray-100 text-center">
            <span className="text-2xl mb-3 block">👑</span>
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-2">Artisanal Integrity</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Every garment is ethically tailored in Lagos, supporting master artisans earning dignified, fair living wages.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-100 text-center">
            <span className="text-2xl mb-3 block">🇬🇧</span>
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-2">British Fit &amp; Concierge</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Precision UK sizing (UK 6 to UK 20) with localized customer concierge in London and seamless UK returns.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-100 text-center">
            <span className="text-2xl mb-3 block">✈️</span>
            <h3 className="font-playfair text-xl text-[var(--color-brand-navy)] mb-2">Global Seamlessness</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Dual-currency payments in ₦ NGN and £ GBP, with dedicated domestic fulfillment centers in both Nigeria and the UK.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[var(--color-brand-navy)] text-[var(--color-brand-cream)] p-12">
          <h2 className="font-playfair text-3xl mb-4">Discover The Transatlantic Wardrobe</h2>
          <p className="text-xs text-white/70 font-light max-w-md mx-auto mb-8">
            Experience our fluid drape kaftans, tailored British sets, and botanical home diffusers.
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
