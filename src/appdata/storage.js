import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const saveLocationData = (latitude, longitude, distance) => {
  
  storage.set('latitude', latitude.toString());
  storage.set('longitude', longitude.toString());
  storage.set('distance', distance.toString());
};

export const getLocationData = () => {
  return {
    latitude: storage.getString('latitude') || null,
    longitude: storage.getString('longitude') || null,
    distance: storage.getString('distance') || null,
  };
};
