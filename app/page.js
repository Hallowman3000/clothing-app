import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/lib/catalog';

export default function Home() {
  const featured = products.filter((product) => product.featured);

  return (
    <>
      <section className="heroGrid">
        <div>
          <p className="eyebrow">Trend Report / Spring Summer 2026</p>
          <h1>Wear your confidence with timeless fashion made for every moment.</h1>
          <p className="muted">
            Explore statement silhouettes, everyday essentials, and runway-inspired pieces styled for real life.
          </p>
          <div className="ctaRow">
            <Link className="btn primary" href="/shop">
              Shop new arrivals
            </Link>
            <Link className="btn secondary" href="/cart">
              View cart
            </Link>
          </div>
        </div>
        <div className="heroImageWrap">
          <Image
            src="/images/hero-fashion.svg"
            alt="Abstract fashion hero artwork in neutral tones"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="panel">
        <h2>Shop by category</h2>
        <div className="chips">
          {categories
            .filter((entry) => entry !== 'All')
            .map((entry) => (
              <Link key={entry} href={`/shop?category=${entry}`} className="chip">
                {entry}
              </Link>
            ))}
        </div>
      </section>

      <section>
        <div className="sectionHeading">
          <h2>Featured now</h2>
          <Link href="/shop">See all</Link>
        </div>
        <div className="productGrid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="panel twoCol">
        <div>
          <h2>Style-forward shopping, designed for 2026 wardrobes</h2>
          <p className="muted">
            Explore trend-led essentials, smart layers, and occasion-ready looks curated to match how
            fashion feels in 2026.
          </p>
        </div>
        <div>
          <h3>Image sourcing</h3>
          <p className="muted">Catalog imagery is stored locally in the repository and served from /public/images.</p>
        </div>
      </section>

      <section className="panel">
        <h2>Join Atelier updates</h2>
        <p className="muted">Get drops, lookbooks, and styling notes first.</p>
        <NewsletterForm />
      </section>
    </>
  );
}
