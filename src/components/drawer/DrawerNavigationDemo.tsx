import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation1 from './DrawerNavigation1';
import DrawerNavigation2 from './DrawerNavigation2';

const Drawer = createDrawerNavigator();

const DrawerNavigationDemo = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='DrawerNavigation1' component={DrawerNavigation1} />
        <Drawer.Screen name='DrawerNavigation2' component={DrawerNavigation2} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigationDemo