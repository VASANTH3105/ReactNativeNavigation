import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import MyHeader from '../customComponents/MyHeader';
import {launchCamera} from 'react-native-image-picker';

let type = 'none';

const TabScreen2 = () => {
  const [picture, setPicture] = useState(
    'https://cdn3d.iconscout.com/3d/premium/thumb/camera-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--photography-photo-video-picture-travel-pack-holidays-illustrations-2914595.png?f=webp',
  );
  //Camera screens
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Allow Camera permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera({
          mediaType: 'photo',
          //cameraType: 'back',
        });
        if( result.assets?.[0]?.uri !== undefined){
        setPicture(result.assets?.[0]?.uri || ''); //fallback value ensures that the set function always receives a string
        console.log(result.assets?.[0]?.uri);
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    // Subscribe to network changes
    const unsubscribe = NetInfo.addEventListener(state => {
      type = state.type;
      Alert.alert('Connection type', state.type);
      Alert.alert('Is connected?', state.isConnected ? 'Yes' : 'No');
    });

    // Cleanup on component unmount
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <View style={styles.outerContainer}>
      <MyHeader />
      <View style={styles.cameraScreen}>
        <TouchableOpacity
          onPress={() => requestCameraPermission()}
          activeOpacity={0.8}
          style={styles.cameraArea}>
          <Image source={{uri: picture}} style={styles.cameraImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#f0f4f8',
    flex: 1,
  },
  cameraScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 10,
  },
  cameraArea: {
    flex: 0.9,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 10,
  },
  cameraImage: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  loginButton: {
    flex: 0.1,
    backgroundColor: '#000',
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'light',
    textTransform: 'uppercase',
  },
});

export default TabScreen2;
