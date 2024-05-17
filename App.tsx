import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'; // Ensure React is imported when using JSX in TypeScript

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Testing on App.tsx to see changes on your app!</Text>
      <Text>
        Checking if TypeScript works
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});