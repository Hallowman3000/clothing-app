'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';

export default function ShopClient({ categories, initialCategory = 'All' }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set('search', query);
    if (category) params.set('category', category);

    fetch(`/api/products?${params.toString()}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.products || []));
  }, [query, category]);

  return (
    <section>
      <div className="shopControls">
        <input
          placeholder="Search product or style"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="chips">
          {categories.map((entry) => (
            <button
              key={entry}
              className={`chip ${category === entry ? 'active' : ''}`}
              onClick={() => setCategory(entry)}
            >
              {entry}
            </button>
          ))}
        </div>
      </div>

      <div className="productGrid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
