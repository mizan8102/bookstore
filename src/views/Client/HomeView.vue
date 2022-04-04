<template>

<!-- home section starts  -->

<section class="home" id="home">

    <div class="row">

        <div class="content">
            <h3>upto 75% off</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
            <a href="#" class="btn">shop now</a>
        </div>
        <Swiper class="swiper books-slider"
        :modules="modules"
        :slides-per-view="3"
        :space-between="45"
        Autoplay
        @swiper="onSwiper"
        @slideChange="onSlideChange">
                <SwiperSlide v-for="vv in 10" :key="vv"   class="swiper-slide"> <a href="#" ><img src="../../assets/image/book-1.png" alt=""></a> </SwiperSlide>
            <img src="../../assets/image/stand.png" class="stand" alt="">
        </Swiper>

    </div>

</section>

<!-- home section ense  -->

<!-- icons section starts  -->
<icon-section />

<!-- icons section ends -->

<!-- featured section starts  -->
<feature-section />

<!-- featured section ends -->

<!-- newsletter section starts -->

<section class="newsletter">

    <form action="">
        <h3>subscribe for latest updates</h3>
        <input type="email" name="" placeholder="enter your email" id="" class="box">
        <input type="submit" value="subscribe" class="btn">
    </form>

</section>

<!-- newsletter section ends -->

<!-- arrivals section starts  -->
<arrival-section />


<!-- arrivals section ends -->

<!-- deal section starts  -->

<deal-section />
<!-- deal section ends -->

<!-- reviews section starts  -->
<review-section />


<!-- reviews section ends -->

<!-- blogs section starts  -->

<blog-section />

</template>

<script>

import IconSection from '@/components/IconSection.vue'
import FeatureSection from '@/components/FeaturesSection.vue'
import ArrivalSection from '@/components/NewArrival.vue'
import DealSection from '@/components/DealSection.vue'
import ReviewSection from '@/components/ReviewSection.vue'
import BlogSection from '@/components/BlogSection.vue'


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
      
        IconSection,
        FeatureSection,
        ReviewSection,
        DealSection,
        ArrivalSection,
        BlogSection,

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
    
}
</script>

<style>

</style>