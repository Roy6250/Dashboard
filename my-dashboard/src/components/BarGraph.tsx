import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend , BarElement} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

const BarGraph: React.FC = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

     const data = {
      labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => Math.floor(Math.random() * 100) + 1),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => Math.floor(Math.random() * 100) + 1),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    
   const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">BarGraph</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
         <Bar options={options} data={data} />;

      </div>
    </div>
  );
};

export default BarGraph;
