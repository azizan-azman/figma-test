import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { metarData } from 'src/app/data-access/mock-data/metar-data';
import { FeatureData } from 'src/app/data-access/models/feature-data.model';
import { LineChart } from 'src/app/data-access/models/line-chart-data.model';
import { overviewWavesData } from '../../../data-access/mock-data/overview-waves-data';
import { overviewWavesLineChartData } from '../../../data-access/mock-data/overview-waves-line-chart-data';
import { overviewWeatherData } from '../../../data-access/mock-data/overview-weather-data';
import { overviewWindData } from '../../../data-access/mock-data/overview-wind-data';
import { overviewWindDirectionLineChartData } from '../../../data-access/mock-data/overview-wind-direction-line-chart-data';
import { overviewWindSpeedLineChartData } from '../../../data-access/mock-data/overview-wind-speed-line-chart-data';
Chart.register(...registerables);

@Component({
  selector: 'app-overview-view',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.scss'],
})
export class OverviewViewComponent implements OnInit {
  overviewWindDirectionLineChart: LineChart =
    overviewWindDirectionLineChartData;
  overviewWindSpeedLineChart: LineChart = overviewWindSpeedLineChartData;
  overviewWavesLineChart: LineChart = overviewWavesLineChartData;
  windData: FeatureData[] = overviewWindData;
  weatherData: FeatureData[] = overviewWeatherData;
  wavesData: FeatureData[] = overviewWavesData;
  metarText: string = metarData;

  constructor() {}

  ngOnInit(): void {
    this.renderOverviewWindSpeedChart();
    this.renderOverviewWindDirectionChart();
    this.renderOverviewWavesChart();
  }

  renderOverviewWindSpeedChart() {
    const overviewWindSpeedLineChart = new Chart('overviewWindSpeedLineChart', {
      type: 'line',
      data: this.overviewWindSpeedLineChart.data,

      options: {
        responsive: this.overviewWindSpeedLineChart.options.responsive,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: this.overviewWindSpeedLineChart.options.scales.y.min,
            max: this.overviewWindSpeedLineChart.options.scales.y.max,
            title: {
              display: true,
              text: this.overviewWindSpeedLineChart.options.scales.y.title.text,
            },
            ticks: {
              stepSize:
                this.overviewWindSpeedLineChart.options.scales.y.ticks.stepSize,
            },
            grid: {
              drawOnChartArea: true,
              offset:
                this.overviewWindSpeedLineChart.options.scales.y.grid.offset,
            },
            beginAtZero: true,
          },
          x: {
            border: {
              display:
                this.overviewWindSpeedLineChart.options.scales.x.border.display,
            },
          },
        },
      },
    });
  }

  renderOverviewWindDirectionChart() {
    const overviewWindDirectionLineChart = new Chart(
      'overviewWindDirectionLineChart',
      {
        type: 'line',
        data: this.overviewWindDirectionLineChart.data,

        options: {
          responsive: this.overviewWindDirectionLineChart.options.responsive,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              min: this.overviewWindDirectionLineChart.options.scales.y.min,
              max: this.overviewWindDirectionLineChart.options.scales.y.max,
              title: {
                display: true,
                text: this.overviewWindDirectionLineChart.options.scales.y.title
                  .text,
              },
              ticks: {
                stepSize:
                  this.overviewWindDirectionLineChart.options.scales.y.ticks
                    .stepSize,
              },
              grid: {
                drawOnChartArea: true,
                offset:
                  this.overviewWindDirectionLineChart.options.scales.y.grid
                    .offset,
              },
              beginAtZero: true,
            },
            x: {
              border: {
                display:
                  this.overviewWindDirectionLineChart.options.scales.x.border
                    .display,
              },
            },
          },
        },
      }
    );
  }

  renderOverviewWavesChart() {
    const overviewWavesLineChart = new Chart('overviewWavesLineChart', {
      type: 'line',
      data: this.overviewWavesLineChart.data,

      options: {
        responsive: this.overviewWavesLineChart.options.responsive,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: this.overviewWavesLineChart.options.scales.y.min,
            max: this.overviewWavesLineChart.options.scales.y.max,
            title: {
              display: true,
              text: this.overviewWavesLineChart.options.scales.y.title.text,
            },
            ticks: {
              stepSize:
                this.overviewWavesLineChart.options.scales.y.ticks.stepSize,
            },
            grid: {
              drawOnChartArea: true,
              offset: this.overviewWavesLineChart.options.scales.y.grid.offset,
            },
            beginAtZero: true,
          },
          x: {
            border: {
              display:
                this.overviewWavesLineChart.options.scales.x.border.display,
            },
          },
        },
      },
    });
  }
}
