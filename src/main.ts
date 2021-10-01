import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import { gsap } from 'gsap'

createApp(App).use(store).use(router).use(gsap).mount('#app')
