'use client';

import { Suspense } from 'react';
import React from 'react';

import PageEpisodes from '@/features/episodes/PageEpisodes';

export default function Page() {
  return (
    <Suspense>
      <PageEpisodes />
    </Suspense>
  );
}
