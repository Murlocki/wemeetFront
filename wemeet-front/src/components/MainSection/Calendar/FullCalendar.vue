<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default {
    components: {
        FullCalendar, // make the <FullCalendar> tag available
    },
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'timeGridWeek,timeGridDay,dayGridMonth',
                },
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                editable: true,
                eventDrop: this.handleEventDrop,
                eventResize: this.handleEventResize,
                events: [
                    { title: 'event 1', date: '2024-07-06T10:30:00' },
                    { title: 'event 2', date: '2024-07-06' },
                ],
            },
        }
    },
    methods: {
        handleDateClick: function (arg) {
            alert('date click! ' + arg.dateStr)
        },
        handleEventDrop: function (info) {
            // Handle event drop
            console.log('Event dropped:', info)
        },
        handleEventResize: function (info) {
            // Handle event resize
            console.log('Event resized:', info.event)
        },
    },
}
</script>
<template>
    <FullCalendar :options="calendarOptions" />
</template>
