import { createRouter, createWebHistory } from 'vue-router'
import EnterPage from '../components/MainSection/EnterPage/EnterPage.vue'
import MainContainer from '../components/MainSection/EnterPage/MainContainer.vue'
import AboutPage from '../components/MainSection/AboutPage/AboutPage.vue'
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
                path: '/about',
                component: AboutPage,
            },
            {
                path: '/help',
                component: MainContainer,
            },
            {
                path: '/treat',
                component: MainContainer,
            },
        ],
    },
]
const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router
