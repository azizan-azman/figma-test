import { Component, OnInit } from '@angular/core';
import { FeatureData } from 'src/app/data-access/models/feature-data.model';
import { LineChart } from 'src/app/data-access/models/line-chart-data.model';
import { wavesData } from '../../../data-access/mock-data/waves-data';
import { wavesLineChartData } from '../../../data-access/mock-data/waves-line-chart-data';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-waves-view',
  templateUrl: './waves-view.component.html',
  styleUrls: ['./waves-view.component.scss'],
})
export class WavesViewComponent implements OnInit {
  data: FeatureData[] = wavesData;
  lineChart: LineChart = wavesLineChartData;

  constructor() {}

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
}
