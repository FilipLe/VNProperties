import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps';


export default function PropertyProfile({ route, navigation }: { route: any, navigation: any }): JSX.Element {
    const { location } = route.params;
    
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    const descriptionWords = location.description.split(' ');

    return (
        <ScrollView style={styles.container}>
            <Image 
                style={styles.image}
                source={{ uri: location.imgURL }}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{location.title}</Text>
                
                <View style={styles.section}>
                    <Text style={styles.header}>Address</Text>
                    <Text style={styles.details}>(Insert address){location.address}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <MapView
                            style={styles.map}
                            region={{
                                latitude: location.location.latitude,
                                longitude: location.location.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                            scrollEnabled={false}
                            zoomEnabled={false}
                        >
                            <Marker
                                coordinate={{
                                    latitude: location.location.latitude,
                                    longitude: location.location.longitude
                                }}
                            />
                        </MapView>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>Description</Text>
                    {showFullDescription || descriptionWords.length <= 22 ? (
                        <Text style={styles.details}>{location.description}</Text>
                    ) : (
                        <>
                            <Text style={styles.details}>{descriptionWords.slice(0, 22).join(' ')}</Text>
                            <TouchableOpacity onPress={toggleDescription}>
                                <Text style={{ color: 'blue' }}>{showFullDescription ? 'Show less' : 'Show more'}</Text>
                            </TouchableOpacity>
                        </>
                    )}
                    {showFullDescription && (
                        <TouchableOpacity onPress={toggleDescription}>
                            <Text style={{ color: 'blue' }}>Show less</Text>
                        </TouchableOpacity>
                    )}
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>Details</Text>
                    <Text style={styles.details}>Price: ${location.price}</Text>
                    <Text style={styles.details}>Rooms: {location.rooms}</Text>
                    <Text style={styles.details}>Area: {location.area} m
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14 }}>2</Text>
                        </View>
                    </Text>
                    <Text style={styles.details}>Price per m
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14 }}>2</Text>
                        </View>: {location.pricePerArea} USD/m<View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14 }}>2</Text>
                        </View>
                    </Text>
                    <Text style={styles.details}>Latitude: {location.location.latitude}</Text>
                    <Text style={styles.details}>Longitude: {location.location.longitude}</Text>
                </View>
                
                <View style={styles.section}>
                    <Text style={styles.header}>Contact</Text>
                    <Text style={styles.details}>Phone number: {location.phoneNumber}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 16,
        color: '#444',
    },
    map: {
        width: '100%',
        height: 100,
        marginTop: 10,
    }
});