import { z } from 'zod';

const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  type: z.string(),
  gender: z.string(),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  image: z.string(),
  episode: z.array(z.string()),
  url: z.string(),
  created: z.string(),
});

const charactersSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string(),
    prev: z.string(),
  }),
  results: z.array(characterSchema),
});

export type CharacterAPI = z.infer<typeof characterSchema>;
export type CharactersAPI = z.infer<typeof charactersSchema>;
