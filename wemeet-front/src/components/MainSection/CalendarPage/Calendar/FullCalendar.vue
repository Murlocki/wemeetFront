<script setup>
import Button from 'primevue/button'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import EventForm from '../EventForm/EventForm.vue'

/*Настройка диалоговой формы */
import Dialog from 'primevue/dialog'
const visibleForm = ref(false)

import { ref } from 'vue'
import { eventStore } from '../../../../store/eventStore'
const calendar = ref()

/*Обрабатываем клики на дни */
const prevView = ref(['dayGridMonth'])
const handleNonDayClick = function (arg) {
    if (calendar.value.getApi().view.type == 'dayGridMonth') prevView.value = []
    prevView.value = [...prevView.value, calendar.value.getApi().view.type]
    calendar.value.getApi().changeView('timeGridDay')
    calendar.value.getApi().gotoDate(arg.dateStr)
}
const returnPrevView = function () {
    const prevViewType = prevView.value.slice(-1)
    prevView.value = [...prevView.value.slice(0, -1)]
    calendar.value.getApi().changeView(prevViewType)
}

const handleDateClick = function (arg) {
    if (calendar.value.getApi().view.type != 'timeGridDay') {
        handleNonDayClick(arg)
    }
}

/*Открытие формы изменения ивента */
const currentEvent = ref({})
const openForm = ref(false)
const handleEventClick = function (info) {
    console.log(info.event)
    currentEvent.value = info.event
    openForm.value = true

    visibleForm.value = true
}

const handleEventDrop = function (info) {
    // Handle event drop
    console.log('Event dropped:', info)
}
const handleEventResize = function (info) {
    // Handle event resize
    console.log('Event resized:', info.event)
}

const store = eventStore()

const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
        left: 'prev,next',
        right: 'timeGridWeek,timeGridDay,dayGridMonth',
    },
    nowIndicator: true,
    contentHeight: 'auto',
    timeZone: 'local',
    defaultTimedEventDuration: '00:00',
    eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        meridiem: false,
    },
    initialView: 'dayGridMonth',
    dateClick: handleDateClick,
    editable: true,
    eventClick: handleEventClick,
    eventDrop: handleEventDrop,
    eventResize: handleEventResize,

    events: store.$state.events,
    viewClassNames: () => {
        title.value = calendar.value.getApi().view.title
    },
})

const title = ref()
</script>
<template>
    <div style="min-height: 700px" class="flex flex-column justify-content-center w-full md:w-10">
        <div class="flex justify-content-between mb-3 align-items-center">
            <span class="text-center text-lg lg:text-2xl font-bold vertical-align-middle" style="height: fit-content">{{
                calendar ? title : ''
            }}</span>
            <div>
                <Button
                    v-if="calendar && calendar.getApi().view.type != 'dayGridMonth'"
                    icon="pi pi-arrow-left"
                    class="border-circle mr-2"
                    v-tooltip.bottom="'Back'"
                    @click="returnPrevView"
                ></Button>
                <Button icon="pi pi-plus" class="border-circle" v-tooltip.bottom="'Add new event'"></Button>
            </div>
        </div>
        <Dialog
            v-model:visible="visibleForm"
            modal
            dismissableMask
            header="Event form"
            :class="'w-10 md:w-6 lg:w-4 flex justify-content-center p-dialog-content bg-primary-reverse'"
        >
            <event-form
                class="bg-primary-reverse"
                style="height: fit-content"
                :event="currentEvent"
                v-model:dialog-visible="visibleForm"
            ></event-form>
        </Dialog>
        <div style="border-radius: 16px">
            <FullCalendar
                ref="calendar"
                class="bg-primary-reverse text-color text-sm md:text-md lg:text-base h-full w-full"
                :options="calendarOptions"
            />
        </div>
    </div>
</template>
<style>
.fc-scrollgrid {
    border-radius: 16px 16px 0px 0px !important;
}
.fc-scrollgrid > thead > tr > th {
    border-radius: 16px 16px 0px 0px !important;
}
.fc-scroller {
    border-radius: 0px 0px 16px 16px !important;
}

/*Подсветка выходных */
.fc-day-sat,
.fc-day-sun {
    color: red;
}

.fc-day-today {
    background-color: var(--primary-color) !important;
    color: var(--primary-color-text) !important;
}

/*Настройки ивентов */
.fc-event-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/*Стили кнопок */
.fc-button {
    background-color: var(--primary-color) !important;
    color: var(--primary-color-text) !important;
    padding: 0.5rem 1rem;
    font-size: 1rem !important;
}
.fc-button-primary {
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    font-size: 1rem !important;
    border-radius: 15px !important;
    cursor: pointer;
    margin-left: 5px !important;
    margin-right: 5px !important;
}
.fc-button:hover,
.fc-button:focus {
    background-color: var(--primary-color-text) !important;
    color: var(--primary-color) !important;
}

.p-dialog {
    background-color: var(--primary-color-text);
    color: var(--primary-color);
}

.p-dialog .p-dialog-header {
    background-color: var(--primary-color-text);
    color: var(--primary-color);
}

.p-dialog .p-dialog-content {
    background-color: var(--primary-color-text);
    color: var(--primary-color);
}
</style>
