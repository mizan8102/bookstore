<template>
  <section class="featured" id="featured">

    <h1 class="heading"> <span>featured books</span> </h1>

    <Swiper
     :modules="modules"
        :slides-per-view="perView"
        :space-between="10"
        Autoplay
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swiper featured-slider">

            <SwiperSlide class="swiper-slide box" v-for="vv in 10" :key="vv">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    <img src="../assets/image/book-1.png" alt="">
                </div>
                <div class="content">
                    <h3>featured books</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </SwiperSlide>

        

       

        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->

    </Swiper>

</section>

</template>

<script>
 import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/autoplay'
export default {
    components:{
          Swiper,
          SwiperSlide,
         
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
    // created(){

    // },
    
    mounted(){
         if(!this.mobile){
                this.perView=5

            }else{
                this.perView=1
            }
        addEventListener('resize', () => {
            this.mobile = innerWidth <= 700
             if(!this.mobile){
                this.perView=5

            }else{
                this.perView=1
            }
        })

         addEventListener('load', () => {
            this.mobile = innerWidth <= 700
             if(!this.mobile){
                this.perView=5

            }else{
                this.perView=1
            }
        })
       
    },
    data(){
        return({
            mobile:window.innerWidth <= 700,
            perView:'',
        })
    },
    methods:{
        
    }
}
</script>

<style>

</style>