import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { getLocationData } from '../../appdata/storage'; // Use this directly
import LanguageCheck from '../customComponents/LanguageCheck';
import LanguageSelector from '../customComponents/language-selector';
import FilePicker from '../customComponents/FilePicker';

const DrawerNavigation1 = () => {
  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);

  const fetchLocationData = async () => {
    const locationData = await getLocationData(); // Use the imported function
    setLatitude(locationData.latitude );
    setLongitude(locationData.longitude);
    setDistance(locationData.distance);
  };

  return (
    <View>
      <Text>DrawerNavigation1</Text>  
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <Text>Distance: {distance}</Text>
      <Button
        title="Get my data"
        onPress={() => {
          fetchLocationData(); // Use the renamed function
        }}
      />
      {/* <LanguageCheck /> */}
      <LanguageSelector />
      <FilePicker />
    </View>
  );
};

export default DrawerNavigation1;
