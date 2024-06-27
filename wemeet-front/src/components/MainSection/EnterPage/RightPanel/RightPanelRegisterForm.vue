<template>
    <div v-if="formOpen" class="shadow-4 mt-2" style="border-radius: 20px; height: 530px">
        <transition name="forms-create">
            <div v-if="formCreation" class="flex flex-column justify-content-center align-content-center">
                <div class="flex justify-content-between border-bottom-2 border-primary px-3 py-2">
                    <p
                        style="font-family: 'Helvetica Neue', sans-serif"
                        class="font-bold text-l p-0 m-0 text-center mt-3 mb-2"
                    >
                        sigh up
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
                            src="@/assets/icons/backArrowBlack.svg"
                            alt="Custom Icon"
                            style="width: 20px; height: 20px"
                        />
                    </Button>
                </div>
                <div v-for="item in registerFormEnters" v-bind:key="item.id" class="mx-3">
                    <p class="border-bottom-1 border-primary w-max pr-1 mb-2 ml-3">{{ item.title }}</p>
                    <div class="flex flex-column gap-1">
                        <InputText
                            v-model="item.value.value"
                            type="text"
                            class="bg-primary text-base"
                            style="border-radius: 15px"
                        >
                        </InputText>
                    </div>
                    <div class="w-full border-bottom-1 border-primary w-11 mt-1"></div>
                </div>
                <div class="flex justify-content-center mt-4">
                    <Button class="w-6" style="border-radius: 20px"
                        ><template #default>
                            <div class="m-1 w-11 flex justify-content-between">
                                <p class="m-0 font-medium text-lg">Register</p>
                                <img
                                    src="@/assets/icons/registerArrow.svg"
                                    alt="Custom Icon"
                                    style="width: 20px; height: 20px"
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
import { ref } from 'vue'
const formOpen = defineModel('registerFormOpen')
const formCreation = defineModel('createdForm')

function closeTheForm() {
    formCreation.value = false
    setTimeout(() => (formOpen.value = false), 2000)
}

const email = ref('')
const userName = ref('')
const password1 = ref('')
const password2 = ref('')
const registerFormEnters = [
    {
        id: 1,
        title: 'Email',
        value: email,
    },
    {
        id: 2,
        title: 'UserName',
        value: userName,
    },
    {
        id: 3,
        title: 'Password',
        value: password1,
    },
    {
        id: 4,
        title: 'Repeat password',
        value: password2,
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