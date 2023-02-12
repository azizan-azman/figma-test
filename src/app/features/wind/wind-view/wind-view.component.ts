import { Component, OnInit } from '@angular/core';
import { LineChart } from 'src/app/data-access/models/line-chart-data.model';
import { windDirectionLineChartData } from '../../../data-access/mock-data/wind-direction-line-chart-data';
import { windSpeedLineChartData } from '../../../data-access/mock-data/wind-speed-line-chart-data';
import { Chart, registerables } from 'node_modules/chart.js';
import { FeatureData } from 'src/app/data-access/models/feature-data.model';
import { windData } from '../../../data-access/mock-data/wind-data';
Chart.register(...registerables);

@Component({
  selector: 'app-wind-view',
  templateUrl: './wind-view.component.html',
  styleUrls: ['./wind-view.component.scss'],
})
export class WindViewComponent implements OnInit {
  windDirectionLineChart: LineChart = windDirectionLineChartData;
  windSpeedLineChart: LineChart = windSpeedLineChartData;
  data: FeatureData[] = windData;

  constructor() {}

  ngOnInit(): void {
    this.renderWindSpeedChart();
    this.renderWindDirectionChart();
  }

  renderWindSpeedChart() {
    const windSpeedLineChart = new Chart('windSpeedLineChart', {
      type: 'line',
      data: this.windSpeedLineChart.data,

      options: {
        responsive: this.windSpeedLineChart.options.responsive,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: this.windSpeedLineChart.options.scales.y.min,
            max: this.windSpeedLineChart.options.scales.y.max,
            title: {
              display: true,
              text: this.windSpeedLineChart.options.scales.y.title.text,
            },
            ticks: {
              stepSize: this.windSpeedLineChart.options.scales.y.ticks.stepSize,
            },
            grid: {
              drawOnChartArea: true,
              offset: this.windSpeedLineChart.options.scales.y.grid.offset,
            },
            beginAtZero: true,
          },
          x: {
            border: {
              display: this.windSpeedLineChart.options.scales.x.border.display,
            },
          },
        },
      },
    });
  }

  renderWindDirectionChart() {
    const windDirectionLineChart = new Chart('windDirectionLineChart', {
      type: 'line',
      data: this.windDirectionLineChart.data,

      options: {
        responsive: this.windDirectionLineChart.options.responsive,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: this.windDirectionLineChart.options.scales.y.min,
            max: this.windDirectionLineChart.options.scales.y.max,
            title: {
              display: true,
              text: this.windDirectionLineChart.options.scales.y.title.text,
            },
            ticks: {
              stepSize:
                this.windDirectionLineChart.options.scales.y.ticks.stepSize,
            },
            grid: {
              drawOnChartArea: true,
              offset: this.windDirectionLineChart.options.scales.y.grid.offset,
            },
            beginAtZero: true,
          },
          x: {
            border: {
              display:
                this.windDirectionLineChart.options.scales.x.border.display,
            },
          },
        },
      },
    });
  }
}
