import { LineChart } from 'src/app/data-access/models/line-chart-data.model';

export const overviewWindSpeedLineChartData: LineChart = {
  data: {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [6, 11, 7, 6, 7.5, 8, 4, 5, 6.5, 6.7, 7.1, 7.5, 7.2, 6.3],
        borderWidth: 3,
        borderColor: '#377C76',
        tension: 0.5,
        pointRadius: 0,
        fill: false,
        borderDash: [5, 5],
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0,
        max: 12,
        title: { display: true, text: 'Speed m/s' },
        ticks: {
          stepSize: 2,
        },
        border: { display: true },
        grid: { drawOnChartArea: true, offset: true },
        beginAtZero: true,
      },
      x: {
        border: { display: false },
      },
    },
  },
};
