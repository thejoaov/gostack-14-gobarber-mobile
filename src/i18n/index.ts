import i18n, { Module } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

import ptBR from './locales/pt-BR.json'

const resources = {
  'pt-BR': ptBR,
}

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any): unknown => cb(getLocales()[0].languageTag),
  init: (): void => {},
  cacheUserLanguage: (): void => {},
}

i18n
  .use(languageDetector as Module)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    keySeparator: '.', // we do not use keys in form messages.welcome
    ns: ['common'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
