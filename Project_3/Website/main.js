(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    
    const ctx = document.getElementById('myChart')
    
    const myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Eastern and Southern Africa',
          'Western and Central Africa',
          'Arab World',
          'Australia',
          'Central Europe and the Baltics',
          'Eastern Europe and Central Asia',
          'European Union',
          'Latin America and Carribean',
          'Middle East and North Africa',
          'North America',
          'South Asia',
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12034
          ],
          lineTension: 0,
          backgroundColor: 'rgba(00,255,00,0.1)',
          borderColor: '#00FF00',
          borderWidth: 2,
          pointBackgroundColor: '#00FF00'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })
  })()