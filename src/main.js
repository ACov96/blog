import { createApp } from 'vue';
import App from './App.vue';
import VueAxios from 'vue-axios';
import VueMarkdown from 'vue-markdown';
import axios from 'axios';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.use(VueMarkdown);

app.mount('#app');
