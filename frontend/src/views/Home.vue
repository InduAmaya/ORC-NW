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
    <div class="text-left" style="margin-left: 150px">
      <b-button  variant="danger" href="/join" size="lg">Join Us</b-button>
    </div>
  </div>

  <b-container>
    <b-row class="mb-5">
    </b-row>
  </b-container>

  <div class="choose">
    <h3 class="h3">Why choose us</h3>

    <b-container class="column-choose" style="margin-left : 100px; margin-right : 100px; padding-bottom : 30px">
      <b-row align-v="stretch">
        <b-col>
          <b-card no-body class="text-left" border-variant="light">
            <h3 class="column-h3">Safety</h3>
            <p>Needless to say, safety is our primary concern and we adopt every possible safety precaution to ensure the 
              wellbeing of our clients on site.</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card no-body class="text-left" border-variant="light">
            <h3 class="column-h3">Unity</h3>
            <p>One of the main goals of outbound training events carried out by Academy of Adventure is to foster unity 
              among the participants to enable stronger</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card no-body class="text-left" border-variant="light">
            <h3 class="column-h3">Responsibility</h3>
            <p>The Academy of Adventure prides itself in being a responsible organization that also instills the same value in its participants.Our activities are carefully planned</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card no-body class="text-left" border-variant="light">
            <h3 class="column-h3">Eco friendliness</h3>
            <p>In today’s world, personal growth often comes at the cost of the environment. At the Academy of Adventure, we are completely opposed to this.</p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-button  variant="danger" href="/about" size="lg" style="margin-bottom : 30px">About Us</b-button>
    
  </div>

  <div class="plan">
    <h3 class="h3">Start planning your adventure</h3>
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="../assets/hiking-sq.png" rounded="circle"></b-img>
          <p class="plans">Hiking</p>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="../assets/camping-sq.png" rounded="circle"></b-img>
          <p class="plans">Camping</p>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="../assets/rafting-sq.png" rounded="circle"></b-img>
          <p class="plans">Water rafting</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="../assets/abseiling-sq.png" rounded="circle"></b-img>
          <p class="plans">Abseiling</p>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="../assets/rappeling-sq.png" rounded="circle"></b-img>
          <p class="plans">Rappeling</p>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="../assets/leadership-sq.png" rounded="circle"></b-img>
          <p class="plans">Leadership programs</p>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <b-container>
    <b-row class="mb-5">
    </b-row>
  </b-container>

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

.h3{
  font-size: 30pt;
  padding-top: 30px;
  padding-bottom: 30px;
}

 .choose{
   background-color: rgb(174, 211, 247);
 }

 .column-h3{
   text-align: center;
   padding-top: 10px;
 }

  .plans{
    font-size: 20pt;
    color: cornsilk;
  }

</style>