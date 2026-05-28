import { NextResponse } from 'next/server';
import { getDashboardPayload, mockApiDisabledResponse } from '@/lib/mockApi';

export async function GET() {
  const blocked = mockApiDisabledResponse();
  if (blocked) return blocked;
  return NextResponse.json(getDashboardPayload());
}
