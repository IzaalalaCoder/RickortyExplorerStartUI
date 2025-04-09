interface RootObject {
  info: Info;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
