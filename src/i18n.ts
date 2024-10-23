import { createI18n } from 'vue-i18n'
import { en } from './locales/en'
import { vn } from './locales/vn'
import { la } from './locales/la'
import { ref } from 'vue'

const language = ref<string>('en')

if(localStorage.getItem("language")){
    language.value = `${localStorage.getItem("language")}`
}

const messages = {
  en: en,
  vn: vn,
  la: la
}

export const i18n = createI18n({
  locale: language.value,
  fallbackLocale: 'en',
  messages
})