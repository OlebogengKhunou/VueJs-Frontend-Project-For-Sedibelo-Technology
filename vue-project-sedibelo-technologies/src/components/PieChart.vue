<template>
  <div class="pieHolder">
  <div class='pieChartHolder'>
  <canvas id='myPieChart' class="myPieChart"></canvas>
  </div>
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
          'rgb(255, 0, 0)',
          'rgb(54, 162, 235)',
          'rgb(74, 122, 77)',
          'rgb(255, 99, 132)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const myChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Pie Chart'
      }
    }
  },
    })

    myChart;
  }
}
</script>

<style>
.pieHolder{
  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;
}

  .pieChartHolder{
    width: 300px;
  }
</style>