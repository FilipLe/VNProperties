import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PropertyProfile({ route }: { route: any}): JSX.Element {
    const { location } = route.params;

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{ uri: location.imgURL }}
            />
            <Text style={styles.title}>{location.title}</Text>
            <Text style={styles.header}>Description:</Text>
            <Text style={styles.details}>{location.description}</Text>

            <Text style={styles.header}>Details:</Text>
            <Text style={styles.details}>Price: ${location.price}</Text>
            <Text style={styles.details}>Rooms: {location.rooms}</Text>
            <Text style={styles.details}>Latitude: {location.location.latitude}</Text>
            <Text style={styles.details}>Longitude: {location.location.longitude}</Text>
            
            <Text style={styles.header}>Contact:</Text>
            <Text style={styles.details}>Phone number: blah</Text>
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
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details:{
        fontSize: 15,
        marginBottom: 10,
    }
});

