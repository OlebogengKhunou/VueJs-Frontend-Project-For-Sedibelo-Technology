<template>
  <!--<p v-for="user in users" :key="users.indexOf(user)">{{user.name}}</p>-->
  <div class='container'>
    <div class="dt-filter">
    <!-- <label for='myFilterOption'>Filter By Designation:</label> -->
    <select v-model="selectedDesignation" class="form-select" id='myFilterOption'>
      <option value="">All</option>
      <option v-for="designation in designations" :value="designation">{{ designation }}</option>
    </select>
  </div>
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

const allDesignations = [...new Set(usersData.map(user => user.designation))];

export default {
  data() {
    return { selectedDesignation: '', users: usersData, designations: allDesignations }
  },
  methods: {
    moveDiv() {
      const div1 = document.querySelector('.dt-filter'); // Get the element to be moved
      const div2 = document.querySelector('.me-auto'); // Get the target parent element
      const div3 = document.querySelector('.dt-length');
      div2.replaceChild(div1, div3); // Append div1 to div2
      console.log(div2)
      
    }},
  mounted() {

    let dataTable = new DataTable('#example', {
      responsive: true,
      "language": {
        "lengthMenu": ""
      },
      "order": [],
      data: this.users,
      columns: [
        { data: 'name' },
        { data: 'surname' },
        { data: 'designation' },
        { data: 'department' }
      ]
    });

    $('#myFilterOption').on('change', function () {
      let selectedDesignation = $(this).val();
      self.selectedDesignation = selectedDesignation;

      if (selectedDesignation === "") {
        dataTable.column(2).search('').draw();
      } else {
        dataTable.column(2).search('^' + selectedDesignation + '$', true, false).draw();
      }
    })

    this.moveDiv()
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css');
@import url('https://cdn.datatables.net/2.0.3/css/dataTables.bootstrap5.css');
@import url('https://cdn.datatables.net/responsive/3.0.0/css/responsive.bootstrap5.css');

.dt-filter{
  display:flex;
  justify-content: center;
}

.col-12 {
  height: 470px;
  overflow-y: auto;
}

.form-select{
  width: 200px;
}

 /* Mobile styles */
 @media only screen and (max-width: 600px) {
  .col-12 {
  height: 240px;
  overflow-y: auto;
}
.container{
  font-size: 12px;
}
.form-select{
  font-size: 12px;
}
.page-link{
  font-size: 12px;
}
  }

  /* Tablet styles */
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    .col-12 {
  height: 480px;
  overflow-y: auto;
}
  }

    /* desktop styles */
    @media only screen and (min-width: 1025px) {
    .col-12 {
  height: 410px;
  overflow-y: auto;
}
  }

</style>
