import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import MapView, { Region, Marker } from 'react-native-maps';
import React from 'react'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Settings from './src/pages/Settings';
import { locations } from './src/locations';

const Stack = createStackNavigator();

const onRegionChange = (region: Region) => {
  console.log(region);
};

const showLocationOfListing = () => {
  return locations.map((item, index) => {
    return (
      <Marker
        key={index}
        coordinate={item.location}
        title={item.title}
        description={item.description}
      />
    )
  });
};

function HomeScreen({ navigation }: { navigation: NavigationProp<any>}): JSX.Element {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="menu" size={30} color="#000" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Wpisz lokalizację"
        />
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView 
          style = {{width:'100%', height:'100%'}}
          onRegionChange = {onRegionChange}
        >
          {showLocationOfListing()}
        </MapView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // main home screen container
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  searchBar: {
    height: 40,
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginLeft: 10, 
  },

  mapContainer: {
    flex: 1,
    width: '100%',
  },
});