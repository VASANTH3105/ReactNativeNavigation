import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';
import imageLib from '../../../assets/AssetExports';
import Categories from './Categories';

const MyHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={imageLib.rdimage} />
        
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
    marginBottom: 10,
  },
});

export default MyHeader;
