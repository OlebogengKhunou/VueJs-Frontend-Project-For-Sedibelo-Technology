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
import ChartDataLabels from 'chartjs-plugin-datalabels';

//Chart.register(ChartDataLabels); this set labels on all chart in this project
Chart.defaults.set('plugins.datalabels', {
  color: '#000000'
});

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
      responsive: true,
      plugins: [ChartDataLabels],
      options: {
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
.pieHolder {
  display: flex;
  justify-content: center;
  position: relative;
  top: 40px;
}

/* mobile styling */
@media only screen and (max-width: 767px) {
  .pieChartHolder {
  width: 300px;
  height: 520px;
}
}

/* tablet and small desktop styling */
@media only screen and (min-width: 768px)  {
  .pieChartHolder {
  width: 425px;
  height: 702px;
}
}

/* tablet and small desktop styling */
@media only screen and (min-width: 1024px)  {
  .pieChartHolder {
  width: 450px;
}
}

</style>