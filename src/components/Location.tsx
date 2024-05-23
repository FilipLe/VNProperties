export interface Location {
    title: string;
    location: {
      latitude: number;
      longitude: number;
    };
    description: string;
    price: number;
    rooms: number;
}