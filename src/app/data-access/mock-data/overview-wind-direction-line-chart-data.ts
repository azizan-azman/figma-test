import { LineChart } from 'src/app/data-access/models/line-chart-data.model';

export const overviewWindDirectionLineChartData: LineChart = {
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
        data: [152, 150, 250, 200, 160, 185, 150, 160],
        borderWidth: 3,
        borderColor: '#4099DA',
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
        max: 350,
        title: { display: true, text: 'Direction' },
        ticks: {
          stepSize: 50,
        },
        grid: { drawOnChartArea: true, offset: false },
        border: { display: true },
        beginAtZero: true,
      },
      x: { border: { display: true } },
    },
  },
};
