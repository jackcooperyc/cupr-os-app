import { NextResponse } from 'next/server';

/**
 * Allow CŪPR.OS mock API routes only outside production OR when the operator has
 * explicitly opted in via `CUPROS_MOCK_ENABLED=1`.
 */
export function mockApiDisabledResponse(): NextResponse | null {
  const enabled =
    process.env.NODE_ENV !== 'production' || process.env.CUPROS_MOCK_ENABLED === '1';
  if (enabled) return null;
  return NextResponse.json(
    { message: 'CŪPR.OS mock API is disabled in this environment.' },
    { status: 404 },
  );
}
