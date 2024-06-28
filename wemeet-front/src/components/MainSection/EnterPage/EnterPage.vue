<template>
    <div class="m-0 flex flex-column bg-primary-reverse h-screen">
        <enter-header></enter-header>
        <div class="flex justify-content-center w-screen bg-primary-reverse">
            <div class="flex w-11 justify-content-center align-content-center bg-primary-reverse">
                <router-view style="flex: 1"></router-view>
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
