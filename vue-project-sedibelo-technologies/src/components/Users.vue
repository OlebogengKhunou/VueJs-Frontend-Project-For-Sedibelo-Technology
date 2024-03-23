<template>
  <!--<p v-for="user in users" :key="users.indexOf(user)">{{user.name}}</p>-->
  <div class='container'>
    <table id="example" class="table table-hover display" style="width:100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Designation</th>
          <th>Department</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import usersData from './jsons/users.json'

import 'https://code.jquery.com/jquery-3.7.1.js'
import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js'
import 'https://cdn.datatables.net/2.0.3/js/dataTables.js'
import 'https://cdn.datatables.net/2.0.3/js/dataTables.bootstrap5.js'
import 'https://cdn.datatables.net/responsive/3.0.0/js/dataTables.responsive.js'
import 'https://cdn.datatables.net/responsive/3.0.0/js/responsive.bootstrap5.js'

export default {
  data() {
    return { users: usersData }
  },
  mounted() {

    let dataTable = new DataTable('#example', {
      responsive: true,
      "language": {
            "lengthMenu": ""
        },
      "order": [],   
      data: usersData,
      columns: [
        { data: 'name' },
        { data: 'surname' },
        { data: 'designation' },
        { data: 'department' }
      ]
    });

    dataTable;
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css');
@import url('https://cdn.datatables.net/2.0.3/css/dataTables.bootstrap5.css');
@import url('https://cdn.datatables.net/responsive/3.0.0/css/responsive.bootstrap5.css');

.col-12 {
    height: 470px; /* Set your desired fixed height here */
    overflow-y: auto; /* Enable vertical scrolling */
}
</style>