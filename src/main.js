import { createApp } from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios';
import VueRouter from 'vue-router'

const app = createApp(App)
app.use(VueAxios, axios);
app.use(VueRouter);

app.mount('#app');
