<template>
    <div v-if="formOpen" class="shadow-4 bg-primary my-4" style="border-radius: 20px; height: 360px">
        <transition name="forms-create">
            <div v-if="formCreation" class="flex flex-column justify-content-center align-content-center">
                <div class="flex justify-content-between border-bottom-2 border-primary-reverse px-3 py-2">
                    <p
                        style="font-family: 'Helvetica Neue', sans-serif"
                        class="font-bold text-l p-0 m-0 text-center mt-3 mb-2 bg-primary"
                    >
                        log in
                    </p>
                    <Button
                        @click="closeTheForm"
                        severity="secondary"
                        rounded
                        style="width: fit-content"
                        class="px-2"
                        text
                    >
                        <img
                            v-if="store.$state.darkModeOn"
                            src="@/assets/icons/backArrowBlack.svg"
                            alt="Custom Icon"
                            style="width: 20px; height: 20px"
                        />
                        <img
                            v-else
                            src="@/assets/icons/backArrowWhite.svg"
                            alt="Custom Icon"
                            style="width: 20px; height: 20px"
                        />
                    </Button>
                </div>
                <div v-for="item in registerFormEnters" v-bind:key="item.id" class="mx-3">
                    <p class="border-bottom-1 border-primary-reverse w-max pr-1 mb-2 ml-3 bg-primary">
                        {{ item.title }}
                    </p>
                    <div class="flex flex-column gap-1">
                        <InputText
                            v-model="item.value.value"
                            type="text"
                            class="bg-primary-reverse text-base"
                            style="border-radius: 15px"
                        >
                        </InputText>
                    </div>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex justify-content-center mt-4">
                    <Button class="w-5 bg-primary-reverse" style="border-radius: 20px"
                        ><template #default>
                            <div class="m-1 w-11 flex justify-content-between">
                                <p class="m-0 font-medium text-lg">Log in</p>
                                <img
                                    v-if="store.$state.darkModeOn"
                                    src="@/assets/icons/registerArrow.svg"
                                    alt="Custom Icon"
                                    style="width: 20px; height: 20px"
                                    class="bg-primary-reverse"
                                />
                                <img
                                    v-else
                                    src="@/assets/icons/loginArrow.svg"
                                    alt="Custom Icon"
                                    style="width: 20px; height: 20px"
                                    class="bg-primary-reverse"
                                />
                            </div> </template
                    ></Button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { userSettingsStore } from '../../../../store/userSettingsStore'

import { ref } from 'vue'
const formOpen = defineModel('registerFormOpen')
const formCreation = defineModel('createdForm')

const store = userSettingsStore()

function closeTheForm() {
    formCreation.value = false
    setTimeout(() => (formOpen.value = false), 2000)
}

const userName = ref('')
const password1 = ref('')
const registerFormEnters = [
    {
        id: 1,
        title: 'Username',
        value: userName,
    },
    {
        id: 2,
        title: 'Password',
        value: password1,
    },
]
</script>
<style>
.forms-create-enter-active {
    transition: all 1s ease-out;
}

.forms-create-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.forms-create-enter-from,
.forms-create-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>