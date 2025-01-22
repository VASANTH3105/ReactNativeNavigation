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
import GetLocation from 'react-native-get-location';
import GeoLocationLogin from '../customComponents/GeoLocationLogin';

// Office Location (latitude, longitude)
const officeLatitude = 12.910617085683858;
const officeLongitude = 80.22763635216177;

// Function to calculate distance between two coordinates using Haversine formula
const getDistance = ({lat1, lon1, lat2, lon2}: any) => {
  const R = 6371e3; // Earth's radius in meters
  const toRadians = ({degree}: any) => (degree * Math.PI) / 180;

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

const TabScreen2 = () => {
  const [picture, setPicture] = useState(
    'https://cdn3d.iconscout.com/3d/premium/thumb/camera-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--photography-photo-video-picture-travel-pack-holidays-illustrations-2914595.png?f=webp',
  );
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Request Camera Permission and Launch Camera
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
        });
        if (result.assets?.[0]?.uri !== undefined) {
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
        <GeoLocationLogin />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  cameraScreen: {
    flex: 1,
    backgroundColor: '#fffffff',
    borderRadius: 10,
    margin: 10,
    borderColor: "#000000",
  },
  cameraArea: {
    flex: 0.8,
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
  
});

export default TabScreen2;
