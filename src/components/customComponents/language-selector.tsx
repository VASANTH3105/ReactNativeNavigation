import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  I18nManager,
} from 'react-native';
import RNRestart from 'react-native-restart';
import {DevSettings} from 'react-native';

const languages = [
  {code: 'en', lang: 'English'},
  {code: 'ar', lang: 'Arabic'},
  // {code: 'fr', lang: 'French'},
  // {code: 'hi', lang: 'Hindi'},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`);
    const isRTL = newLanguage === 'ar';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);
      
      RNRestart.Restart(); // Restart app for RTL change
    }
  };

  // const changeLanguage = (lng: any) => {
  //   console.log(`Language changed to: ${lng}`);
  //   // Implement language change logic here
  //   i18n.changeLanguage(lng);

  //   const isRTL = lng === 'ar';

  //   if (I18nManager.isRTL !== isRTL) {
  //     I18nManager.allowRTL(isRTL);
  //     I18nManager.forceRTL(isRTL);
  //     RNRestart.Restart(); // Restart app for changes to apply
  //     //DevSettings.reload(); // Refresh UI instead of restarting
  //   }
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleLanguage}>
        <Text style={styles.buttonText}>
          {currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LanguageSelector;
