import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.icon}>{'\uD83D\uDD0D'}</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Search here..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 12,
    // height: 45,
    // margin: 10,
    elevation: 2,
  },
  icon: {
    fontSize: 18,
    color: 'gray',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default SearchBar;
