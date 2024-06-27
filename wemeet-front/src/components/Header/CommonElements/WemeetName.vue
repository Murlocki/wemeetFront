<template>
    <div class="m-0">
        <Image class="ml-3" width="150" :src="themeIcon"></Image>
    </div>
</template>

<script setup>
import Image from 'primevue/image'
import { textLogoPath, textLogoPathWhite } from '@assets/index.js'
import { userSettingsStore } from '../../../store/userSettingsStore'
import { computed } from 'vue'

const store = userSettingsStore()
const themeIcon = computed(() => {
    if (!store.$state.darkModeOn) return textLogoPath
    return textLogoPathWhite
})
</script>

<style></style>
