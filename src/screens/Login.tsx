import React, { useState, useContext } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../components/context/AuthContext';


const Login = ({ navigation }: any) => {
  const { login } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  

  const handleLogin = () => {
    const success = login(userName, password);
    if (success) {
      Alert.alert('Login Successful', '', [
        { text: 'OK', onPress: () => navigation.navigate('HomeScreen') },
      ]);
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default Login;
