import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          hello: 'Hello',
          welcome: 'Welcome'
        },
      },
      fr: {
        translation: {
          hello: 'Bonjour',
          welcome: 'Bienvenue'
        },
      },
      // Ajoutez d'autres langues et leurs traductions ici
    },
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours en cas de non-correspondance
    interpolation: {
      escapeValue: false, // Ne pas échapper les valeurs
    },
  });

export default i18n;
