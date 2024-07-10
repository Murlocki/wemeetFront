import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Cookies from 'js-cookie'
import { userSettingsStore } from './userSettingsStore'
export const cookieUserStorage = defineStore('cookieUserStorage', () => {
    const store = userSettingsStore()

    const currentLogin = store.$state.userLogin
    const jwt = Cookies.get(currentLogin)

    const jwtKey = ref(jwt ? jwt : 'cookie')
    function setJwtKey(newKey) {
        jwtKey.value = newKey
        Cookies.set(currentLogin, newKey)
    }
    const getJwt = computed(() => jwtKey.value)
    return { jwtKey, setJwtKey, getJwt }
})
