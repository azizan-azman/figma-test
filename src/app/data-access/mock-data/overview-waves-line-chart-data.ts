import { LineChart } from 'src/app/data-access/models/line-chart-data.model';

export const overviewWavesLineChartData: LineChart = {
  data: {
    labels: [
      '',
      '11:00:00',
      '11:30:00',
      '12:00:00',
      '12:30:00',
      '13:00:00',
      '13:30:00',
      '',
    ],
    datasets: [
      {
        data: [
          0.7205, 0.4315, 0.7465, 0.3237, 0.9063, 0.7826, 0.6798, 0.2587,
          0.5819, 0.3948, 0.5511, 0.9589, 0.2918, 0.8258, 0.8716, 0.978, 0.6605,
          0.8749, 0.5807, 0.9475, 0.6103, 0.6461, 0.4371, 0.8489, 0.6382,
        ],
        borderColor: '#4099DA',
        borderWidth: 3,
        tension: 0.5,
        pointRadius: 0,
        fill: false,
        borderDash: [5, 5],
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        min: 0,
        max: 1.4,
        title: { display: true, text: 'Hs (m)' },
        ticks: {
          stepSize: 0.2,
        },
        beginAtZero: true,
        border: { display: true },
        grid: {
          drawOnChartArea: true,
          offset: false,
        },
      },
      x: {
        border: { display: true },
      },
    },
  },
};
