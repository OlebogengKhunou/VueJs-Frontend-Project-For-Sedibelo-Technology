<script setup>
import PieChart from './components/PieChart.vue'
import BarGraph from './components/BarGraph.vue'
import Users from './components/Users.vue'
</script>

<template>
    <div>
    <router-link to="/">PieChart</router-link> | 
    <router-link to="/bargraph">BarGraph</router-link> | 
    <router-link to="/users">Users</router-link>
    </div>
    <router-view />
</template>

<style>
.router-link-exact-active{
    background-color: red;
}
</style>