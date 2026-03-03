import { NextResponse } from 'next/server';
import { products } from '@/lib/catalog';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const search = searchParams.get('search');

  const filtered = products.filter((product) => {
    const categoryMatch = !category || category === 'All' || product.category === category;
    const featuredMatch = featured !== 'true' || product.featured;
    const searchMatch =
      !search ||
      `${product.name} ${product.description}`
        .toLowerCase()
        .includes(search.trim().toLowerCase());

    return categoryMatch && featuredMatch && searchMatch;
  });

  return NextResponse.json({ products: filtered, total: filtered.length });
}
