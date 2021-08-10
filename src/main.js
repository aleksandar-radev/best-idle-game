import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/tailwind.css'
import helpers from './helpers'

const app = createApp(App)
app.mixin(helpers)
app.use(store).use(router).mount('#app')
