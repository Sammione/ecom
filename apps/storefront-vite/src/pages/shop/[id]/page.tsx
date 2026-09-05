import { useParams } from 'react-router-dom';
import ProductDetailClient from './ProductDetailClient';

const catalogDatabase: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Midnight Elegance Silk Kaftan',
    price: 45000,
    salePrice: null,
    sku: 'KAFTAN-BLU-001',
    category: 'Kaftans',
    description: 'An iconic silhouette tailored in luxurious midnight silk with gold filigree piping. Cut for a relaxed, graceful drape that moves effortlessly with every step. Suitable for daytime elegance or high-profile evening celebrations.',
    fabricCare: '100% Mulberry Silk Blend. Dry clean recommended. Cold gentle hand wash with mild detergent; dry in shade; warm iron on reverse.',
    images: [
      '/images/products/kaftan-1.svg',
      '/images/products/kaftan-2.svg',
      '/images/products/kaftan-3.svg'
    ],
    colors: [
      { name: 'Midnight Navy', hex: '#0B132B', bgClass: 'bg-[#0B132B]' },
      { name: 'Royal Purple', hex: '#4B2E83', bgClass: 'bg-[#4B2E83]' },
      { name: 'Soft Lavender', hex: '#E6E6FA', bgClass: 'bg-[#E6E6FA]' }
    ],
    isOneSize: true,
    stock: 14
  },
  '2': {
    id: '2',
    name: 'Royal Purple Crepe Trouser Set',
    price: 65000,
    salePrice: 58000,
    sku: 'TSET-PRP-002',
    category: 'Trouser Sets',
    description: 'A striking coordinated ensemble comprising high-waisted tailored trousers with pressed pleats and a relaxed crossover blouse. Engineered for modern women who command elegance in professional and social spaces.',
    fabricCare: 'Premium Nigerian Crepe. Machine wash cold on delicate cycle or dry clean. Cool iron.',
    images: [
      '/images/products/trouser-1.svg',
      '/images/products/trouser-2.svg',
      '/images/products/trouser-blue.svg'
    ],
    colors: [
      { name: 'Royal Purple', hex: '#4B2E83', bgClass: 'bg-[#4B2E83]' },
      { name: 'Midnight Navy', hex: '#0B132B', bgClass: 'bg-[#0B132B]' },
      { name: 'Ivory Cream', hex: '#FAF9F6', bgClass: 'bg-[#FAF9F6]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    isOneSize: false,
    stock: 8
  },
  '3': {
    id: '3',
    name: 'Lavender Whisper Silk Loungewear',
    price: 35000,
    salePrice: null,
    sku: 'LNG-LAV-003',
    category: 'Loungewear',
    description: 'Breathe in pure comfort with our featherweight silk blend loungewear set. Featuring relaxed drawstring trousers and an open-collar tunic designed for effortless relaxation.',
    fabricCare: 'Silk-Modal weave. Hand wash cold. Line dry in shade.',
    images: [
      '/images/products/loungewear-1.svg',
      '/images/products/trouser-1.svg',
      '/images/products/cushion-1.svg'
    ],
    colors: [
      { name: 'Soft Lavender', hex: '#E6E6FA', bgClass: 'bg-[#E6E6FA]' },
      { name: 'Warm Cream', hex: '#FAF9F6', bgClass: 'bg-[#FAF9F6]' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    isOneSize: false,
    stock: 12
  },
  '4': {
    id: '4',
    name: 'Handwoven Artisanal Cushion Set',
    price: 18000,
    salePrice: 15000,
    sku: 'CSH-IVO-004',
    category: 'Cushions',
    description: 'Textured ivory and charcoal handwoven cotton cushions with bespoke tassels. Handcrafted by master weavers in Southwestern Nigeria to bring artisanal warmth into contemporary interiors.',
    fabricCare: '100% Organic Handwoven Cotton. Spot clean or gentle hand wash.',
    images: [
      '/images/products/cushion-1.svg',
      '/images/products/cushion-2.svg',
      '/images/products/diffuser-1.svg'
    ],
    colors: [
      { name: 'Warm Cream', hex: '#FAF9F6', bgClass: 'bg-[#FAF9F6]' },
      { name: 'Charcoal Grey', hex: '#333333', bgClass: 'bg-[#333333]' }
    ],
    isOneSize: true,
    stock: 20
  },
  '5': {
    id: '5',
    name: 'Royal Oud & Amber Home Diffuser (250ml)',
    price: 22000,
    salePrice: null,
    sku: 'DIF-OUD-005',
    category: 'Diffusers',
    description: 'An evocative olfactory journey through Nigerian cedar, aged agarwood, and honeyed amber. Formulated with natural botanical oils to gently infuse your living spaces for up to 4 months.',
    fabricCare: 'Rotate natural reeds weekly for optimal fragrance diffusion. Keep away from direct sunlight.',
    images: [
      '/images/products/diffuser-1.svg',
      '/images/products/diffuser-2.svg',
      '/images/products/cushion-1.svg'
    ],
    colors: [
      { name: 'Amber Gold', hex: '#D4AF37', bgClass: 'bg-[#D4AF37]' }
    ],
    isOneSize: true,
    stock: 25
  },
  '6': {
    id: '6',
    name: 'Sculptural Brass Statement Earrings',
    price: 18500,
    salePrice: null,
    sku: 'JWL-BRS-006',
    category: 'Jewellery',
    description: 'Forged by artisanal metal smiths, these lightweight sculptural drop earrings feature brushed raw brass with hypoallergenic sterling silver posts.',
    fabricCare: 'Solid Recycled Brass. Store in provided velvet pouch; polish with brass cloth.',
    images: [
      '/images/products/jewellery-1.svg',
      '/images/products/jewellery-2.svg',
      '/images/products/kaftan-1.svg'
    ],
    colors: [
      { name: 'Polished Brass', hex: '#D4AF37', bgClass: 'bg-[#D4AF37]' }
    ],
    isOneSize: true,
    stock: 16
  }
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = catalogDatabase[id] || {
    id,
    name: `Ifẹ́mi Bespoke Piece #${id}`,
    price: 45000,
    sku: `IFEMI-${id.padStart(3, '0')}`,
    category: 'Lifestyle',
    description: 'A distinctive celebration of African craftsmanship and contemporary design.',
    fabricCare: 'Hand wash cold or dry clean.',
    images: [
      '/images/products/kaftan-1.svg'
    ],
    colors: [{ name: 'Midnight Navy', hex: '#0B132B', bgClass: 'bg-[#0B132B]' }],
    isOneSize: true,
    stock: 10
  };

  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] pt-28 px-4 md:px-12 lg:px-24 pb-24">
      <ProductDetailClient product={product} />
    </main>
  );
}
