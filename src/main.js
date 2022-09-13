import { createApp } from 'vue';
import App from './App.vue';


// Importing Core Styles
import "bootstrap/dist/css/bootstrap.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import "./assets/css/style.css";


const app = createApp(App);


// Mounting the App
app.mount('#app');

// Importing Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.js";

