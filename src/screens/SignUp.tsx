import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV(); // Create a new instance of MMKV

const SignUp = ({navigation}: any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const createAccount = () => {
    storage.set('userName', userName);
    storage.set('password', password);
    storage.set('email', email);
    console.log('Account Created');
    Alert.alert('Account Created', '', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('TabNavigationDemo'), // Navigate after successful login
      },
    ]);

    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      {/* <Image 
          source={imagePack.createaccount}
          /> */}
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        value={userName}
        onChangeText={name => setUserName(name)}
      />

      <TextInput
        style={styles.input}
        placeholder="********"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={createAccount}>
        <Text style={styles.buttonText}>SignUp</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
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
  loginText: {
    marginTop: 10,
    color: '#00000080',
    //textDecorationColor: 'teal',
    textDecorationLine: 'underline',
    padding: 2,
  },
});

export default SignUp;
