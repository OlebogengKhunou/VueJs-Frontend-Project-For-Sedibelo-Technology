<template>
  <canvas id='myBarGraph' class="myBarGraph"></canvas> 
</template>

<script>
import barGraphData from './jsons/barGraph.json'
import Chart from 'chart.js/auto';

export default {
  data() {
    return { bars: barGraphData }
  },
  mounted() {
    // console.log('component mounted')

    let numInstalls = [];
    let months = [];
    for (let i = 0; i < barGraphData.length; i++) {
      numInstalls.push(barGraphData[i].numInstalls)
      months.push(barGraphData[i].month)
    }

    const ctx = document.getElementById('myBarGraph')


    const data = {
      labels: months,
      datasets: [{
        label: 'Statistics',
        data: numInstalls,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(255, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
          'rgba(255, 0, 0)'
        ],
        borderWidth: 1
      }]
    };

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      responsive: true,
      options: {
        plugins: {
      legend: {
        title: {
          display: true,
          text: 'Bar Graph',
        }
      }
    },
        scales: {
          x: {
            title: {
              display: true,
              text: 'month' // X-axis label title
            }
          },
          y: {
            title: {
              display: true,
              text: 'numInstalls' // Y-axis label title
            }
          }
        }
      },
    });

    myChart;
  }
}
</script>

<style>
/* mobile styling */
@media only screen and (max-width: 600px) {
  .myBarGraph {
    position: relative;
    top: 60px;
    padding: 0 20px;
  }
}

/* tablet and small desktop styling */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .myBarGraph {
    height: 100%;
    padding: 0 20px;
    padding-bottom: 0px;
    position: relative;
    top: 60px;
    font-size: 20px;
  }
}

/* desktop styling */
@media only screen and (min-width: 1025px) {
  .myBarGraph {
    padding: 0 210px;
    padding-bottom: 210px;
    padding-top: 30px;
  }
}
</style>
