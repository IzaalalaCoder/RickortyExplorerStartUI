import { ROUTES_APP } from '../app/routes';

export const ROUTES_LOCATIONS = {
  app: {
    root: () => `${ROUTES_APP.baseUrl()}/locations` as const,
  },
} as const;
