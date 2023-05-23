import Ru from './translation/ru.json'
import Ua from './translation/ua.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    Ru: {
        translation: Ru,
    },
    Ua:{
        translation: Ua,
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:localStorage.getItem('language')|| '',
    fallbackLng:'Ua'
})

export default i18n;