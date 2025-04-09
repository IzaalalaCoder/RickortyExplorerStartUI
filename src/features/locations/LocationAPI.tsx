type LocationGlobalAPI = {
  info: InformationAPI;
  results: LocationInformationAPI[];
};

type LocationInformationAPI = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
