<template>
<canvas id='myPieChart' width='400' height='400'></canvas>
</template>

<script >
import pieChartData from './jsons/pieChart.json'
import Chart from 'chart.js/auto';

export default{
  data(){
     return { charts: pieChartData }
  },
  mounted(){

    let numInstalls = [];
    let years = [];

    for(let i = 0; i < pieChartData.length; i++ ){
      numInstalls.push(pieChartData[i].numInstalls)
      years.push(pieChartData[i].year)
    }

   const ctx = document.getElementById('myPieChart')

   const data = {
  labels: years,
  datasets: [{
    label: 'My First Dataset',
    data: numInstalls,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 99, 132)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

   const myChart = new Chart(ctx,{
    type: 'doughnut',
    data: data,
   })

   myChart;
  }
}
</script>