<template>
  <div class='pieChartHolder'>
  <canvas id='myPieChart' class="myPieChart"></canvas>
  </div>
</template>

<script>
import pieChartData from './jsons/pieChart.json'
import Chart from 'chart.js/auto';

export default {
  data() {
    return { charts: pieChartData }
  },
  mounted() {

    let numInstalls = [];
    let years = [];

    for (let i = 0; i < pieChartData.length; i++) {
      numInstalls.push(pieChartData[i].numInstalls)
      years.push(pieChartData[i].year)
    }

    const ctx = document.getElementById('myPieChart')

    const data = {
      labels: years,
      datasets: [{
        label: 'NumInstalls',
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

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      responsive: true,
    })

    myChart;
  }
}
</script>

<style>
/* Mobile styling */
@media only screen and (max-width: 600px) {
  .myPieChart {
    position: relative;
    top: 20px;
    padding: 30px;
  }
}

/* tablet styling */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .myPieChart {
    position: relative;
    bottom: 70px;
    padding: 130px;
  }
}

@media only screen and (min-width: 1025px) {
   /* .myPieChart {
    padding: 0 400px;
    padding-bottom: 800px;
    padding-top: 30px;
  } */
  .pieChartHolder{
    width: 400px;
  }
}
</style>