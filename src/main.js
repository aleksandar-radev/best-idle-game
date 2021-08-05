import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/tailwind.css'
import global from './globalHelpers'

const app = createApp(App)
app.mixin(global)
app.use(store).use(router).mount('#app')
