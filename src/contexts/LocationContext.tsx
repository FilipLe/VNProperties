import React, { createContext, useState, useContext, ReactNode } from 'react';
import { locations as initialLocations } from '../locations'; // Assuming this is the path to your locations data
import { Location } from '../components/Location'; // Ensure this path is correct

interface LocationContextType {
  locations: Location[];
  setLocations: (locations: Location[]) => void;
}

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationContext = createContext<LocationContextType>({
  locations: initialLocations,
  setLocations: () => {}
});

export const useLocations = () => useContext(LocationContext);

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [locations, setLocations] = useState<Location[]>(initialLocations);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};