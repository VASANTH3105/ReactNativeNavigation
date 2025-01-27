import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './language-selector';

const LanguageCheck = () => {
  const {t} = useTranslation();

  //const {line1, line2} = t('description');
  //const {welcome, subtitle} = t('splashScreen');
  return (
    <View>
      <Text>LanguageCheck</Text>
      <LanguageSelector />
      <Text>{t('splashScreen.welcome')}</Text>
      <Text>{t('splashScreen.subtitle')}</Text>
      <Text>{t('splashScreen.create_account')}</Text>
      <Text>{t('splashScreen.login')}</Text>
      <Text>{t('splashScreen.bottom_data_text')}</Text>
    </View>
  );
};

export default LanguageCheck;
