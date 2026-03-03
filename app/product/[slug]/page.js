import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import { getProductBySlug } from '@/lib/catalog';

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <section className="productDetail">
      <div className="detailImageWrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div>
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="muted">{product.description}</p>
        <p>
          <strong>${product.price}</strong> · {product.color}
        </p>
        <p className="muted">Sizes: {product.sizes.join(', ')}</p>
        <AddToCartButton productId={product.id} />
        <p className="muted">
          Free image source: <a href={product.sourceUrl}>Unsplash attribution</a>
        </p>
      </div>
    </section>
  );
}
