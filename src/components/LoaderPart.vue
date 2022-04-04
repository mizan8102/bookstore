<template>
  <!-- loader  -->

<div class="loader-container" :class="show">
    <img src="../assets/image/loader-img.gif" alt="">
</div>

</template>

<script>

export default {
  props:{
    show:String,
  },
  data(){
    return({
      data: {
     isActive:true
    }
    })
  },
  mounted(){
    setTimeout(this.loader,2000)
  },
  methods:{
    loader(){
      this.isActive=false
    }
  }
}
</script>

<style>

</style>