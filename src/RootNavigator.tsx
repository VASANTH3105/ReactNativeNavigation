import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import StackNavigationDemo from './components/stack/StackNavigationDemo';
import TabNavigationDemo from './components/tab/TabNavigationDemo';
import DrawerNavigationDemo from './components/drawer/DrawerNavigationDemo';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import StackDrawer from './components/stack/StackDrawer';

// Define the types for navigation
export type RootStackParamsList = {
  HomeScreen: undefined;
  StackNavigationDemo: undefined;
  TabNavigationDemo: undefined;
  DrawerNavigationDemo: undefined;
  SplashScreen: undefined;
  SignUp: undefined;
  Login: undefined;
  StackDrawer: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Add SplashScreen */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}} // Hide header if it's a splash screen
      />
      {/* Add HomeScreen */}
      <Stack.Screen
      options={{headerShown: false}} // Hide header if it's a splash screen
      name="HomeScreen" component={HomeScreen} />

      {/* Add StackNavigationDemo */}
      <Stack.Screen
        name="StackNavigationDemo"
        component={StackNavigationDemo}
      />

      <Stack.Screen
        options={{headerShown: false}} 
        name="TabNavigationDemo"
        component={TabNavigationDemo}
      />

      <Stack.Screen
        options={{headerShown: false}} 
        name="DrawerNavigationDemo"
        component={DrawerNavigationDemo}
      />

      <Stack.Screen 
      options={{headerShown: false}}
      name='SignUp'
      component={SignUp}
      />

      <Stack.Screen 
      options={{headerShown: false}}
      name = 'Login'
      component= {Login}
      />

      <Stack.Screen 
      options={{headerShown: false}} 
      name='StackDrawer'
      component={StackDrawer}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
