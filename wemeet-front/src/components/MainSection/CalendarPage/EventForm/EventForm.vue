<template>
    <div class="bg-primary-reverse" style="height: fit-content">
        <form class="flex flex-column">
            <div class="flex flex-column mb-3">
                <p class="border-bottom-1 border-primary w-max pr-1 mb-2 ml-3">Event title</p>
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
            <div class="flex flex-column mb-2">
                <div class="flex align-items-center justify-content-between ml-3 pr-1 mb-2" style="height: fit-content">
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
            <div class="flex flex-column mb-2">
                <div class="flex align-items-center justify-content-between ml-3 pr-1 mb-2" style="height: fit-content">
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
                    require
                ></date-picker>
                <small id="endDate">Enter your event end date.</small>
                <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
            </div>
            <div class="flex flex-column mb-2">
                <p class="border-bottom-1 border-primary w-max pr-1 mb-2 ml-3">Event description</p>
                <Textarea id="description" class="text-base" v-model="eventDescription" autoResize rows="6" cols="40" />
                <small id="description">Enter your event description.</small>
                <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
            </div>
            <div class="flex flex-column mb-2">
                <div class="flex align-items-center" id="textColor">
                    <ColorPicker class="text-base" v-model="eventTextColor" format="hex" />
                    <p class="border-bottom-1 border-primary w-max pr-1 ml-4">Event text color</p>
                </div>
                <small id="textColor">Choose your event text color.</small>
                <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
            </div>
            <div class="flex flex-column mb-2">
                <div class="flex align-items-center">
                    <ColorPicker class="text-base" v-model="eventBackColor" format="hex" />
                    <p class="border-bottom-1 border-primary w-max pr-1 ml-4">Event background color</p>
                </div>
                <small id="backGround">Choose your event background color.</small>
                <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
            </div>
            <div class="flex flex-column mb-2">
                <div class="flex align-items-center">
                    <ColorPicker class="text-base" v-model="eventBorderColor" format="hex" />
                    <p class="border-bottom-1 border-primary w-max pr-1 ml-4">Event border color</p>
                </div>
                <small id="borderColor">Choose your event border color.</small>
                <div class="w-full border-bottom-1 border-primary-reverse w-11 mt-1"></div>
            </div>
            <div class="flex justify-content-center mt-4">
                <Button class="p-button-lg" style="border-radius: 15px" label="Accept"></Button>
            </div>
        </form>
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
const props = defineProps({
    description: String,
    title: String,
    color: String,
    startDate: Date,
    endDate: Date,
    endHasHours: Boolean,
    startHasHours: Boolean,
    backgroundColor: String,
    borderColor: String,
})

const eventTitle = ref(props.title)
const eventStartDate = ref(props.startDate)
const eventEndDate = ref(props.endDate ? props.endDate : '')
const eventDescription = ref(props.description ? props.description : '')
const eventTextColor = ref(props.color)
const eventBackColor = ref(props.backgroundColor)
const eventBorderColor = ref(props.borderColor)
const eventStartHasHours = ref(props.startHasHours)
const eventEndHasHours = ref(props.endHasHours)
</script>

<style></style>
