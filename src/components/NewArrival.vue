<template>
  <section class="arrivals" id="arrivals">

    <h1 class="heading"> <span>new arrivals</span> </h1>

    <Swiper
     :modules="modules"
      
        :space-between="10"
         :slides-per-view="3"

        @swiper="onSwiper"
        @slideChange="onSlideChange"
         class="swiper arrivals-slider">
        <SwiperSlide v-for="vv in 4" :key="vv">
            <a href="#" class="swiper-slide box" >
                <div class="image">
                    <img src="../assets/image/book-1.png" alt="">
                </div>
                <div class="content">
                    <h3>new arrivals</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>
        </SwiperSlide>

      

    </Swiper>

    <Swiper
     :modules="modules"
      
        :space-between="10"
         :slides-per-view="3"

        @swiper="onSwiper"
        @slideChange="onSlideChange"
         class="swiper arrivals-slider">
        <SwiperSlide v-for="vv in 4" :key="vv">
            <a href="#" class="swiper-slide box" >
                <div class="image">
                    <img src="../assets/image/book-2.png" alt="">
                </div>
                <div class="content">
                    <h3>new arrivals</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </a>
        </SwiperSlide>
      

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
      
    }, mounted(){
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