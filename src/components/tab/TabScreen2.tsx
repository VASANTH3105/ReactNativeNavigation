import { View, Text, Alert, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";
import MyHeader from '../customComponents/MyHeader';

let type = "none";

const TabScreen2 = () => {

  useEffect(() => {
    // Subscribe to network changes
    const unsubscribe = NetInfo.addEventListener(state => {
      type = state.type;
      Alert.alert("Connection type", state.type);
      Alert.alert("Is connected?", state.isConnected ? "Yes" : "No");
    });

    // Cleanup on component unmount
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <View style = {styles.outerContainer}>
      <MyHeader />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>TabScreen2</Text>
      <Text style={{ fontSize: 20 }}>{type}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#f0f4f8',
    flex: 1,
  },
})

export default TabScreen2;
