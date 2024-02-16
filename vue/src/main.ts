import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { TextPlugin } from "gsap/TextPlugin";
import gsap from 'gsap';
gsap.registerPlugin(TextPlugin);

const app = createApp(App)

app.use(router)

app.mount('#app')
