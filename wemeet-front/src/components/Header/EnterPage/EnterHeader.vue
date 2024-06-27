<template>
    <Toolbar class="p-0 mt-4 mx-2 bg-primary-reverse border-0">
        <template #start>
            <wemeet-name></wemeet-name>
        </template>
        <template #end>
            <wemeet-logo></wemeet-logo>
        </template>
    </Toolbar>
</template>

<script setup>
import WemeetName from '../CommonElements/WemeetName.vue'
import WemeetLogo from '../CommonElements/WemeetLogo.vue'
import Toolbar from 'primevue/toolbar'
</script>

<style></style>
