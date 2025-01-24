import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StackScreen1 from './StackScreen1';
import StackScreen2 from './StackScreen2';
import StackDrawer from './StackDrawer';

const Stack = createStackNavigator();

const StackNavigationDemo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StackNavigator1" component={StackScreen1} />
      <Stack.Screen name="StackNavigator2" component={StackScreen2} />
      <Stack.Screen name='StackDrawer' component={StackDrawer} />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
