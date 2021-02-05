<template>
  <div id="slide">
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      fade
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <div class="carousel"> 
      <!-- Slides with image only -->
      <b-carousel-slide  img-src="../assets/mount.jpg"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/hiking.jpg"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/rafting.jpg"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/abseiling.jpg"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/camp.jpg"></b-carousel-slide>
    </div>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }

</script>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style>
.carousel{
  width: 100%;
  padding-top: 0%;
  margin-top: 0%;
}
</style>