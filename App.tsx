import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react'; // Ensure React is imported when using JSX in TypeScript

export default function App(): JSX.Element {
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
        {/* Empty container for future map implementation */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBarContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchBar: {
    height: 40,
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
});