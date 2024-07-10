import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const eventStore = defineStore('eventStore', () => {
    const events = ref([
        {
            title: 'event 1',
            start: '2024-07-08',
            end: '2024-07-09',
            startHasHours: false,
            endHasHours: false,
            description: 'aaddddds',
            eventId: 14,
            backgroundColor: '#ff0000',
            borderColor: '#ff0000',
            textColor: '#000000',
        },
        {
            title: 'event 2',
            start: '2024-07-10T23:30:00',
            end: '',
            startHasHours: true,
            endHasHours: false,
            description: 'aaddddds',
            eventId: 12,
            backgroundColor: '#ff0000',
            borderColor: '#ffffff',
            textColor: '#000000',
        },
        {
            title: 'event 3',
            start: '2024-07-06',
            end: '',
            startHasHours: false,
            endHasHours: false,
            description: 'aaddddds',
            eventId: 13,
            backgroundColor: '#ff0000',
            borderColor: '#ff0000',
            textColor: '#000000',
        },
        {
            title: 'event 4',
            start: '2024-07-06',
            end: '',
            startHasHours: false,
            endHasHours: false,
            description: 'aaddddds',
            eventId: 15,
            backgroundColor: '#ff0000',
            borderColor: '#ff0000',
            textColor: '#000000',
        },
    ])

    const updateEvent = function (newEvent, currentEventId) {
        const index = events.value.findIndex((it) => it.eventId == currentEventId)
        events.value[index] = { ...events.value[index], ...newEvent }
    }

    return { events, updateEvent }
})
