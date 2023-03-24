import { createApp } from 'vue'
import { createPinia } from "pinia" //要new一个实例
import persistedstate from "pinia-plugin-persistedstate"

import 'normalize.css'
import './style/index.css'
import  './assets/font/iconfont.css'

import router from './router'
import App from './App.vue'

// const _ = require('lodash')


const pinia = createPinia()
pinia.use(persistedstate)//持久化

createApp(App).use(pinia).use(router).mount('#app')
 