type EpisodeGlobalAPI = {
  info: InformationAPI;
  results: EpisodeInformationAPI[];
};

type EpisodeInformationAPI = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};
