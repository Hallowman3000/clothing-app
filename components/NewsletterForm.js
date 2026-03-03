'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setMessage(data.message || data.error || 'Something went wrong.');
    if (response.ok) setEmail('');
  }

  return (
    <form className="newsletterForm" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button className="btn primary" type="submit">
        Subscribe
      </button>
      {message && <p className="muted">{message}</p>}
    </form>
  );
}
