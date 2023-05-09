import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import zhHans from './locales/zh-Hans.json'
import zhHant from './locales/zh-Hant.json'

const resources = {
  'zh-Hans': {
    translation: zhHans,
  },
  'zh-Hant': {
    translation: zhHant,
  },
  'en': {
    translation: en,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    detection: {
      caches: []
    }
  })

export default i18n;