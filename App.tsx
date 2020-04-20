import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeStack} from './navigation';
import Tabbar from './midalit/tabBar';

import Main from './midalit/mainView/Main';

//const Tab = createBottomTabNavigator();
const mariner = '#3B5F8F';
const mediumPurple = '#8266D4';
const tomato = '#F95B57';
const mySin = '#F3A646';

const sections: Object[] = [
  {
    title: 'SUNGLASSES',
    leftColor: mediumPurple,
    rightColor: mariner,
    image: require('./midalit/assets/sunnies.png'),
  },
  {
    title: 'FURNITURE',
    leftColor: tomato,
    rightColor: mediumPurple,
    image: require('./midalit/assets/table.png'),
  },
  {
    title: 'JEWELRY',
    leftColor: mySin,
    rightColor: tomato,
    image: require('./midalit/assets/earrings.png'),
  },
  {
    title: 'HEADWEAR',
    leftColor: 'white',
    rightColor: tomato,
    image: require('./midalit/assets/hat.png'),
  },
];

const App = () => {
  return (
    <>
      {/* <NavigationContainer>
        <Tab.Navigator>
         <Tab.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
       </Tab.Navigator>
      </NavigationContainer> */}
      <Main {...{sections}} />
      {/* <Tabbar /> */}
    </>
  );
};

export default App;
