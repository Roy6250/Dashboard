import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import BarGraph from '../components/BarGraph';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };


  const barchartData = [
    { label: 'Category A', value: 10 },
    { label: 'Category B', value: 20 },
    { label: 'Category A', value: 15 },
    // Add more data as needed
  ];
  const [filter, setFilter] = useState<string>(''); // State for filter
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value); // Update filter state based on user selection
  };


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Line data={data} options={options} />
        {/* Filter dropdown */}
      <select value={filter} onChange={handleChange}>
        <option value="">All</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        {/* Add more options based on your data */}
      </select>
        <BarGraph data={barchartData} filter={filter}/>
      </div>
    </div>
  );
};

export default Dashboard;
