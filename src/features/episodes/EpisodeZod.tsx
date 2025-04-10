import { z } from 'zod';

export const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  air_date: z.string(),
  episode: z.string(),
  characters: z.array(z.string()),
  url: z.string(),
  created: z.string(),
});

export const episodesSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string().nullable(),
    prev: z.string().nullable(),
  }),
  results: z.array(episodeSchema),
});

export type EpisodeAPI = z.infer<typeof episodeSchema>;
export type EpisodesAPI = z.infer<typeof episodesSchema>;
