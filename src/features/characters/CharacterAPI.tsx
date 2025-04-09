type CharacterGlobalAPI = {
  info: InformationAPI;
  results: CharacterInformationAPI[];
};

type CharacterInformationAPI = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Origin = {
  name: string;
  url: string;
};

type InformationAPI = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};
