import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { locations } from "../locations";
import { Location } from "../components/Location";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../services/AppNavigator";
import Icon from 'react-native-vector-icons/AntDesign';
import { useLocations } from "../contexts/LocationContext";

type ListViewNavigationProp = StackNavigationProp<RootStackParamList, 'ListView'>;

export default function ListView(): JSX.Element {
    const navigation = useNavigation<ListViewNavigationProp>();

    const [starredItems, setStarredItems] = useState(new Set<number>());
    const { locations, setLocations } = useLocations();
    const toggleStarred = (index: number) => {
        const updatedLocations = [...locations]; 
        const updatedStarredItems = new Set(starredItems); 
    
        if (starredItems.has(index)) {
            // Already starred
            updatedStarredItems.delete(index); 
            updatedLocations[index].favorite = false; 
        } else {
            // Not starred yet
            updatedStarredItems.add(index); 
            updatedLocations[index].favorite = true; 
        }
    
        // Log the new favorite status
        console.log(updatedLocations[index].favorite); 
    
        setStarredItems(updatedStarredItems); 
        setLocations(updatedLocations); 
    };
    
    return (
        <ScrollView>
            {locations.map((location: Location, index: number) => (
                <Pressable 
                    key={index} 
                    style={styles.card} 
                    onPress={() => {
                        console.log(location);
                        navigation.navigate('PropertyProfile', { location });
                    }}
                >
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
                    <Text>Price: ${location.price}</Text>
                    <Text>Rooms: {location.rooms}</Text>
                    <Text>Latitude: {location.location.latitude}</Text>
                    <Text>Longitude: {location.location.longitude}</Text>
                    <Pressable style={styles.starButton} onPress={() => toggleStarred(index)}>
                        {starredItems.has(index) ? <Icon name="star" size={20} color="gold" /> : <Icon name="staro" size={20} color="black" />}
                    </Pressable>
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
    starButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 20,
    },
});