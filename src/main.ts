import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { i18n } from './i18n'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App)
app.use(ElementPlus);
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')

