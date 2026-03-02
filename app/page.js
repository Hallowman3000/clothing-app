import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">Spring Collection 2026</p>
        <h1>Modern Essentials for Every Day</h1>
        <p>
          Clothing App is now powered by React and Next.js for a fast, scalable shopping
          experience.
        </p>
      </section>
      <ProductGrid />
    </main>
  );
}
