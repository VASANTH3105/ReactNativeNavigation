import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import Categories from '../customComponents/Categories';
import MyHeader from '../customComponents/MyHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import MyCarousel from '../customComponents/MyCarousel';
import RandomUser from '../customComponents/RandomUser';

const TabScreen1 = ({navigation}: any) => {
  return (
    <View style={styles.outerContainer}>
      <MyHeader />

      <ScrollView>
        <View style={styles.carouselView}>
          <MyCarousel />
        </View>
        <Text style={styles.emp}>Employees</Text>
        <RandomUser />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#f0f4f8',
    flex: 1, 
  },
  emp: {
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    width: "24%",
    padding: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    marginTop: 10,
    marginLeft: 10,
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
  carouselView: {
    marginTop: 5,
    //backgroundColor: '#000',
  },
});

export default TabScreen1;
