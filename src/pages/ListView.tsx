import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { locations } from "../locations";
import { Location } from "../components/Location";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../services/AppNavigator";

type ListViewNavigationProp = StackNavigationProp<RootStackParamList, 'ListView'>;

export default function ListView(): JSX.Element {
    const navigation = useNavigation<ListViewNavigationProp>();
    return (
        <ScrollView>
            {locations.map((location: Location, index: number) => (
                <Pressable key={index} style={styles.card} onPress={() => navigation.navigate('PropertyProfile', { location })}>
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
                </Pressable>
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