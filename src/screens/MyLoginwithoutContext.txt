import {
  View,
  Text,
  Alert,
  TextInput,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV(); // Create a new instance of MMKV

const Login = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    const storedUserName = storage.getString('userName');
    const storedPassword = storage.getString('password');

    if (userName === storedUserName && password === storedPassword) {
      console.log('Login Successful');
      setIsLogin(true);

      Alert.alert('Login Successful', '', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('HomeScreen'), // Navigate after successful login
        },
      ]);
      setUserName('');
      setPassword('');
      //navigation.navigate('InAppMainScreen');
    } else {
      console.log('Login Failed');
      Alert.alert('Login Failed', 'Please check your credentials');
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Login</Text> */}
      {/* <Image style={styles.image} source={imagePack.loginPic}/> */}
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        value={userName}
        onChangeText={name => setUserName(name)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={login}>
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
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Login;
