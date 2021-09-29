import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/lib/theme-chalk/display.css';
import 'initialize-css/dist/initialize.min.css';

createApp(App).use(ElementPlus).use(store).mount('#app')
