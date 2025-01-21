import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';
import imageLib from '../../../assets/AssetExports';
import Categories from './Categories';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyHeader = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => console.log('clicked')}>
          <Image style={styles.image} source={imageLib.rdimage} />
        </TouchableOpacity>
        {/* <Image style={styles.profileImage} source={imageLib.profileimage} /> */}
        <Icon name='user-circle-o' size={25} color={"#888"} style = {styles.icon}/>
      </View>
      <SearchBar />
      <Categories />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 20,
    //elevation: 5,
    //shadowColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
  myHeader: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 20,
    marginHorizontal: 10,
  },
  logoContainer: {
    marginBottom: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default MyHeader;
