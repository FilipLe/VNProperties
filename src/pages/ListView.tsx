import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { locations } from "../locations";
import { Location } from "../components/Location";

export default function ListView(): JSX.Element {
    return (
        <ScrollView>
            {locations.map((location: Location, index: number) => (
                <View key={index} style={styles.card}>
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
                    <Text>{location.description}</Text>
                    <Text>Price: ${location.price}</Text>
                    <Text>Rooms: {location.rooms}</Text>
                    <Text>Latitude: {location.location.latitude}</Text>
                    <Text>Longitude: {location.location.longitude}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

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
});