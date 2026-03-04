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
      'https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
      'https://images.pexels.com/photos/15349647/pexels-photo-15349647.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    image: '/images/products/merino-knit-polo.svg',
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
      'https://images.pexels.com/photos/9968536/pexels-photo-9968536.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    image: '/images/products/essential-rib-tank.svg',
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
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    image: '/images/products/leather-crossbody-bag.svg',
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
    image: '/images/products/minimal-sneaker.svg',
  },
];

export const categories = ['All', ...new Set(products.map((p) => p.category))];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
