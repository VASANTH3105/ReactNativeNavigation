import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import FilePicker from '../customComponents/FilePicker';
import PdfViewer from '../customComponents/PdfViewer';

const DrawerNavigation2 = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener(state => {
      if (state.isInternetReachable) {
        setIsConnected(true);
        Alert.alert('Connected', 'You are connected to the internet');
        console.log('The device has internet access.');
      } else {
        setIsConnected(false);
        Alert.alert('Disconnected', 'You are disconnected from the internet');
        console.log('The device is connected but no internet access.');
      }
    });

    return () => {
      unSubscribe();
    };
  }, [isConnected]);

  //show alert when it is connected or disconnected
  useEffect(() => {
    if (!isConnected) {
      Alert.alert('You are Offline...!');
    } else {
      Alert.alert('Back to online...!');
    }
  }, [isConnected]);

  return (
    <View>
      {isConnected ? (
        <Text>You are Online...!</Text>
      ) : (
        <Text>You are Offline...!</Text>
      )}
      <FilePicker />
      {/* <PdfViewer /> */}
    </View>
  );
};

export default DrawerNavigation2;
