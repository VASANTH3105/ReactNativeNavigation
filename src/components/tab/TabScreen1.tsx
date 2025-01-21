import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import Categories from '../customComponents/Categories';
import MyHeader from '../customComponents/MyHeader';
import Icon from 'react-native-vector-icons/FontAwesome';


const TabScreen1 = ({navigation}: any) => {
  return (
    <View style={styles.outerContainer}>
      <MyHeader />
      <View style={styles.container}>
        <Text style={styles.title}>TabScreen1</Text>

        <Button
          onPress={() => navigation.navigate('HomeScreen')}
          title="Back to HomeScreen"
          color="#4CAF50"
        />
        <Icon name="rocket" size={20} color="#343434" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#f0f4f8',
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f8', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20, 
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    color: '#fff',
  },
});

export default TabScreen1;
