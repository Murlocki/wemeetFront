import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Cookies from 'js-cookie'
export const userSettingsStore = defineStore('userSettingsStore', () => {
    const darkModeOn = ref(false)

    const storageChose = localStorage.getItem('storageChose')
    const storageChoseCookie = Cookies.get('storageChose')

    const choosedStorage = ref(storageChose || storageChoseCookie ? true : false)
    function setVisualMode() {
        darkModeOn.value = !darkModeOn.value
    }

    const storage = ref()

    function chooseStorage(selectedStorage) {
        localStorage.setItem('storageChose', true)
        choosedStorage.value = true

        storage.value = selectedStorage
    }

    var getJwt = null
    var setJwtKey = null
    if (storage.value) {
        getJwt = computed(() => storage.value.getJwt())
        setJwtKey = function (newKey) {
            storage.value.setJwtKey(newKey)
        }
    }

    const isLoggged = ref(true)

    return { darkModeOn, choosedStorage, chooseStorage, setVisualMode, getJwt, setJwtKey, isLoggged }
})
