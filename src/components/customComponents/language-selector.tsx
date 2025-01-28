import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  StyleSheet,
  I18nManager,
  Switch,
} from 'react-native';
import { MMKV } from 'react-native-mmkv';
import RNRestart from 'react-native-restart';

// Initialize MMKV storage
const storage = new MMKV();

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(storage.getString('appLanguage') || 'en');
  const [isEnabled, setIsEnabled] = useState(currentLanguage === 'ar');

  useEffect(() => {
    // Get saved language from MMKV
    const savedLanguage = storage.getString('appLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
      updateRTL(savedLanguage);
    }
  }, []);

  const updateRTL = (language: any) => {
    const isRTL = language === 'ar';
    if (I18nManager.isRTL !== isRTL) {
      I18nManager.allowRTL(isRTL);
      I18nManager.forceRTL(isRTL);

      setTimeout(() => {
        RNRestart.Restart(); // Restart app for RTL changes
      }, 5);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    setIsEnabled(newLanguage === 'ar');
    i18n.changeLanguage(newLanguage);
    storage.set('appLanguage', newLanguage); // Save in MMKV
    updateRTL(newLanguage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Switch to Arabic: 
        {/* {currentLanguage === 'en' ? 'English' : 'Arabic'} */}
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#007bff' : '#f4f3f4'}
        onValueChange={toggleLanguage}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
});

export default LanguageSelector;
