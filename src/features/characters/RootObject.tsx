interface RootObject {
  info: Info;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
