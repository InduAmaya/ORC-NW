<template>
    <div class="join">
        <div align-h="center">
            <b-card
                class="mx-5 mt-4"
                overlay
                img-src="../assets/join.jpg"
                img-alt="Card Image"
                img-top
                img-height="500px"
                text-variant="white"
                    
            >
            <b-card-text class="mt-5">
                <h1>Join Us...</h1>
                <h2>Have a wonderful experience</h2>
            </b-card-text>
            </b-card>
        </div>  

        <div align="center">
          <b-card class="my-5" style="width: 600px; background-color: rgba(0,0,255,.1)">
            <h3>Registration</h3>
    <b-form @submit.prevent="addRecords" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Contact Number:" label-for="input-2">
        <b-form-input
          id="input-3"
          v-model="form.contact"
          required
          placeholder="Enter contact number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="No. of Days:" label-for="input-3">
        <b-form-select
          id="input-4"
          v-model="form.days"
          :options="days"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="No. of Participants:" label-for="input-2">
        <b-form-input
          id="input-5"
          v-model="form.participants"
          required
          placeholder="Enter number of participants"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" style="margin-right: 30px">Submit</b-button>

      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </b-card>
  </div>  
    </div>
    
</template>

<script>
  import axios from "axios";
  export default {
    name: "join",
    data() {
      return {
        form: {
          email: '',
          name: '',
          contact: '',
          participants: '',
          days: null,
          checked: []
        },
        days: [{ text: 'Select One', value: null }, '1', '2', '3'],
        show: true
      }
    },
    methods: {
      // onSubmit(evt) {
      //   evt.preventDefault()
      //   alert(JSON.stringify(this.form))
      // },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.contact = ''
        this.form.days = null
        this.form.participants = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      addRecords(){
        let newRecord = {
          name: this.form.name,
          email: this.form.email,
          contact: this.form.contact,
          days: this.form.days,
          participants: this.form.participants,
        }
        axios.post('http://localhost:8085/booking',newRecord)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
</script>
