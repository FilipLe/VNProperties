import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { useLocations } from '../contexts/LocationContext';
import { Location } from '../components/Location';

const FavoriteProperties = () => {
  const { locations } = useLocations();
  const starredLocations = locations.filter(location => location.favorite);

  return (
    <ScrollView>
      {starredLocations.map((location: Location, index: number) => (
        <Text key={index}>{location.title}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 10,
    },
    starButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 20,
    },
});

export default FavoriteProperties;