'use client';

import { useEffect, useState } from 'react';

interface UseCuprosMockResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useCuprosMock<T>(path: string): UseCuprosMockResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/internal/cupros-mock/${path}`);
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { message?: string } | null;
          throw new Error(body?.message ?? `Failed to load ${path}`);
        }
        const json = (await res.json()) as T;
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [path]);

  return { data, loading, error };
}
