import {View, Text, StyleSheet, TouchableOpacity, StatusBar, Button} from 'react-native';
import React, { useContext } from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';
import MyHeader from '../components/customComponents/MyHeader';
import { AuthContext } from '../components/context/AuthContext';
import { useTranslation } from 'react-i18next';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'HomeScreen'>;

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { t } = useTranslation(); // Initialize translation

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={"white"}/>
      <MyHeader />
      
      <View>
        <Button title={t("homeScreen.logout")} onPress={() => logout()} />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>{t("homeScreen.welcome")}</Text>
        <Text style={styles.description}>{t("homeScreen.description")}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StackNavigationDemo')}>
          <Text style={styles.buttonText}>{t("homeScreen.navigation.stack_demo")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigationDemo')}>
          <Text style={styles.buttonText}>{t("homeScreen.navigation.tab_demo")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DrawerNavigationDemo')}>
          <Text style={styles.buttonText}>{t("homeScreen.navigation.drawer_demo")}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SplashScreen')}>
          <Text>{t("homeScreen.navigation.splash_screen")}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
