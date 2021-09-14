import {createApp} from 'vue';
import antd from 'ant-design-vue';
import './app.css';
import App from './App.vue';

let vue = createApp(App);
vue.use(antd);
vue.mount('#app');
