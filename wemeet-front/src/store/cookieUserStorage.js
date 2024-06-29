import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Cookies from 'js-cookie'
export const cookieUserStorage = defineStore('cookieUserStorage', () => {
    const jwt = Cookies.get('JWTKEY')

    const jwtKey = ref(jwt ? jwt : 'cookie')
    function setJwtKey(newKey) {
        jwtKey.value = newKey
        Cookies.set('JWTKEY', newKey)
    }
    const getJwt = computed(() => jwtKey.value)
    return { jwtKey, setJwtKey, getJwt }
})
