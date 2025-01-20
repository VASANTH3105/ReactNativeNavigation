import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const categoriesData = [
  { id: '1', name: 'Projects' },
  { id: '2', name: 'POC' },
  { id: '3', name: 'IT Operations' },
  { id: '4', name: 'HR' },
  { id: '5', name: 'Profile' },
  { id: '6', name: 'Administration' },
  { id: '7', name: 'Training & Development' },
  { id: '8', name: 'Operations' },
 
];



const Categories = () => {
  return (
    <View>
      {/* <Text>Categories</Text> */}
      <FlatList 
      style = {styles.flatList}
      data={categoriesData}
      horizontal = {true}
      keyExtractor={(item) => item.id.toString()}
      renderItem = {({item}) => (
        <Text style = {styles.flatListItem}>{item.name}</Text>
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: '#00000000',
        marginHorizontal: 0,
        marginVertical: 10,
      
    },
    flatListItem: {
        backgroundColor: '#f0f4f8',
        marginHorizontal: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderColor: "#34343450", //jet black
        borderWidth: 0.5,
        borderRadius: 50,
        
    }
})

export default Categories;
