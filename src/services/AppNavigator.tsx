import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListView from '../pages/ListView';
import PropertyProfile from '../pages/PropertyProfile';
import { Location } from '../components/Location';

export type RootStackParamList = {
    HomeScreen: undefined;
    ListView: undefined;
    PropertyProfile: { location: Location };
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ListView" component={ListView} />
            <Stack.Screen name="PropertyProfile" component={PropertyProfile} />
        </Stack.Navigator>
    );
}

export default AppNavigator;