import { createRouter, createWebHistory } from 'vue-router'
import PieChart from '../components/PieChart.vue'
import BarGraph from '../components/BarGraph.vue'
//import Users from '../components/Users.vue'
import NotFound from '../components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: PieChart
        },
        {
            path: '/bargraph',
            component: BarGraph
        },
        {
            path: '/users',
            component: () => import('../components/Users.vue') // just another lasy way not to import component at the top
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: NotFound
        }
    ]
})

export default router