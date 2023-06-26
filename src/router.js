import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './components/home.vue'
import Login from './components/auth/login.vue'
import NoteFound from './components/noteFound.vue'
import Tasks from './components/tasks.vue'
import Products from './components/products.vue'
import Cart from './components/cart.vue'
import Upload from './components/Upload.vue'



const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/cart', component: Cart, name: 'cart' },
    { path: '/tasks', component: Tasks, name: 'tasks', meta: { requireAuth: true } },
    { path: '/login', component: Login, name: 'login' },
    { path: '/products', component: Products, name: 'products' },
    { path: '/upload', component: Upload, name: 'upload' },
    { path: '/:pathMatch(.*)*', component: NoteFound, name: 'noteFound' }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// function checkUserIsAuth() {
//     return false;
// }

// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth && !checkUserIsAuth()) {
//         return next({
//             name: 'login'
//         })
//     }

//     next()
// })

export default router;