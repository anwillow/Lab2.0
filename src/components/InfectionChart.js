import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InfectionChart = () => {
  const [chartData, setChartData] = useState({
    labels: Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Infections Over Time',
        data: Array(10).fill(1000),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = [...prevData.datasets[0].data];
        const lastValue = newData[newData.length - 1];
        const change = Math.floor(Math.random() * 100) - 50; 

        const newValue = Math.max(0, lastValue + change);
        newData.push(newValue);
        if (newData.length > 10) newData.shift();

        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};

export default InfectionChart;