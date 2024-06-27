<template>
    <div class="p-1 flex flex-column justify-content-center mx-5 w-9 md:w-3 align-content-center" style="height: 530px">
        <transition name="closeRightText">
            <div v-if="!(loginFormOpen || registerFormOpen)" class="px-3">
                <RightPanelTitlesVue class="mb-5"></RightPanelTitlesVue>
                <div class="w-12 flex justify-content-between">
                    <Button @click="openLoginForm" class="button-text border-round-xl w-5">
                        <template #default>
                            <div class="flex w-12 justify-content-between">
                                <p class="m-0 font-semibold">log in</p>
                                <img
                                    src="@/assets/icons/login.svg"
                                    alt="Custom Icon"
                                    style="width: 20px; height: 20px"
                                />
                            </div>
                        </template>
                    </Button>
                    <Button
                        @click="openRegisterForm"
                        class="button-text bg-primary-reverse border-round-xl w-5"
                        label="sing up"
                    >
                        <template #default>
                            <div class="flex w-12 justify-content-between">
                                <p class="m-0 font-semibold">sign up</p>
                                <img
                                    src="@/assets/icons/signup.svg"
                                    alt="Custom Icon"
                                    style="width: 20px; height: 20px"
                                />
                            </div>
                        </template>
                    </Button>
                </div>
            </div>
        </transition>
        <div class="relative">
            <transition name="block-transition">
                <right-panel-register-form
                    v-model:registerFormOpen="registerFormOpen"
                    v-model:createdForm="createdForm"
                    class="block justify-content-center"
                ></right-panel-register-form>
            </transition>
            <transition name="block-transition">
                <right-panel-log-form
                    v-model:registerFormOpen="loginFormOpen"
                    v-model:createdForm="createdForm"
                    class="block justify-content-center mb-4"
                ></right-panel-log-form>
            </transition>
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

function openForm() {
    if (loginFormOpen.value || registerFormOpen.value) setTimeout(() => (createdForm.value = true), 2000)
}

function openLoginForm() {
    loginFormOpen.value = !loginFormOpen.value
    openForm()
    console.log(loginFormOpen.value)
}

function openRegisterForm() {
    registerFormOpen.value = !loginFormOpen.value
    openForm()
    console.log(registerFormOpen.value)
}
</script>

<style>
.button-text {
    font-family: 'Helvetica Neue', sans-serif;
}

/* Анимация исчезания интерфейса под формой */
.closeRightText-enter-active {
    transition: all 2s ease;
}
.closeRightText-leave-active {
    transition: all 2s ease;
}

.closeRightText-enter-from {
    transform: translateY(-50%);
    opacity: 1;
}
.closeRightText-leave-to {
    opacity: 0;
    transform: translateY(-50%);
}

/*Анимация появления формы */
.block {
    margin-bottom: 20px;
    top: 0%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 20vh;
    min-width: 320px;
    height: 530px;
}
.block-transition-enter-active {
    transition: all 1s ease;
}
.block-transition-leave-active {
    transition: all 1s ease;
}

.block-transition-enter-to {
    top: 0%;
    transform: translateX(50%), translateY(0%);
}
.block-transition-leave-from {
    top: 0%;
    transform: translateX(-50%), translateY(0%);
}

.block-transition-enter-from,
.block-transition-leave-to {
    top: 100%;
    transform: translateY(50%), translateX(0%);
}
</style>
