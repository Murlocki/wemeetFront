<template>
    <div class="w-12 md:w-9 lg:w-8 shadow-2 py-4 px-3 md:px-4" style="border-radius: 15px">
        <div class="profile-background">
            <img :src="back" alt="fff" />
        </div>
        <div class="w-full mb-6">
            <input-editor :originalValue="store.$state.userData.userLogin" title="Username"></input-editor>
        </div>
        <div class="flex justify-content-between w-full mb-6">
            <span class="text-2xl border-bottom-1">Profile avatar</span>
            <picture-picker
                :setFunction="store.setAvatar"
                :buttonLabel="'Choose avatar file'"
                :stencil_component="CircleStencil"
                :ratio="{ X: 1, Y: 1 }"
            ></picture-picker>
        </div>
        <div class="flex justify-content-between w-full">
            <span class="text-2xl border-bottom-1">Profile background</span>
            <picture-picker
                :setFunction="store.setProfileBack"
                :buttonLabel="'Choose profile background'"
                :ratio="{ X: 2, Y: 1 }"
            >
            </picture-picker>
        </div>
    </div>
</template>

<script setup>
import PicturePicker from './PicturePicker.vue'
import { userSettingsStore } from '../../store/userSettingsStore'
import { CircleStencil } from 'vue-advanced-cropper'
import { computed, ref } from 'vue'
import InputEditor from './InputEditor.vue'

const store = userSettingsStore()

const back = computed(() => {
    return store.$state.userData.userProfileBack
})

const textValues = ref([
    {
        id: 0,
        title: 'Username',
        value: store.$state.userData.userLogin,
        originalValue: store.$state.userData.userLogin,
    },
    {
        id: 1,
        title: 'Email',
        value: store.$state.userData.userEmail,
        originalValue: store.$state.userData.userEmail,
    },
    {
        id: 2,
        title: 'Surname',
        value: store.$state.surname,
        originalValue: store.$state.surname,
    },
    {
        id: 3,
        title: 'Name',
        value: store.$state.name,
        originalValue: store.$state.name,
    },
    {
        id: 4,
        title: 'Patronymic',
        value: store.$state.patronymic,
        originalValue: store.$state.patronymic,
    },
])
</script>

<style>
.profile-background {
    position: relative;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.profile-background img {
    width: 100%;
    height: 100%;
}
</style>
