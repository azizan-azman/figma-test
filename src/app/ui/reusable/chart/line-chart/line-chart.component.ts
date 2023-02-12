import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { LineChart } from 'src/app/data-access/models/line-chart-data.model';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() lineChart!: LineChart;
  @Input() id!: string;

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const lineChart = new Chart('wavesLineChart', {
      type: 'line',
      data: this.lineChart.data,

      options: {
        responsive: this.lineChart.options.responsive,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: this.lineChart.options.scales.y.min,
            max: this.lineChart.options.scales.y.max,
            title: {
              display: true,
              text: this.lineChart.options.scales.y.title.text,
            },
            ticks: {
              stepSize: this.lineChart.options.scales.y.ticks.stepSize,
            },
            grid: {
              drawOnChartArea: true,
              offset: this.lineChart.options.scales.y.grid.offset,
            },
            beginAtZero: true,
          },
          x: {
            border: { display: this.lineChart.options.scales.x.border.display },
          },
        },
      },
    });
  }

  renderChart2() {
    const lineChart2 = new Chart('linechart2', {
      type: 'line',

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
            borderWidth: 1,
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
            max: 350,
            title: { display: true, text: 'Direction' },
            ticks: {
              stepSize: 50,
            },
            beginAtZero: true,
          },
        },
      },
    });
  }

  renderChart1() {
    const lineChart1 = new Chart('linechart1', {
      type: 'line',

      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            data: [6, 11, 7, 6, 7.5, 8, 4, 5, 6.5, 6.7, 7.1, 7.5, 7.2, 6.3],
            borderWidth: 1,
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
            grid: { drawOnChartArea: true, offset: true },
            beginAtZero: true,
          },
          x: {
            border: { display: false },
          },
        },
      },
    });
  }

  renderChart3() {
    const lineChart3 = new Chart('linechart3', {
      type: 'line',

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
              0.5819, 0.3948, 0.5511, 0.9589, 0.2918, 0.8258, 0.8716, 0.978,
              0.6605, 0.8749, 0.5807, 0.9475, 0.6103, 0.6461, 0.4371, 0.8489,
              0.6382,
            ],
            borderWidth: 1,
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
            max: 1.4,
            title: { display: true, text: 'Hs (m)' },
            ticks: {
              stepSize: 0.2,
            },
            beginAtZero: true,
          },
        },
      },
    });
  }
}
