import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';

export default function ProductCard({ product }) {
  return (
    <article className="productCard">
      <Link href={`/product/${product.slug}`} className="imageWrap">
        <SmartImage src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 25vw" />
      </Link>
      <div className="cardBody">
        <p className="category">{product.category}</p>
        <h3>
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="muted">{product.color}</p>
        <div className="cardFooter">
          <strong>${product.price}</strong>
          <AddToCartButton productId={product.id} compact />
        </div>
      </div>
    </article>
  );
}
