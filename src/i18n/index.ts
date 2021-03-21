import i18n, { Module } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

import ptBR from './locales/pt-BR.json'
import enUS from './locales/en-US.json'

const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
  en: enUS,
}

const languageDetector = {
  type: 'languageDetector',
  async: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detect: (cb: any): unknown => cb(getLocales()[0].languageTag),
  init: (): void => {},
  cacheUserLanguage: (): void => {},
}

i18n
  .use(languageDetector as Module)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'pt-BR',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
