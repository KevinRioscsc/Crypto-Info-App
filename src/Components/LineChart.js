import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = []
  const coinTimestamp = []

  for(let i = 0; i < coinHistory?.data?.history?.length; i++){
      coinPrice.push(coinHistory.data.history[i].price)
      coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString())
  }
  
  const options =  {
    responsive: true,
    scales:{
      yAxes:[
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    plugins: {
      // Change options for ALL labels of THIS CHART
      datalabels: {
          color: 'black'
      }
  }
}
const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        color:  'rgba(255, 99, 132, 0.5)',
        datalabels: {
          color: 'red'
      }
      }
    ]
  }
  return (
    <div>
       <div className="chart-title">
         <h1 className='black'>{coinName} Price Chart</h1>
       </div>
       <div className="price-container">
          <h3 className='black'>{coinHistory?.data?.change}%</h3>
          <h3 className='black'>Current {coinName} Price: $ {currentPrice}</h3>
       </div>
       <div className="chart">
        <Line data={data} options={options}/>
       </div>
    </div>
  )}

export default LineChart;
