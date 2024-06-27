import { defineStore } from 'pinia'
export const userSettingsStore = defineStore('userSettingsStore', {
    state: () => ({
        darkModeOn: false,
    }),
    actions: {
        setVisualMode() {
            this.darkModeOn = !this.darkModeOn
        },
    },
})
