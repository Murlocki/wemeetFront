<template>
    <Calendar
        id="calendar-24h"
        v-model="currentDate"
        :showTime="props.hasHours"
        hourFormat="24"
        :placeholder="eventStartDate.toString()"
        :showOnFocus="false"
        showIcon
        touchUI
        ref="ca"
    >
        <template #footer>
            <div class="flex justify-content-between mt-4">
                <Button label="close" icon="pi pi-times" style="border-radius: 15px" @click="handleCancel" />
                <Button label="ok" icon="pi pi-check" style="border-radius: 15px" @click="handleAccept" />
            </div>
        </template>
    </Calendar>
</template>

<script setup>
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import { defineProps, ref } from 'vue'

const props = defineProps({
    hasHours: Boolean,
})

const date = defineModel('date')
console.log(date.value)

const eventStartDate = ref(date.value)
const currentDate = ref(date.value)

const ca = ref()

/*Обработка кнопок */
const handleCancel = function () {
    ca.value.overlayVisible = false
    currentDate.value = eventStartDate.value
}
const handleAccept = function () {
    ca.value.overlayVisible = false
    eventStartDate.value = currentDate.value
}
</script>

<style></style>
