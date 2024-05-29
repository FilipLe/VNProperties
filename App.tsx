import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
          <Callout style = {{padding: 6}}>
            <Text style = {{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>{item.title}</Text>
            <Text style = {{marginBottom: 5}}>{item.description}</Text>
            <Button title="View Location" onPress = {() => handleViewProperty(item)}/>
          </Callout>
        </Marker>
      )
    });
  };
  
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
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
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="List View" component={ListView} />
        <Drawer.Screen name="PropertyProfile" component={PropertyProfile}
          options={{
            drawerItemStyle: { display: 'none' }
          }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
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