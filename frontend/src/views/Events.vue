<template>
<div>
   <div align-h="center">
    <b-card

      overlay
      img-src="../assets/event.png"
      img-alt="Card Image"
      img-top
      text-variant="black"
         
    >
    </b-card>
    </div>
<div class="events">
    <h3 class="h3">Our Events</h3>

    <b-container class="column-event" style="padding-bottom : 30px">
      <div class="row">
      <b-row >
        <b-col >
          <b-card id="card" no-body text-variant="black">
          <b-img center thumbnail fluid src="../assets/hiking-sq.png" rounded="circle" class="img"></b-img>
            <h3 class="column-h3">Hiking</h3>
            <p class="p">Hiking, walking in nature as a recreational activity. Especially among those with sedentary 
              occupations, hiking is a natural exercise that promotes physical fitness, is economical and convenient, 
              and requires no special equipment. </p>
          </b-card>
        </b-col>
        <b-col >
          <b-card id="card" no-body text-variant="black">
          <b-img center thumbnail fluid src="../assets/camping-sq.png" rounded="circle" class="img"></b-img>
            <h3 class="column-h3">Camping</h3>
            <p class="p">Camping, recreational activity in which participants take up temporary residence in the outdoors, 
              usually using tents or specially designed or adapted vehicles for shelter. Camping was at one time only a rough, 
              back-to-nature pastime</p>
          </b-card>
        </b-col>
      </b-row>
      <b-row >
        <b-col >
          <b-card id="card" no-body text-variant="black">
          <b-img center thumbnail fluid src="../assets/rafting-sq.png" rounded="circle" class="img"></b-img>
            <h3 class="column-h3">Rafting</h3>
            <p class="p">Rafting and whitewater rafting are recreational outdoor activities which use an inflatable raft to navigate 
              a river or other body of water. This is often done on whitewater or different degrees of rough water.</p>
          </b-card>
        </b-col>
        <b-col >
          <b-card id="card" no-body text-variant="black">
          <b-img center thumbnail fluid src="../assets/abseiling-sq.png" rounded="circle" class="img"></b-img>
            <h3 class="column-h3">Abseiling</h3>
            <p class="p">Abseiling \from German abseilen, 'to rope down'), also known as rappelling 
              from French rappeler, 'to recall' or 'to pull through'), is a controlled descent off a vertical drop, such as a rock face, using a rope.</p>
          </b-card>
        </b-col>
      </b-row>
      <b-row >
        <b-col >
          <b-card id="card" no-body text-variant="black">
          <b-img center thumbnail fluid src="../assets/rappeling-sq.png" rounded="circle" class="img"></b-img>
            <h3 class="column-h3">Rappeling</h3>
            <p class="p">descend a rock face or other near-vertical surface by using a doubled rope coiled around 
              the body and fixed at a higher point; abseil.</p>
          </b-card>
        </b-col>
        <b-col >
          <b-card id="card" no-body text-variant="black">
          <b-img center thumbnail fluid src="../assets/leadership-sq.png" rounded="circle" class="img"></b-img>
            <h3 class="column-h3">Leadreship Programs</h3>
            <p class="p">To be the most prominent eco-friendly, professional adventure training and adventure-based recreational service
               provider in Sri Lanka.</p>
          </b-card>
        </b-col>
      </b-row>
      </div>
    </b-container>    
  </div>   
  </div>
</template>

<style scoped>
  .row{
    align-items: center;
  }

  .img{
    width: 200px;
  }

  .p{
    font-size: 20px;
  }
</style>