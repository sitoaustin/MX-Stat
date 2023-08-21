'use client';

import React from 'react';
import Chart from 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';

export default function BarChart() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
      <Line data={data} />
    </div>
  );
}
