<script setup>
import CookieDialog from './components/CommonCookieDialog/CookieDialog.vue'
</script>

<template>
    <div class="h-screen">
        <cookie-dialog></cookie-dialog>
        <router-view></router-view>
    </div>
</template>

<style scoped></style>
