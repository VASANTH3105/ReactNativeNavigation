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

  // Check Proximity and Enable/Disable Button
  const checkProximity = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        const {latitude, longitude} = location;
        const distance = getDistance(
          latitude,
          longitude,
          officeLatitude,
          officeLongitude,
        );

        console.log(`Distance to office: ${distance} meters`);
        if (distance <= 250) {
          setIsButtonEnabled(true); // Enable button
        } else {
          setIsButtonEnabled(false); // Disable button
        }
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    // Check proximity when the component mounts
    checkProximity();

    // Subscribe to network changes (for demonstration purposes)
    const unsubscribe = NetInfo.addEventListener((state) => {
      Alert.alert('Connection type', state.type);
      Alert.alert('Is connected?', state.isConnected ? 'Yes' : 'No');
    });

    // Cleanup on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

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
        <TouchableOpacity
          style={[
            styles.loginButton,
            {backgroundColor: isButtonEnabled ? '#000' : '#888'},
          ]}
          disabled={!isButtonEnabled}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.proximityText}>
        {isButtonEnabled
          ? 'You are within 250 meters of the office.'
          : 'You are outside the 250-meter range.'}
      </Text>
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
  proximityText: {
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
    color: '#555',
  },
});

export default TabScreen2;
