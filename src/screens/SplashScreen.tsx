import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import imageLib from './../../assets/AssetExports';
import { useTranslation } from 'react-i18next';
const SplashScreen = ({navigation}: any) => {
  const [opacityCapacity, setOpacityCapacity] = useState(0);

  const HandleOnClickTesting = () => {
    console.log('Button Clicked');
    navigation.navigate('SignUp');
    //Alert.alert("Hi to User");
    setOpacityCapacity(opacityCapacity + 0.1);
  };
  
  const {t} = useTranslation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageLib.rdimage} />
        <Text style={styles.title}>{t('splashScreen.welcome')}</Text>
        <Text style={styles.subtitle}>
        {t('splashScreen.subtitle')}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleOnClickTesting()}>
          <Text style={styles.buttonText}>{t('splashScreen.create_account')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //underlayColor={'#ffffff'}
          //style={styles.loginButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.loginButtonText}>{t('splashScreen.login')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomData}>
        <Text style={styles.bottomDataText}>
        {t('splashScreen.bottom_data_text')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Light blue background for a soft, modern look
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Adds depth to the button
    marginTop: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomData: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#000',
  },
  bottomDataText: {
    color: '#ffffff50',
  },
  loginButton: {
    backgroundColor: '#fff',
  },
  loginButtonText: {
    marginTop: 8,
    fontSize: 16,
    color: '#00000080',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#00000080',
  },
});

export default SplashScreen;
