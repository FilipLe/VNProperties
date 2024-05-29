import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Location } from "../components/Location";

export default function PropertyProfile({ route }: { route: any}): JSX.Element {
    const { location } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{location.title}</Text>
            <Image 
                style={styles.image}
                source={{ uri: location.imgURL }}
            />
            <Text>{location.description}</Text>
            <Text>Price: ${location.price}</Text>
            <Text>Rooms: {location.rooms}</Text>
            <Text>Latitude: {location.location.latitude}</Text>
            <Text>Longitude: {location.location.longitude}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
});