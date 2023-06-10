import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')