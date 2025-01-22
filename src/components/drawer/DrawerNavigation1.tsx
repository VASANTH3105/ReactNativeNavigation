import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Button,
  Platform,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import MyHeader from '../customComponents/MyHeader';

const officeLatitude = 12.910617085683858;
const officeLongitude = 80.22763635216177;

/**
 * Function to convert degrees to radians
 */
const toRadians = (degree) => (degree * Math.PI) / 180;

/**
 * Haversine formula to calculate distance between two coordinates
 */
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth's radius in meters
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

/**
 * Function to request location permission for Android devices
 */
const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app requires access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS does not require explicit permission request
};

const DrawerNavigation1 = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  /**
   * Function to check the user's proximity to the office
   */
  const checkProximity = useCallback(async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Location permission is required.');
      return;
    }

    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        const { latitude, longitude } = location;
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(`Current Location: Lat ${latitude}, Lon ${longitude}`);

        // Calculate the distance to the office
        const distance = getDistance(latitude, longitude, officeLatitude, officeLongitude);
        console.log(`Distance to office: ${distance.toFixed(2)} meters`);

        // Enable button if within 250 meters
        if (distance <= 10) {
          setIsButtonEnabled(true);
        } else {
          setIsButtonEnabled(false);
          Alert.alert('Out of Range', `You are ${distance.toFixed(2)} meters away.`);
        }
      })
      .catch(error => {
        console.warn(`Error (${error.code}): ${error.message}`);
        Alert.alert('Error', 'Failed to get location. Make sure GPS is enabled.');
      });
  }, []);

  return (
    <View style={styles.outerContainer}>
    <MyHeader />
    
    <TouchableOpacity style={styles.checkProximityButton} onPress={checkProximity}>
      <Text style={styles.checkProximityText}>Check Proximity</Text>
    </TouchableOpacity>

    <Text style={styles.locationText}>
      Latitude: {latitude ?? 'Fetching...'} | Longitude: {longitude ?? 'Fetching...'}
    </Text>

    <Button
      disabled={!isButtonEnabled}
      title="Check In"
      onPress={() => console.log('Checked In Successfully')}
    />
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
  checkProximityButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  checkProximityText: {
    color: '#fff',
    fontSize: 16,
  },
  locationText: {
    fontSize: 14,
    marginVertical: 10,
    color: '#333',
  },
});

export default DrawerNavigation1;
