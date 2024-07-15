import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import Cookies from 'js-cookie'
import avatarTest from '/src/assets/DefaultUser/avatarTest.png'
export const userSettingsStore = defineStore('userSettingsStore', () => {
    //Выбор темы
    const darkModeOn = ref(false)
    function setVisualMode() {
        darkModeOn.value = !darkModeOn.value
    }

    //Выбор хранилища для jwt ключа
    const storageChose = localStorage.getItem('storageChose')
    const storageChoseCookie = Cookies.get('storageChose')

    const choosedStorage = ref(storageChose || storageChoseCookie ? true : false)

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
    /*Короче надо как-то сделать чтобы можно было хранить ключи кучи пользователей на 1 компе */
    const userData = ref({
        userLogin: 'loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
        userFirstName: 'kir',
        userMiddleName: 'kor',
        userLastName: 'ov',
        userEmail: 'kkeekekek@gmail.com',
        companyName: '',
        phoneNumber: '',
        birthDate: '',
        address: '',
        userAvatar: '/src/assets/DefaultUser/defaultUser.svg',
        userProfileBack: '',
    })
    function setUserData(newValue, valueKey) {
        userData.value[valueKey] = newValue
    }
    // const userLogin = ref('loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')

    // //Методы для аватара
    // const userAvatar = ref('/src/assets/DefaultUser/defaultUser.svg')

    // function setAvatar(file) {
    //     userAvatar.value = file
    // }

    // //Методы для фона
    // const userProfileBack = ref(null)
    // function setProfileBack(file) {
    //     console.log(file)
    //     userProfileBack.value = file
    // }

    // const userAvatar = ref()
    // fetch('/src/assets/DefaultUser/avatarTest.png')
    //     .then((response) => response.blob())
    //     .then((blob) => {
    //         userAvatar.value = URL.createObjectURL(blob)
    //         console.log(userAvatar.value)
    //     })
    // console.log(userAvatar.value)
    return {
        darkModeOn,
        setVisualMode,

        choosedStorage,
        chooseStorage,
        getJwt,
        setJwtKey,

        isLoggged,
        userData,
        setUserData,
    }
})
