import { createRouter, createWebHistory } from 'vue-router'
import EnterPage from '../components/MainSection/EnterPage/EnterPage.vue'
import MainContainer from '../components/MainSection/EnterPage/MainContainer.vue'
import AboutPage from '../components/MainSection/AboutPage/AboutPage.vue'
import HelpPage from '../components/MainSection/HelpPage/HelpPage.vue'
import TreatPageMain from '../components/MainSection/TreatPage/TreatPageMain.vue'
import FullCalendar from '../components/MainSection/CalendarPage/Calendar/FullCalendar.vue'
import LoggedPage from '../components/MainSection/CalendarPage/LoggedPage.vue'
import Homepage from '../components/MainSection/HomePage/Homepage.vue'
import Settings from '../components/SettingsPage/Settings.vue'
const routes = [
    {
        path: '',
        component: EnterPage,
        children: [
            {
                path: '',
                component: MainContainer,
            },
            {
                path: 'about',
                component: AboutPage,
            },
            {
                path: 'help',
                component: HelpPage,
            },
            {
                path: 'treat',
                component: TreatPageMain,
            },
        ],
    },
    {
        path: '/home',
        component: LoggedPage,
        children: [
            {
                path: '',
                component: Homepage,
            },
            {
                path: 'timetable',
                component: FullCalendar,
            },
            {
                path: 'settings',
                component: Settings,
            },
        ],
    },
]
const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router
