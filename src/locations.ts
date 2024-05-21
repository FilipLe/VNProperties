export interface Location {
  title: string;
  location: {
    latitude: number;
    longitude: number;
  };
  description: string;
}

export const locations: Location[] = [
  {
    title: "Location 1",
    location: {
      latitude: 50.08804,
      longitude: 19.99503,
    },
    description: "Description of location 1",
  },
  {
    title: "Location 2",
    location: {
      latitude: 52.2,
      longitude: 21,
    },
    description: "Description of location 2",
  },
];
