import React from 'react';
import { StyleSheet, ScrollView, Text, Pressable, View, Image } from 'react-native';
import { useLocations } from '../contexts/LocationContext';
import { Location } from '../components/Location';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../services/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type FavoritePropertiesNavigationProp = StackNavigationProp<RootStackParamList, 'FavoriteProperties'>;
const FavoriteProperties = () => {
  const navigation = useNavigation<FavoritePropertiesNavigationProp>();

  const { locations } = useLocations();
  const starredLocations = locations.filter(location => location.favorite);

  return (
    <ScrollView>
      {starredLocations.map((location: Location, index: number) => (
        <Pressable
            key = {index}
            style = {styles.card}
            onPress = {() => {
                navigation.navigate('PropertyProfile', {location});
            }}
        >
            <Text style={styles.title}>{location.title}</Text>
            <View style={styles.divider} />
            <Image 
            style={{
                width: '100%',
                height: 180,
                // resizeMode: 'contain'
            }}
            source={{ uri: location.imgURL }}
            />
            <Text>Price: ${location.price}</Text>
            <Text>Rooms: {location.rooms}</Text>
            <Text>Latitude: {location.location.latitude}</Text>
            <Text>Longitude: {location.location.longitude}</Text>
        </Pressable>
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