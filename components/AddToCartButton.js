'use client';

import { useState } from 'react';

export default function AddToCartButton({ productId, compact = false }) {
  const [status, setStatus] = useState('idle');

  async function handleAdd() {
    setStatus('loading');
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 }),
    });

    setStatus(response.ok ? 'added' : 'error');
    setTimeout(() => setStatus('idle'), 1800);
  }

  return (
    <button className={`btn primary ${compact ? 'compact' : ''}`} onClick={handleAdd}>
      {status === 'loading' && 'Adding...'}
      {status === 'added' && 'Added ✓'}
      {status === 'error' && 'Retry'}
      {status === 'idle' && 'Add to cart'}
    </button>
  );
}
