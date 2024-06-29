import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const localUserStorage = defineStore('localUserStorage', () => {
    const jwt = localStorage.getItem('JWTKEY')

    const jwtKey = ref(jwt ? jwt : 'local')
    function setJwtKey(newKey) {
        jwtKey.value = newKey
        localStorage.setItem('JWTKEY', jwtKey.value)
    }
    const getJwt = computed(() => jwtKey.value)
    return { jwtKey, setJwtKey, getJwt }
})
