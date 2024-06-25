import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import MapView, { Region, Marker, Callout } from 'react-native-maps';
import React, { useState } from 'react'; 
import Settings from './src/pages/Settings';
import ListView from './src/pages/ListView';
import { locations } from './src/locations';
import { Button } from 'react-native-elements';
import CustomDrawerContent from './src/components/CustomDrawerComponent';
import PropertyProfile from './src/pages/PropertyProfile';
import { Location } from './src/components/Location';
import { RootStackParamList } from './src/services/AppNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import FavoriteProperties from './src/pages/FavoriteProperties';
import { LocationProvider } from './src/contexts/LocationContext';

const Drawer = createDrawerNavigator();

const onRegionChange = (region: Region) => {
  console.log(region);
};

type AppNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

function HomeScreen({ navigation }: { navigation: AppNavigationProp}): JSX.Element {  
  const handleViewProperty = (item : Location) => {
    navigation.navigate('PropertyProfile', { location: item })
    console.log(item);
  };

  const showLocationOfListing = () => {
    return locations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
          <Callout style = {{padding: 20}}>
            <Text style = {{fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: 'black'}}>{item.title}</Text>
            <Image 
                style = {{width: 160, height: 100, borderRadius: 6, marginBottom: 10}}
                source={{ uri: item.imgURL }}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <View style={{ backgroundColor: 'lightgrey', borderRadius: 20, padding: 5, marginRight: 10 }}>
                <Text style={{ color: 'black' }}>${item.price}</Text>
              </View>

              <View style={{ backgroundColor: 'lightgrey', borderRadius: 20, padding: 5 }}>
                <Text style={{ color: 'black' }}>{item.rooms} rooms</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <View style={{ backgroundColor: 'lightgrey', borderRadius: 20, padding: 5, marginRight: 10 }}>
                <Text style={{ color: 'black' }}>{item.area} m
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14 }}>2</Text>
                    </View>
                </Text>
              </View>

              <View style={{ backgroundColor: 'lightgrey', borderRadius: 20, padding: 5 }}>
                <Text style={{ color: 'black' }}> 
                  {item.pricePerArea} $/m
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14 }}>2</Text>
                  </View>
                </Text>
              </View>
            </View>

            <Button title="View Location" onPress = {() => handleViewProperty(item)}/>
          </Callout>
        </Marker>
      )
    });
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text.length > 0) {
      const filteredData = locations.filter(location =>
        location.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLocations(filteredData);
    } else {
      setFilteredLocations([]);
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Wpisz lokalizację"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {filteredLocations.length > 0 ? (
          <FlatList
            data={filteredLocations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ padding: 10, backgroundColor: '#fff' }}
                onPress={() => {
                  setSearchQuery('');
                  setFilteredLocations([]);
                  handleViewProperty(item);
                }}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        ) : searchQuery.length > 0 && (
          <Text style={{ padding: 10, backgroundColor: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
            Property not found
          </Text>
        )}
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
    <LocationProvider>
      <NavigationContainer>
        <Drawer.Navigator 
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="List View" component={ListView} />
          <Drawer.Screen name="Favorite Properties" component={FavoriteProperties} />
          <Drawer.Screen name="PropertyProfile" component={PropertyProfile}
            options={{
              drawerItemStyle: { display: 'none' }
            }}
          />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </LocationProvider>
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  searchBar: {
    height: 40,
    width: '96%',
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