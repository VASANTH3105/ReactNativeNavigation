import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { firebase } from '@react-native-firebase/database';
import '@react-native-firebase/app'; // Ensure Firebase is initialized

const FirebaseExample = () => {
  const [name, setName] = useState('');

  const sendDataToFirebase = () => {
    firebase
      .app()
      .database()
      .ref('/users')
      .push({ name })
      .then(() => console.log('Data stored successfully!'))
      .catch((error) => console.log('Error:', error));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Enter Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Button title="Save to Firebase" onPress={sendDataToFirebase} />
    </View>
  );
};

export default FirebaseExample;
