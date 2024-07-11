<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { ref } from 'vue'
import { eventStore } from '../../../../store/eventStore'
const calendar = ref()

/*Настрока календаря */
const store = eventStore()

const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    headerToolbar: {
        center: '',
        left: '',
        right: '',
    },
    contentHeight: 'auto',
    timeZone: 'local',
    defaultTimedEventDuration: '00:00',
    initialView: 'timeGridDay',
    events: store.$state.events,
})
</script>
<template>
    <div style="min-height: 700px" class="flex flex-column justify-content-center w-full md:w-10 mt-3">
        <div class="bg-primary-reverse text-color text-center text-3xl lg:text-5xl h-full w-full mb-1">
            <span>Your events for today</span>
        </div>
        <div style="border-radius: 16px">
            <FullCalendar
                ref="calendar"
                class="bg-primary-reverse text-color text-md lg:text-base h-full w-full"
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

.fc-daygrid-event-dot {
    display: none;
}
.fc-day-today {
    background-color: var(--primary-color-text) var(--primary-color) !important;
    color: var(--primary-color) !important;
}

/*Настройки ивентов */
.fc-more-link,
.fc-daygrid-more-link,
.fc-daygrid-day-bottom {
    overflow: hidden;
}
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
</style>
