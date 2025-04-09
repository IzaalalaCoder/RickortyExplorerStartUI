'use client';

import { Suspense } from 'react';
import React from 'react';

import PageLocations from '@/features/locations/PageLocations';

export default function Page() {
  return (
    <Suspense>
      <PageLocations />
    </Suspense>
  );
}
