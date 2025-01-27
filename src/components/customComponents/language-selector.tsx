import React from 'react';
import { useTranslation } from 'react-i18next';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const languages = [
  {code: 'en', lang: 'English'},
  {code: 'fr', lang: 'French'},
  {code: 'hi', lang: 'Hindi'},
];

const LanguageSelector = () => {

  const {i18n} = useTranslation();

  const changeLanguage = (lng: any) => {
    console.log(`Language changed to: ${lng}`);
    // Implement language change logic here
    i18n.changeLanguage(lng);
  };

  return (
    <View style={styles.container}>
      {languages.map(lng => (
        <TouchableOpacity
          key={lng.code}
          style={styles.button}
          onPress={() => changeLanguage(lng.code)}>
          <Text style={styles.buttonText}>{lng.lang}</Text>
        </TouchableOpacity>
      ))}
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
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LanguageSelector;
