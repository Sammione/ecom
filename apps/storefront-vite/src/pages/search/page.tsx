
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

// Sample mock data for search demonstration
const allCatalogItems = [
  { id: '1', name: 'Midnight Elegance Kaftan', price: '45000', category: 'Kaftans', description: 'Flowing midnight blue kaftan with delicate gold stitching.' },
  { id: '2', name: 'Royal Purple Trouser Set', price: '65000', category: 'Trouser Sets', description: 'Tailored luxury crepe trouser and top set in deep royal purple.' },
  { id: '3', name: 'Lavender Silk Loungewear', price: '35000', category: 'Loungewear', description: 'Ultra-soft breathable mulberry silk loungewear set.' },
  { id: '4', name: 'Ivory Handwoven Cushion', price: '15000', category: 'Cushions', description: 'Artisanal woven cotton cushion with textured geometric patterns.' },
  { id: '5', name: 'Oud & Amber Diffuser', price: '22000', category: 'Diffusers', description: 'Rich aromatic reed diffuser infused with natural oud and amber resins.' },
  { id: '6', name: 'Sculptural Brass Earrings', price: '18500', category: 'Jewellery', description: 'Handmade modern African minimalist brass statement earrings.' },
  { id: '7', name: 'Obsidian Silk Kaftan', price: '48000', category: 'Kaftans', description: 'Premium heavyweight silk kaftan with side slits.' },
  { id: '8', name: 'Lapis Linen Two-Piece', price: '58000', category: 'Trouser Sets', description: 'Structured lapis blue breathable linen set.' }
];

function SearchContent() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredItems = query.trim()
    ? allCatalogItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-brand-purple)] font-semibold">Search Results</span>
        <h1 className="font-playfair text-4xl md:text-5xl text-[var(--color-brand-navy)] mt-3">
          {query ? `Results for “${query}”` : 'Search our Catalog'}
        </h1>
        <p className="text-gray-500 font-light mt-2">
          {query
            ? `Found ${filteredItems.length} piece${filteredItems.length === 1 ? '' : 's'} matching your search.`
            : 'Enter a search term above to explore kaftans, trouser sets, diffusers, cushions, and jewellery.'}
        </p>
      </header>

      {query && filteredItems.length === 0 ? (
        <div className="bg-white border border-gray-200 p-16 text-center max-w-xl mx-auto my-12">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-playfair text-2xl text-[var(--color-brand-charcoal)] mb-2">No matching pieces found</h3>
          <p className="text-gray-500 font-light text-sm mb-6">
            Try checking for spelling errors, using more general search terms, or explore our top categories.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Kaftans', 'Trouser Sets', 'Diffusers', 'Jewellery'].map(cat => (
              <Link
                key={cat}
                to={`/categories/${cat.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-2 border border-[var(--color-brand-navy)] text-xs uppercase tracking-widest font-semibold hover:bg-[var(--color-brand-navy)] hover:text-white transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Link to={`/shop/${item.id}`} key={item.id} className="group bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] w-full bg-gray-100 mb-4 flex items-center justify-center text-gray-400 font-light text-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-brand-navy)] opacity-0 group-hover:opacity-5 transition-opacity" />
                {item.category} Image
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-brand-purple)] font-semibold">{item.category}</span>
              <h3 className="font-playfair text-xl text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-purple)] transition-colors mt-1 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-500 text-xs font-light line-clamp-2 mb-4">{item.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-semibold text-sm text-[var(--color-brand-navy)]">₦ {parseInt(item.price).toLocaleString()}</span>
                <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-brand-purple)]">View Piece →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <Suspense fallback={<div className="text-center py-20 text-gray-400 font-light">Loading search...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
