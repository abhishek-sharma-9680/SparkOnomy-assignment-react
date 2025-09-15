import './IncomeTrendChart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

export default function IncomeTrendChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'bar',
        label: 'income',
        data: [4000, 5000, 7000, 3000, 6000, 0],
        backgroundColor: 'rgba(168, 85, 247, 0.7)', // purple-500
        borderRadius: 6,
        yAxisID: 'y',
      },
      {
        type: 'line',
        label: 'momGrowth',
        data: [20, 50, 50, -60, 70, -100],
        borderColor: '#7f1d1d', // deep red
        backgroundColor: '#7f1d1d',
        tension: 0.4,
        yAxisID: 'y1',
        fill: false,
        pointBorderColor: '#7f1d1d',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: 'linear',
        position: 'left',
        min: 0,
        max: 8000,
        ticks: {
          callback: (value) => `$${value / 1000}k`,
        },
        grid: {
          drawOnChartArea: true,
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        min: -100,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="income-chart-card">
      <h3 className="title">Income Trend</h3>
      <p className="subtitle">Your monthly income and growth for the last 6 months.</p>
      <Chart data={data} options={options} />
    </div>
  );
}
