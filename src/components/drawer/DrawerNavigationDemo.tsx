import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigation1 from './DrawerNavigation1';
import DrawerNavigation2 from './DrawerNavigation2';
import HomeScreen from '../../screens/HomeScreen';
import imageLib from '../../../assets/AssetExports';

const Drawer = createDrawerNavigator();

// Custom Drawer Component
const CustomDrawerContent = ({ navigation }: any) => {
  return (
    <View style={styles.drawerContainer}>
      {/* <Text style={styles.drawerHeader}>Custom Drawer</Text> */}
      <Image 
      style = {styles.rdimage}
      source={imageLib.rdimage}
      />
      <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigation1')}>
        <Text style={styles.drawerItem}>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigation2')}>
        <Text style={styles.drawerItem}>Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.drawerItem}>Home Screen</Text>
      </TouchableOpacity>
      <Button 
      disabled
      title='logout'
      />
    </View>
  );
};

const DrawerNavigationDemo = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: '#fff', width: 300 },
        headerStyle: { backgroundColor: '#0C73EB' },
        headerTintColor: '#fff',
        drawerLabelStyle: { fontSize: 18 },
      }}
    >
      <Drawer.Screen name="DrawerNavigation1" component={DrawerNavigation1} />
      <Drawer.Screen name="DrawerNavigation2" component={DrawerNavigation2} />
      <Drawer.Screen name='HomeScreen' component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  drawerHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  drawerItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  rdimage: {
    width: 100,
    height: 20,
    marginBottom: 10,
  }
});
