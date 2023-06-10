import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/home.vue'
import NoteFound from './components/noteFound.vue'
import Tasks from './components/tasks.vue'



const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/tasks', component: Tasks, name: 'tasks' },
    { path: '/:pathMatch(.*)*', component: NoteFound, name: 'noteFound' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;