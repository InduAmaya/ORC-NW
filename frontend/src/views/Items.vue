<template>
  <div>
    <div class="btn">
      <b-button squared variant="dark" to="/admindashboard">Back</b-button>
      </div>
    
    <b-card no-body>
      <b-tabs pills card width="100%" content-class="mt-3" justified>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
          <h2>Current Details of Items</h2>
          <form class="form-inline">
            <input
              id="itemInput"
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            
            />
            
          </form>
        </nav>
        <!-- <div class="overflow-auto">
          <b-pagination v-model="currentPage"
              :total-rows="rowtable1"
              :per-page="perPage"
              aria-controls="my-table"></b-pagination> -->
        
        <b-tab title="CIS/LAB/01">
          <b-card-text>
            <center>
              <h3>CIS/LAB/01</h3>
            </center>
            <!-- <br /> -->
            <p>Number of rows : {{this.itemsLab1.length}}</p>
            <div class="table-responsive-lg">
              <table :per-page="perPage">
                <thead>
                  <tr>
                    <th>Item ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>contact</th>
                    <th>Days</th>
                    <th>participants</th>
                    
                  </tr>
                </thead>
                <tbody id="itemTable">
                  <tr v-for="(item, item_id) in itemsLab1" v-bind:key="item_id">
                    <td>{{item_id +1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.contact}}</td>
                    <td>{{item.days}}</td>
                    <td>{{item.participants}}</td>
                    
                    <td>
                      <b-button
                        :to="{name: 'UpdateItem', params: {id:item._id }}"
                        variant="success"
                      >Edit</b-button>
                      <b-button
                        type="submit"
                        variant="danger"
                        v-on:click="deleteRecord1(item._id)"
                      >Delete</b-button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-card-text>
        </b-tab>
        <!-- </div> -->
        
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Items",

  data() {
    return {
      itemsLab1: {},

    };
  },
  created() {
    this.fetchRecord1();
    
  },
  
  methods: {
    fetchRecord1() {
      axios
        .get("http://localhost:8085/booking")
        .then(response => {
          console.log(response.data);
          this.itemsLab1 = response.data;
          // return itemsLab1.length;
          // console.log(this.itemsLab1.length);
        })
        .catch(error => {
          console.log(error);
        });
    },
    
  }
};


</script>

<style socped>
table {
  font-family: "Open Sans", sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475c;
  margin: 5px 5px 5px 5px;
  
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475c;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7d82a8;
}

table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}

h5 {
  margin-top: 10px;
  margin-left: 15px;
}
</style>
