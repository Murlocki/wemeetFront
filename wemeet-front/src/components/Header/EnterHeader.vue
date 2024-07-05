<template>
    <div class="pt-4 bg-primary-reverse">
        <Toolbar class="p-0 mx-2 bg-primary-reverse border-0">
            <template #start>
                <Button
                    v-if="store.$state.isLoggged"
                    icon="pi pi-bars"
                    severity="secondary"
                    text
                    class="p-button-lg"
                    @click="visibleLeft = true"
                ></Button>
                <wemeet-name></wemeet-name>
            </template>
            <template #end>
                <wemeet-logo></wemeet-logo>
            </template>
        </Toolbar>
        <Sidebar v-model:visible="visibleLeft" header="Main menu" class="p-sidebar-sm" role="region">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
        </Sidebar>
    </div>
</template>

<script setup>
import WemeetName from './CommonElements/WemeetName.vue'
import WemeetLogo from './CommonElements/WemeetLogo.vue'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import { userSettingsStore } from '../../store/userSettingsStore'

import { ref } from 'vue'
const store = userSettingsStore()
const visibleLeft = ref(true)
</script>

<style></style>
