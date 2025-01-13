import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import HomeScreen from '../../screens/HomeScreen';
import DrawerNavigationDemo from '../drawer/DrawerNavigationDemo';


type BottomTabParamsList = {
    TabScreen1: undefined;
    TabScreen2: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();


const TabNavigationDemo = () => {
  return (
    <BottomTab.Navigator>
        <BottomTab.Screen name="TabScreen1" component={TabScreen1} />
        <BottomTab.Screen name="TabScreen2" component={TabScreen2} />
        <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
        <BottomTab.Screen name="DrawerNavigationDemo" component={DrawerNavigationDemo} options={{headerShown: false}} />
    </BottomTab.Navigator>
  )
}

export default TabNavigationDemo