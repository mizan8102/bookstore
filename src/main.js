import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
//import './script'
  // import Swiper JS


  // Import Swiper styles
  import 'swiper/css';
// import 'bootstrap/dist/css/bootstrap.css'
createApp(App).use(router).mount('#app')
