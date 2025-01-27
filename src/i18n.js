import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en', // Default language
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greet: 'Welcome to React and i18next',
          description: {
            line1: 'This is a line 1',
            line2: 'This is a line 2',
          },
        },
      },
      fr: {
        translation: {
          greet: 'Bienvenue à React et i18next',
          description: {
            line1: 'Ceci est une ligne 1',
            line2: 'Ceci est une ligne 2',
          },
        },
      },
      hi: {
        translation: {
          greet: 'React और i18next का स्वागत',
          description: {
            line1: 'यह एक लाइन 1 है',
            line2: 'यह एक लाइन 2 है',
          },
        },
      },
    },
  });

export default i18n;
