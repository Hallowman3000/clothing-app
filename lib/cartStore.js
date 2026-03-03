import { products } from '@/lib/catalog';

const cart = new Map();

export function getCartItems() {
  return Array.from(cart.entries()).flatMap(([productId, quantity]) => {
    const product = products.find((entry) => entry.id === productId);
    if (!product) return [];

    return [
      {
        productId,
        quantity,
        product,
        lineTotal: quantity * product.price,
      },
    ];
  });
}

export function addToCart(productId, quantity = 1) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return { error: 'Product not found.' };

  const currentQuantity = cart.get(productId) || 0;
  cart.set(productId, currentQuantity + Math.max(1, quantity));
  return { ok: true };
}

export function updateCart(productId, quantity) {
  if (quantity <= 0) {
    cart.delete(productId);
    return { ok: true };
  }

  const product = products.find((entry) => entry.id === productId);
  if (!product) return { error: 'Product not found.' };

  cart.set(productId, quantity);
  return { ok: true };
}

export function removeFromCart(productId) {
  cart.delete(productId);
}

export function cartSummary() {
  const items = getCartItems();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const shipping = subtotal > 0 ? 9 : 0;

  return {
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}
