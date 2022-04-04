<template>
<header-file />

<nav class="bottom-navbar">
    <a href="#home" class="fas fa-home"></a>
    <a href="#featured" class="fas fa-list"></a>
    <a href="#arrivals" class="fas fa-tags"></a>
    <a href="#reviews" class="fas fa-comments"></a>
    <a href="#blogs" class="fas fa-blog"></a>
</nav>

<!-- login form  -->

<div class="login-form-container">

    <div id="close-login-btn" class="fas fa-times"></div>

    <form action="">
        <h3>sign in</h3>
        <span>username</span>
        <input type="email" name="" class="box" placeholder="enter your email" id="">
        <span>password</span>
        <input type="password" name="" class="box" placeholder="enter your password" id="">
        <div class="checkbox">
            <input type="checkbox" name="" id="remember-me">
            <label for="remember-me"> remember me</label>
        </div>
        <input type="submit" value="sign in" class="btn">
        <p>forget password ? <a href="#">click here</a></p>
        <p>don't have an account ? <a href="#">create one</a></p>
    </form>

</div>

<router-view></router-view>
<!-- home section starts  -->

<foooter-part />
<loader :show="activeLoader"/>

 
</template>

<script>
import HeaderFile from './HeaderPart.vue'
import FoooterPart from './FooterPart.vue'



 import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components


  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay'
import Loader from '@/components/LoaderPart.vue'
export default {
    components:{
        HeaderFile,
        FoooterPart,
       
        Loader,
      

    },
    mounted(){
        setTimeout(this.load,2000)
    },
    setup() {
       
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation,Autoplay, Pagination, Scrollbar, A11y],
        
      };
    },
    data(){
        return({
            activeLoader:''
        })
    },
    methods:{
        load(){
            this.activeLoader='active'
        }
    }

    
    
}
</script>

<style>

</style>