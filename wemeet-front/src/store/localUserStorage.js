import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { userSettingsStore } from './userSettingsStore'
export const localUserStorage = defineStore('localUserStorage', () => {
    const store = userSettingsStore()
    const currentLogin = store.$state.userLogin

    const jwt = localStorage.getItem(currentLogin)

    const jwtKey = ref(jwt ? jwt : 'local')
    function setJwtKey(newKey) {
        jwtKey.value = newKey
        localStorage.setItem(currentLogin, jwtKey.value)
    }
    const getJwt = computed(() => jwtKey.value)
    return { jwtKey, setJwtKey, getJwt }
})
