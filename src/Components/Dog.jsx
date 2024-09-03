import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const Dog = ({color, title, value, resV, per}) => {
  console.log(color)
  const data = {
    labels: ["rest", title],
    datasets: [
      {
        label: "coding",
        backgroundColor: ["#aaa", color],
        data: [resV,value]
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
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <strong>{per}</strong>
        <div>{title}</div>
      </div>
    </div>
  )
}

export default Dog
