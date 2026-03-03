export const products = [
  {
    id: 'p1',
    slug: 'linen-resort-shirt',
    name: 'Linen Resort Shirt',
    category: 'Shirts',
    price: 68,
    color: 'Sand Beige',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    description:
      'Breathable linen shirt designed for warm-weather layering and elevated daily wear.',
    image:
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/hTV8aaPziOQ',
  },
  {
    id: 'p2',
    slug: 'tailored-wide-leg-trouser',
    name: 'Tailored Wide-Leg Trouser',
    category: 'Bottoms',
    price: 92,
    color: 'Graphite',
    sizes: ['XS', 'S', 'M', 'L'],
    featured: true,
    description: 'Fluid drape and structured waist for a polished silhouette from day to night.',
    image:
      'https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/mhS5A8M4e4g',
  },
  {
    id: 'p3',
    slug: 'merino-knit-polo',
    name: 'Merino Knit Polo',
    category: 'Knitwear',
    price: 84,
    color: 'Stone',
    sizes: ['S', 'M', 'L'],
    featured: false,
    description: 'Soft merino knit polo with minimal placket and clean rib finish.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/JjYQGdA2f5s',
  },
  {
    id: 'p4',
    slug: 'city-trench-coat',
    name: 'City Trench Coat',
    category: 'Outerwear',
    price: 148,
    color: 'Khaki',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    description: 'Water-resistant trench with relaxed shoulders and belt for versatile styling.',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/pg_WCHWSdT8',
  },
  {
    id: 'p5',
    slug: 'essential-rib-tank',
    name: 'Essential Rib Tank',
    category: 'Basics',
    price: 34,
    color: 'Ivory',
    sizes: ['XS', 'S', 'M', 'L'],
    featured: false,
    description: 'Premium rib cotton tank with sculpted fit for layering or solo wear.',
    image:
      'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/7YVZYZeITc8',
  },
  {
    id: 'p6',
    slug: 'structured-denim-jacket',
    name: 'Structured Denim Jacket',
    category: 'Outerwear',
    price: 110,
    color: 'Indigo',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    description: 'Classic denim with modern cropped proportion and brushed hardware.',
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/ah7yIXWrtKs',
  },
  {
    id: 'p7',
    slug: 'leather-crossbody-bag',
    name: 'Leather Crossbody Bag',
    category: 'Accessories',
    price: 120,
    color: 'Chocolate',
    sizes: ['One Size'],
    featured: false,
    description: 'Compact full-grain leather bag with adjustable strap and magnetic closure.',
    image:
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/q3QPw37J6Xs',
  },
  {
    id: 'p8',
    slug: 'minimal-sneaker',
    name: 'Minimal Sneaker',
    category: 'Footwear',
    price: 96,
    color: 'White',
    sizes: ['40', '41', '42', '43', '44'],
    featured: false,
    description: 'Everyday leather sneaker with comfort insole and clean profile.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    sourceUrl: 'https://unsplash.com/photos/164_6wVEHfI',
  },
];

export const categories = ['All', ...new Set(products.map((p) => p.category))];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
