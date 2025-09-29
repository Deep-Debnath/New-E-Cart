'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export default function ThemeRegistry({ children }) {
  return <CacheProvider value={muiCache}>{children}</CacheProvider>;
}