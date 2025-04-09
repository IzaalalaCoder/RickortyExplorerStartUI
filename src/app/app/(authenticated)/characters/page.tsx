'use client';

import { Suspense } from 'react';
import React from 'react';

import PageCharacters from '@/features/characters/PageCharacters';

export default function Page() {
  return (
    <Suspense>
      <PageCharacters />
    </Suspense>
  );
}
