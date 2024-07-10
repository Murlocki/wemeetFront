<template>
    <div class="bg-primary-reverse" style="height: fit-content">
        <transition name="forms-create">
            <form class="flex flex-column" @submit.prevent="acceptForm" v-if="visibleForm">
                <div class="flex flex-column mb-3">
                    <span class="border-bottom-1 border-primary w-max pr-1 mb-2 ml-3">Event title</span>
                    <InputText
                        id="title"
                        type="text"
                        v-model="eventTitle"
                        :placeholder="eventTitle.toString()"
                        require
                        style="border-radius: 15px"
                        class="bg-primary-reverse text-base w-12"
                    ></InputText>
                    <small id="title">Enter your event title.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column mb-3">
                    <div
                        class="flex align-items-center justify-content-between ml-3 pr-1 mb-2"
                        style="height: fit-content"
                    >
                        <span class="border-bottom-1 border-primary w-max">Start date</span>
                        <div class="flex align-items-center">
                            <Checkbox v-model="eventStartHasHours" id="startHours" :binary="true" />
                            <label for="startHours" class="ml-2"> Enable hours </label>
                        </div>
                    </div>
                    <date-picker
                        inputClass="bg-primary-reverse text-base w-12"
                        id="startDate"
                        v-model:date="eventStartDate"
                        :hasHours="eventStartHasHours"
                        require
                    ></date-picker>
                    <small id="startDate">Enter your event start date.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column mb-3">
                    <div
                        class="flex align-items-center justify-content-between ml-3 pr-1 mb-2"
                        style="height: fit-content"
                    >
                        <span class="border-bottom-1 border-primary w-max">End date</span>
                        <div class="flex align-items-center">
                            <Checkbox v-model="eventEndHasHours" id="endHours" :binary="true" />
                            <label for="endHours" class="ml-2"> Enable hours </label>
                        </div>
                    </div>
                    <date-picker
                        inputClass="bg-primary-reverse text-base w-12"
                        id="endDate"
                        v-model:date="eventEndDate"
                        :hasHours="eventEndHasHours"
                    ></date-picker>
                    <small id="endDate">Enter your event end date.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column mb-3">
                    <span class="border-bottom-1 border-primary w-max pr-1 mb-2 ml-3">Event description</span>
                    <Textarea
                        id="description"
                        class="text-base"
                        v-model="eventDescription"
                        autoResize
                        rows="6"
                        cols="40"
                    />
                    <small id="description">Enter your event description.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column mb-3">
                    <div class="flex align-items-center mb-2" id="textColor">
                        <ColorPicker class="text-base" v-model="eventTextColor" format="hex" />
                        <span class="border-bottom-1 border-primary w-max pr-1 ml-4">Event text color</span>
                    </div>
                    <small id="textColor">Choose your event text color.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column mb-3">
                    <div class="flex align-items-center mb-2">
                        <ColorPicker class="text-base" v-model="eventBackColor" format="hex" />
                        <span class="border-bottom-1 border-primary w-max pr-1 ml-4">Event background color</span>
                    </div>
                    <small id="backGround">Choose your event background color.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column mb-3">
                    <div class="flex align-items-center mb-2">
                        <ColorPicker class="text-base" v-model="eventBorderColor" format="hex" />
                        <span class="border-bottom-1 border-primary w-max pr-1 ml-4">Event border color</span>
                    </div>
                    <small id="borderColor">Choose your event border color.</small>
                    <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
                </div>
                <div class="flex flex-column align-items-center justify-content-center mt-4">
                    <Button type="submit" class="p-button-lg w-6" style="border-radius: 15px" label="Accept"></Button>
                    <span class="text-red-600 text-sm mt-2">{{ errorMessage }}</span>
                </div>
            </form></transition
        >
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import DatePicker from './DatePicker.vue'
import ColorPicker from 'primevue/colorpicker'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import { eventStore } from '../../../../store/eventStore'

/*Функции формитирования дат */
const formatDate = function (date, hasHours) {
    const dateFormat = new Date(date.toString().split('GMT')[0] + ' UTC').toISOString()
    return hasHours ? dateFormat.slice(0, 19) : dateFormat.slice(0, 10)
}
const formatEndDate = function () {
    eventEndDate.value.setDate(eventEndDate.value.getDate() + 1)
    eventEndDate.value.toUTCString()
    return eventEndDate.value
}
const backReformEndDate = function () {
    if (event.extendedProps.endHasHours) return event.end
    const newEndDate = event.end
    newEndDate.setDate(newEndDate.getDate() - 1)
    newEndDate.toUTCString()
    return newEndDate
}

/*Функция форматирования цвета */
const formatColor = function (color) {
    return color[0] == '#' ? color : '#' + color
}

/*Функция принятия формы */
const errorMessage = ref('')
const acceptForm = function () {
    errorMessage.value =
        eventEndDate.value && new Date(eventEndDate.value) < new Date(eventStartDate.value)
            ? 'Неверная дата окончания'
            : ''

    if (!errorMessage.value) {
        const startDateFormat = formatDate(eventStartDate.value, eventStartHasHours.value)
        const endDateFormat = eventEndDate.value
            ? formatDate(eventEndHasHours.value ? eventEndDate.value : formatEndDate(), eventEndHasHours.value)
            : ''
        const newEvent = {
            title: eventTitle.value,
            start: startDateFormat,
            end: endDateFormat,
            startHasHours: eventStartHasHours.value,
            endHasHours: eventEndHasHours.value,
            description: eventDescription.value,
            eventid: eventId.value,
            backgroundColor: formatColor(eventBackColor.value),
            borderColor: formatColor(eventBorderColor.value),
            textColor: formatColor(eventTextColor.value),
        }

        console.log(newEvent)
        store.updateEvent(newEvent, eventId.value)
        visibleForm.value = false
        console.log(store.$state.events)
    }
}

const props = defineProps({
    event: Object,
})

const visibleForm = defineModel('dialogVisible')

const event = props.event
console.log(event)

const eventTitle = ref(event.title)
const eventStartDate = ref(event.start)
const eventEndDate = ref(event.end ? backReformEndDate() : '')
const eventDescription = ref(event.extendedProps.description ? event.extendedProps.description : '')
const eventTextColor = ref(event.textColor)
const eventBackColor = ref(event.backgroundColor)
const eventBorderColor = ref(event.borderColor)
const eventStartHasHours = ref(event.extendedProps.startHasHours)
const eventEndHasHours = ref(event.extendedProps.endHasHours)
const eventId = ref(event.extendedProps.eventId)

const store = eventStore()
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
    transform: translateX(-100px);
    opacity: 0;
}
</style>
