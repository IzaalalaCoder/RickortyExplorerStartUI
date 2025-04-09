import { ROUTES_APP } from '../app/routes';

export const ROUTES_CHARACTERS = {
  app: {
    root: () => `${ROUTES_APP.baseUrl()}/characters` as const,
  },
} as const;
