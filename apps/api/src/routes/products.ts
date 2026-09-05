import { Router, Request, Response } from 'express';
import { prisma } from '../db';

const router = Router();

// Cross-border catalog (Lagos Atelier x London Studio)
export const fallbackProducts = [
  {
    id: '1',
    name: 'Midnight Elegance Silk Kaftan',
    slug: 'midnight-elegance-silk-kaftan',
    price: 45000,
    priceGBP: 28,
    category: 'Kaftans',
    image: '/images/products/kaftan-1.svg',
    isOneSize: true,
    stock: 14,
    sku: 'KAFTAN-BLU-001',
    tag: 'Best Seller',
    origin: 'Handcrafted in Lagos, Nigeria',
    curated: 'Dispatched from London Studio & Lagos Hub',
    sizes: ['UK 8 - UK 20 (Fluid Drape)'],
    description: 'Flowing midnight silk kaftan tailored by master Nigerian artisans. Designed for effortless grace in Lagos heat or London evening gatherings.'
  },
  {
    id: '2',
    name: 'Royal Purple Crepe Trouser Set',
    slug: 'royal-purple-crepe-trouser-set',
    price: 65000,
    priceGBP: 40,
    salePrice: 58000,
    salePriceGBP: 36,
    category: 'Trouser Sets',
    image: '/images/products/trouser-1.svg',
    isOneSize: false,
    stock: 8,
    sku: 'TSET-PRP-002',
    tag: 'Sale',
    origin: 'Tailored in Lagos, Nigeria',
    curated: 'British Cut & Silhouette',
    sizes: ['UK 8 (XS)', 'UK 10 (S)', 'UK 12 (M)', 'UK 14 (L)', 'UK 16 (XL)', 'UK 18 (XXL)'],
    description: 'Crisp high-waisted trousers with matching crossover blouse. Precision British tailoring blended with rich African regal purple crepe.'
  },
  {
    id: '3',
    name: 'Lavender Whisper Silk Loungewear',
    slug: 'lavender-whisper-silk-loungewear',
    price: 35000,
    priceGBP: 22,
    category: 'Loungewear',
    image: '/images/products/loungewear-1.svg',
    isOneSize: false,
    stock: 12,
    sku: 'LNG-LAV-003',
    tag: 'New Arrival',
    origin: 'Mulberry Silk, Lagos Atelier',
    curated: 'London Loungewear Collection',
    sizes: ['UK 8 (XS)', 'UK 10 (S)', 'UK 12 (M)', 'UK 14 (L)', 'UK 16 (XL)'],
    description: 'Featherweight silk two-piece crafted for supreme comfort from weekend brunches in Lagos to relaxed mornings in London.'
  },
  {
    id: '4',
    name: 'Handwoven Artisanal Cushion Set',
    slug: 'handwoven-artisanal-cushion-set',
    price: 18000,
    priceGBP: 12,
    salePrice: 15000,
    salePriceGBP: 10,
    category: 'Cushions',
    image: '/images/products/cushion-1.svg',
    isOneSize: true,
    stock: 20,
    sku: 'CSH-IVO-004',
    origin: 'Handwoven by master Nigerian weavers',
    curated: 'London Contemporary Home Living',
    description: 'Textured artisanal cotton cushions with geometric motifs celebrating Yoruba weaving heritage.'
  },
  {
    id: '5',
    name: 'Royal Oud & Amber Home Diffuser',
    slug: 'royal-oud-amber-home-diffuser',
    price: 22000,
    priceGBP: 15,
    category: 'Diffusers',
    image: '/images/products/diffuser-1.svg',
    isOneSize: true,
    stock: 25,
    sku: 'DIF-OUD-005',
    tag: 'Bestseller',
    origin: 'Hand-blended in Lagos with Nigerian Cedar',
    curated: 'London Olfactory Series',
    description: 'Rich warm amber and deep royal oud crafted with essential botanical oils.'
  },
  {
    id: '6',
    name: 'Sculptural Brass Statement Earrings',
    slug: 'sculptural-brass-statement-earrings',
    price: 18500,
    priceGBP: 12,
    category: 'Jewellery',
    image: '/images/products/jewellery-1.svg',
    isOneSize: true,
    stock: 15,
    sku: 'JWL-BRS-006',
    origin: 'Lost-wax cast in Benin & Lagos',
    curated: 'London Studio Adornments',
    description: 'Architectural, organic drop earrings handcrafted from recycled solid brass with high-shine polish.'
  }
];

// Get all products
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category, search } = req.query;
    let whereClause: any = { status: 'PUBLISHED' };

    if (category) {
      whereClause.category = { slug: String(category) };
    }

    if (search) {
      whereClause.OR = [
        { name: { contains: String(search), mode: 'insensitive' } },
        { description: { contains: String(search), mode: 'insensitive' } }
      ];
    }

    const dbProducts = await prisma.product.findMany({
      where: whereClause,
      include: { images: true, category: true, variants: true }
    });

    if (dbProducts && dbProducts.length > 0) {
      return res.json(dbProducts);
    }
  } catch (error) {
    // Database offline or error, gracefully fallback
  }

  // Fallback to cross-border catalog
  const { category, search } = req.query;
  let results = [...fallbackProducts];

  if (category) {
    results = results.filter(p => p.category.toLowerCase() === String(category).toLowerCase());
  }

  if (search) {
    const q = String(search).toLowerCase();
    results = results.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  res.json(results);
});

// Get single product by id or slug
router.get('/:idOrSlug', async (req: Request, res: Response): Promise<any> => {
  const { idOrSlug } = req.params;

  try {
    const dbProduct = await prisma.product.findFirst({
      where: {
        OR: [{ id: idOrSlug }, { slug: idOrSlug }]
      },
      include: {
        images: { orderBy: { sortOrder: 'asc' } },
        category: true,
        variants: true,
        reviews: { where: { status: 'APPROVED' } }
      }
    });

    if (dbProduct) {
      return res.json(dbProduct);
    }
  } catch (error) {
    // Database offline, fallback to memory
  }

  const fallback = fallbackProducts.find(p => p.id === idOrSlug || p.slug === idOrSlug);
  if (!fallback) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(fallback);
});

export default router;
