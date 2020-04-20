import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStackNavigator = createStackNavigator();
import HomeScreen from './midalit/homeScreen';


export const HomeStack = () => (
    <HomeStackNavigator.Navigator>
        <HomeStackNavigator.Screen name="Home" component={HomeScreen} options={({ route } : any) => route.name} />
    </HomeStackNavigator.Navigator>
)
