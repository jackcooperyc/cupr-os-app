import { NextResponse } from 'next/server';
import { getCompliancePayload, mockApiDisabledResponse } from '@/lib/mockApi';

export async function GET() {
  const blocked = mockApiDisabledResponse();
  if (blocked) return blocked;
  return NextResponse.json(getCompliancePayload());
}
