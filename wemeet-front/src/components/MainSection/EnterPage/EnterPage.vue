<template>
    <div class="m-0 flex flex-column bg-primary-reverse h-screen">
        <enter-header></enter-header>
        <div class="flex justify-content-center w-screen bg-primary-reverse" style="flex: 1">
            <div class="flex w-11 justify-content-center align-content-center bg-primary-reverse mb-2">
                <router-view></router-view>
            </div>
        </div>
        <footer-page></footer-page>
    </div>
</template>

<script setup>
import EnterHeader from '../../Header/EnterPage/EnterHeader.vue'
import FooterPage from '../../CommonFooter/FooterPage.vue'
</script>

<style></style>
