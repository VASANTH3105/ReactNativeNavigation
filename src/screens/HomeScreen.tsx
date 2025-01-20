import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';
import SearchBar from '../components/customComponents/SearchBar';
import MyHeader from '../components/customComponents/MyHeader';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{flex: 1}}>
      <StatusBar  backgroundColor={"white"}/>
      <MyHeader />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Home Screen</Text>
        <Text style={styles.description}>
          Explore the app by navigating to different screens using the buttons
          below.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StackNavigationDemo')}>
          <Text style={styles.buttonText}>Go to Stack Navigation Demo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TabNavigationDemo')}>
          <Text style={styles.buttonText}>Go to Tab Navigation Demo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DrawerNavigationDemo')}>
          <Text style={styles.buttonText}>Go to Drawer Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SplashScreen')}>
          <Text>Splash Screen</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Light background color for a clean look
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50', // Green color for buttons
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Shadow effect for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
