<template>
    <div class="p-1 flex flex-column justify-content-center w-10 md:w-4 align-content-center" style="min-height: 604px">
        <transition name="closeRightText">
            <div v-if="!(loginFormOpen || registerFormOpen)">
                <RightPanelTitlesVue class="mb-5"></RightPanelTitlesVue>
                <div class="w-12 flex justify-content-between">
                    <Button @click="openLoginForm" class="button-text border-round-xl w-5">
                        <template #default>
                            <div class="flex w-12 justify-content-between">
                                <p class="m-0 font-semibold text-sm lg:text-base">log in</p>
                                <img :src="themeIcon" alt="Custom Icon" style="width: 20px; height: 20px" />
                            </div>
                        </template>
                    </Button>
                    <Button @click="openRegisterForm" class="button-text bg-primary-reverse border-round-xl w-5">
                        <template #default>
                            <div class="flex w-12 justify-content-between">
                                <p class="m-0 font-semibold text-sm lg:text-base">sign up</p>
                                <img :src="themeSignIcon" alt="Custom Icon" style="width: 20px; height: 20px" />
                            </div>
                        </template>
                    </Button>
                </div>
            </div>
        </transition>
        <div v-if="loginFormOpen || registerFormOpen" class="flex justify-content-center">
            <right-panel-register-form
                v-model:textCl="textClosed"
                v-model:registerFormOpen="registerFormOpen"
                v-model:createdForm="createdForm"
                class="justify-content-center"
            ></right-panel-register-form>

            <right-panel-log-form
                v-model:textCl="textClosed"
                v-model:registerFormOpen="loginFormOpen"
                v-model:createdForm="createdForm"
                class="justify-content-center mb-4"
            ></right-panel-log-form>
        </div>
    </div>
</template>

<script setup>
import RightPanelTitlesVue from './RightPanelTitles.vue'
import RightPanelRegisterForm from './RightPanelRegisterForm.vue'
import RightPanelLogForm from './RightPanelLogForm.vue'
import Button from 'primevue/button'
import { ref } from 'vue'

const loginFormOpen = ref(false)
const registerFormOpen = ref(false)
const createdForm = ref(false)
const textClosed = ref(false)

function openForm() {
    if (loginFormOpen.value || registerFormOpen.value) {
        setTimeout(() => (textClosed.value = true), 1000)
        setTimeout(() => (createdForm.value = true), 2000)
    }
}

function openLoginForm() {
    loginFormOpen.value = !loginFormOpen.value
    openForm()
    console.log(loginFormOpen.value)
}

function openRegisterForm() {
    registerFormOpen.value = !registerFormOpen.value
    openForm()
    console.log(registerFormOpen.value)
}

import { userSettingsStore } from '../../../../store/userSettingsStore'
import { computed } from 'vue'
import { loginButtonIcon, loginButtonIconBlack } from '@assets/index.js'
import { signUpButtonBlack, signUpButtonWhite } from '@assets/index.js'
const store = userSettingsStore()
const themeIcon = computed(() => {
    if (!store.$state.darkModeOn) return loginButtonIconBlack
    return loginButtonIcon
})
const themeSignIcon = computed(() => {
    if (!store.$state.darkModeOn) return signUpButtonBlack
    return signUpButtonWhite
})
</script>

<style>
.button-text {
    font-family: 'Helvetica Neue', sans-serif;
}

/* Анимация исчезания интерфейса под формой */
.closeRightText-enter-active {
    transition: all 1s ease;
}
.closeRightText-leave-active {
    transition: all 1s ease;
}

.closeRightText-enter-from {
    transform: translateY(-100%);
    opacity: 0;
}
.closeRightText-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}
</style>
