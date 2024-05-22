import React from "react";
import { Text, View, Image } from "react-native";
import { Location } from "../locations";

// Extend the Location interface to include additional properties
interface PropertyProps extends Location {
  photoUrl: string;
  price: number;
  area: number;
  rooms: number;
}

const Property: React.FC<PropertyProps> = ({ title, description, location, photoUrl, price, area, rooms }) => {
  return (
    <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
      <Image source={{ uri: photoUrl }} style={{ width: '100%', height: 200 }} resizeMode="cover" />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text>{description}</Text>
      <Text>Price: ${price}</Text>
      <Text>Area: {area} sqm</Text>
      <Text>Rooms: {rooms}</Text>
      <Text>Address: {location.latitude}, {location.longitude}</Text> {/* Adjusted to use latitude and longitude */}
    </View>
  );
};

export default Property;