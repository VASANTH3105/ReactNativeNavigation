import React, {useState, useEffect, useCallback} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome
import {Modal} from 'react-native';

const officeLatitude = 12.910617085683858;
const officeLongitude = 80.22763635216177;

/**
 * Function to convert degrees to radians
 */
const toRadians = degree => (degree * Math.PI) / 180;

/**
 * Haversine formula to calculate distance between two coordinates
 */
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth's radius in meters
  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  // φ1 = Latitude of the first point, converted to radians.
  // φ2 = Latitude of the second point, converted to radians.
  // Δφ = Difference in latitude, converted to radians.
  // Δλ = Difference in longitude, converted to radians.

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

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
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true; // iOS does not require explicit permission request
};

const GeoLocationLogin = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [distance, setDistance] = useState('');
  const [locateBtn, setLocateBtn] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestLocationPermission();
  }, []);

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
        const {latitude, longitude} = location;
        setLatitude(latitude);
        setLongitude(longitude);
        setLocateBtn(false);
        console.log(`Current Location: Lat ${latitude}, Lon ${longitude}`);

        const distance = getDistance(
          latitude,
          longitude,
          officeLatitude,
          officeLongitude,
        );
        console.log(`Distance to office: ${distance.toFixed(2)} meters`);
        setDistance(distance.toFixed(2)); //rounds valus and converts as string

        if (distance <= 100) {
          setIsButtonEnabled(true);
        } else {
          setIsButtonEnabled(false);
          Alert.alert(
            'Out of Range',
            `You are ${distance.toFixed(2)} meters away.`,
          );
        }
      })
      .catch(error => {
        console.warn(`Error (${error.code}): ${error.message}`);
        Alert.alert(
          'Error',
          'Failed to get location. Make sure GPS is enabled.',
        );
      });
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity
        onPress={checkProximity}
        style={[
          styles.checkProximityButton,
          {backgroundColor: locateBtn ? 'green' : 'gray'},
        ]}
        disabled={!locateBtn}>
        <Icon name="map-marker" size={20} color={'#ffffff'} />
        <Text style={styles.checkProximityText}>Locate me</Text>
      </TouchableOpacity>

      {distance.length > 0 ? (
        <View>
          <Text style={styles.locationText}>
            You are {distance} meters away from office
          </Text>
          <View style={styles.locationContainer}>
            <View style={styles.locationInnerContainer}>
              <Text style={styles.locationTextLabel}>Latitude</Text>
              <Text style={styles.locationText}>
                {latitude ?? 'Fetching...'}
              </Text>
            </View>

            <View style={styles.locationInnerContainer}>
              <Text style={styles.locationTextLabel}>Longitude</Text>
              <Text style={styles.locationText}>
                {longitude ?? 'Fetching...'}
              </Text>
            </View>
          </View>
        </View>
      ) : null}

      <TouchableOpacity
        style={[
          styles.loginButton,
          {backgroundColor: isButtonEnabled ? 'green' : 'gray'},
        ]}
        disabled={!isButtonEnabled}
        onPress={() => setVisible(true)}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent={true} // Makes the background semi-transparent
        animationType="fade" // Animation type: 'slide', 'fade', 'none'
        onRequestClose={() => setVisible(false)} // Handles back button on Android
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text>Status: active (Online)</Text>
            {/* <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.button}>close</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    //backgroundColor: '#f0f4f8',
    //backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkProximityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: '40%',
  },
  checkProximityText: {
    color: '#fff',
    fontSize: 16,
  },
  locationText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#1e90ff',
    fontWeight: '600',
    marginVertical: 5,
  },

  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  locationInnerContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },

  locationTextLabel: {
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
    fontWeight: '500',
    marginBottom: 5,
  },
  loginButton: {
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 15,
    paddingHorizontal: 15,
    fontWeight: 'medium',
    textTransform: 'uppercase',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  modalContainer: {
    justifyContent: 'center',
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#343434',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default GeoLocationLogin;
