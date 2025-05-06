import { NextResponse } from 'next/server';

import { schema } from '@/features/form/schemas/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name } = schema.parse(body);

    console.log(`Thank you for your interest, ${name}`);

    return NextResponse.json({ message: 'Message generated on the server' });
  } catch {
    return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
  }
}
