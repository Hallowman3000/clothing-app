import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const email = body?.email?.trim();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: `Thanks! ${email} has been subscribed.` });
}
