import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

createApp(App).use(router).use(store).mount('#app');
