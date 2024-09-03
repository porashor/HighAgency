import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const Dog = ({color, title, value}) => {
  const res = 100 - value
  const pe = value + "%"
  const data = {
    labels: ["rest", title],
    datasets: [
      {
        label: "coding",
        backgroundColor: ["#aaa", color],
        data: [res,value]
      }
    ]
  }
  const options = {
    cutout: '70%', // Adjust the inner radius to make it look like a donut
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
      <div className='text-center py-1'>
        <div className='text-2xl -translate-y-[170px] font-bold'>{pe}</div>
        <div className='text-xl uppercase font-semibold'>{title}</div>
      </div>
    </div>
  )
}

export default Dog
