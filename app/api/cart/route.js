import { NextResponse } from 'next/server';
import { addToCart, cartSummary, removeFromCart, updateCart } from '@/lib/cartStore';

export async function GET() {
  return NextResponse.json(cartSummary());
}

export async function POST(request) {
  const body = await request.json();
  const result = addToCart(body.productId, Number(body.quantity || 1));

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 404 });
  }

  return NextResponse.json(cartSummary());
}

export async function PATCH(request) {
  const body = await request.json();
  const result = updateCart(body.productId, Number(body.quantity));

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 404 });
  }

  return NextResponse.json(cartSummary());
}

export async function DELETE(request) {
  const body = await request.json();
  removeFromCart(body.productId);
  return NextResponse.json(cartSummary());
}
