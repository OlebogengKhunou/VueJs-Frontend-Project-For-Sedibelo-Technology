<template>
<p v-for="user in users" :key="users.indexOf(user)">{{user.name}}</p>
<table id="myTable" width='400' height='400'>
</table>
</template>

<script >
import usersData from './jsons/users.json'
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

console.log(usersData)
export default{
  data(){
     return { users: usersData }
  },
  mounted(){
 
let dataTable = new DataTable('#myTable', {
  responsive: true,
  data: usersData,
   columns: [
        { data: 'name' },
        { data: 'surname' },
        { data: 'designation' },
        { data: 'department' }
    ]
    // config options...
});

dataTable;
  }
}
</script>