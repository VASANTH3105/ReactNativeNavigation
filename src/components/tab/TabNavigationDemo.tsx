import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import React from 'react';
import TabScreen1 from './TabScreen1';
import TabScreen2 from './TabScreen2';
import HomeScreen from '../../screens/HomeScreen';
import DrawerNavigationDemo from '../drawer/DrawerNavigationDemo';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome

type BottomTabParamsList = {
    TabScreen1: undefined;
    TabScreen2: undefined;
    HomeScreen: undefined;
    DrawerNav: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const TabNavigationDemo = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#fff',
          padding: 0,
          height: 60,
          elevation: 8,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'light',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === 'TabScreen1') {
            iconName = 'home';  
          } else if (route.name === 'TabScreen2') {
            iconName = 'cogs';  
          } else if (route.name === 'HomeScreen') {
            iconName = 'dashboard';  
          } else if (route.name === 'DrawerNav') {
            iconName = 'bars'; 
          }

          return <Icon name={iconName} size={20} color={focused ? '#007AFF' : '#808080'} />;
        },
      })}
    >
      <BottomTab.Screen options={{ headerShown: false }} name="TabScreen1" component={TabScreen1} />
      <BottomTab.Screen options={{ headerShown: false}} name="TabScreen2" component={TabScreen2} />
      <BottomTab.Screen options={{ headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <BottomTab.Screen options={{ headerShown: false}} name="DrawerNav" component={DrawerNavigationDemo} />
    </BottomTab.Navigator>
  );
}

export default TabNavigationDemo;
