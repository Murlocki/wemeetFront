<template>
    <div class="m-0 mr-3">
        <Button severity="secondary" text class="p-0" rounded style="width: fit-content">
            <Image width="60" :src="imagePath"></Image>
        </Button>
    </div>
</template>

<script setup>
import Image from 'primevue/image'
import Button from 'primevue/button'
import { imagePath } from '@assets/index.js'
</script>

<style></style>
