import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './language-selector';

const LanguageCheck = () => {
  const {t} = useTranslation();

  const {line1, line2} = t('description');

  return (
    <View>
      <Text>LanguageCheck</Text>
      <LanguageSelector />
      <Text>{t('greet')}</Text>
      <Text>{line1}</Text>
      <Text>{line2}</Text>
    </View>
  );
};

export default LanguageCheck;
