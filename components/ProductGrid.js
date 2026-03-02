const products = [
  {
    name: 'Everyday Overshirt',
    price: '$78',
    category: 'Layering',
  },
  {
    name: 'Relaxed Fit Chino',
    price: '$64',
    category: 'Bottoms',
  },
  {
    name: 'Merino Crew Sweater',
    price: '$92',
    category: 'Knitwear',
  },
  {
    name: 'Canvas Weekender Tote',
    price: '$55',
    category: 'Accessories',
  },
];

export default function ProductGrid() {
  return (
    <section aria-label="Featured clothing" className="gridSection">
      <h2>Featured Picks</h2>
      <div className="grid">
        {products.map((product) => (
          <article className="card" key={product.name}>
            <p className="category">{product.category}</p>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
