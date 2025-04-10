import { z } from 'zod';

const locationSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  dimension: z.string(),
  residents: z.array(z.string()),
  url: z.string(),
  created: z.string(),
});

const locationsSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string(),
    prev: z.string(),
  }),
  results: z.array(
    z.object({
      locationSchema,
    })
  ),
});

export type LocationAPI = z.infer<typeof locationSchema>;
export type LocationsAPI = z.infer<typeof locationsSchema>;
