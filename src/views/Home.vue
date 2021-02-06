<template>
<div>
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
      <b-carousel-slide  img-src="../assets/hiking.png"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/rafting.png"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/abseiling.png"></b-carousel-slide>
      <b-carousel-slide  img-src="../assets/camping.png"></b-carousel-slide>
    </div>
    </b-carousel>
  </div>

  <div id="text">
    <b-card no-body class="text-left" border-variant="light">
    <h2 class="h2">Welcome to ORC</h2>
    <p class="para">Explore amazing adventurous activites and plan your adventure.</p>
  </b-card>
  </div>
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

#text{
  max-width: 50%;
  margin-top: 30px;
  padding-left: 30px;
}

.h2{
  font-size: 48pt;
}

.para{
  font-size: 24pt;
}
</style>