<template>
  <div class="about">
    <div align-h="center">
    <b-card

      overlay
      img-src="../assets/about.png"
      img-alt="Card Image"
      img-top
      text-variant="black"
         
    >
      <b-card-text class="text-right mx-5" align-v="center">
        <h2 style="color: white">Adventures Are For Adventurers</h2>
      </b-card-text>
    </b-card>
    </div>
    <div class="intro">    
      <div no-body class="text-center py-5" text-variant="black" >
      The Outdoor Recreation Center is under the Department of Sports Sciences and Physical Education, Sabaragamuwa University of Sri Lanka.
      This is an inbound and outbound training center which has many interesting and adventurous events such as hiking, water rafting, camping, waterfall abseiling, etc.
    </div>
    </div>

     <div class="vision">
    <h3 class="h3">Our Values</h3>

    <b-container class="column-choose" style="margin-left : 100px; margin-right : 100px; padding-bottom : 30px">
      <div class="row">
      <b-row align-v="stretch">
        <b-col >
          <b-card id="card" no-body class="text-left" text-variant="white">
            <h3 class="column-h3">Vision</h3>
            <p class="p">To be the most prominent eco-friendly, professional adventure training and adventure-based recreational service
               provider in Sri Lanka.</p>
          </b-card>
        </b-col>
        <b-col>
          <b-card id="card" no-body class="text-left" text-variant="white">
            <h3 class="column-h3">Mission</h3>
            <p class="p">To strengthen personal development, enhance optimism and increase excitement in an eco-friendly environment 
              by drawing participants out of their comfort zones, to undertake challenges in an outdoor setting that is safe 
              and in keeping with the best practices of outward-bound training and adventure-based activities.</p>
          </b-card>
        </b-col>
      </b-row></div>
    </b-container>    
  </div>   

    <div id="safety" class="text-center py-4">
      <h4>Safety</h4>
      <div class="py-3">
        <b-img center src="../assets/safety.jpg" alt="Center image"></b-img>
      </div>
      <div no-body class="text-left px-5 py-4" text-variant="black" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    </div>
  </div>

</template>

<style scoped>
  .intro{
    font-size: 24px;
  }

  .vision{
   background-color: rgb(12, 30, 48);
 }

  .h3{
    color: rgb(255, 255, 255);
  }

  .column-h3{
    color: rgb(245, 210, 71);
  }

  .p{
    font-size: 20px;
  }

  #card{
     background-color: rgb(12, 30, 48);
  }

</style>