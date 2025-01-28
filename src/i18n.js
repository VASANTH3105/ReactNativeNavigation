import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';
import { I18nManager } from 'react-native';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: I18nManager.isRTL ? 'ar' : 'en', // Default language
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
      en: {
        translation: en ,
      },
      
      ar: {
        translation: ar ,
      },
    
    },
  });

export default i18n;
