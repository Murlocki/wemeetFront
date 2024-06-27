import { createRouter, createMemoryHistory } from 'vue-router'
import WemeetLogo from '../components/Header/CommonElements/WemeetLogo.vue'

const routes = [
    {
        path: '',
        component: WemeetLogo,
    },
]
const router = new createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
