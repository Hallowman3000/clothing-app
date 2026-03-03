import ShopClient from '@/components/ShopClient';
import { categories } from '@/lib/catalog';

export default function ShopPage({ searchParams }) {
  const initialCategory = searchParams?.category || 'All';

  return (
    <>
      <section>
        <p className="eyebrow">Shop</p>
        <h1>Browse the full collection</h1>
      </section>
      <ShopClient categories={categories} initialCategory={initialCategory} />
    </>
  );
}
