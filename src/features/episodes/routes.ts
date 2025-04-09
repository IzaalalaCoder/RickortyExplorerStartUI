import { ROUTES_APP } from '../app/routes';

export const ROUTES_EPISODES = {
  app: {
    root: () => `${ROUTES_APP.baseUrl()}/episodes` as const,
  },
} as const;
