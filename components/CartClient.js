'use client';

import { useEffect, useState } from 'react';

export default function CartClient() {
  const [cart, setCart] = useState({ items: [], subtotal: 0, shipping: 0, total: 0 });

  async function refresh() {
    const response = await fetch('/api/cart');
    const data = await response.json();
    setCart(data);
  }

  useEffect(() => {
    refresh();
  }, []);

  async function changeQty(productId, quantity) {
    await fetch('/api/cart', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity }),
    });
    refresh();
  }

  async function removeItem(productId) {
    await fetch('/api/cart', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId }),
    });
    refresh();
  }

  return (
    <section>
      <h1>Your Cart</h1>
      <div className="cartLayout">
        <div>
          {cart.items.length === 0 && <p className="muted">Your cart is empty. Add some pieces from Shop.</p>}
          {cart.items.map((item) => (
            <article key={item.productId} className="cartItem">
              <div>
                <h3>{item.product.name}</h3>
                <p className="muted">${item.product.price} each</p>
              </div>
              <div className="qtyControls">
                <button onClick={() => changeQty(item.productId, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => changeQty(item.productId, item.quantity + 1)}>+</button>
                <button className="linkBtn" onClick={() => removeItem(item.productId)}>
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="summaryCard">
          <p>Subtotal: ${cart.subtotal}</p>
          <p>Shipping: ${cart.shipping}</p>
          <h3>Total: ${cart.total}</h3>
          <button className="btn primary">Proceed to checkout</button>
        </aside>
      </div>
    </section>
  );
}
