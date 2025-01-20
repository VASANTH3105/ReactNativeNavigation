import { View, Text, Alert } from 'react-native';
import React, { useEffect } from 'react';
import NetInfo from "@react-native-community/netinfo";

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>TabScreen2</Text>
      <Text style={{ fontSize: 20 }}>{type}</Text>
    </View>
  );
};

export default TabScreen2;
