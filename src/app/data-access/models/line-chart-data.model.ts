export interface LineChart {
  data: LineChartData;
  options: LineChartOptions;
}

export interface LineChartData {
  labels: string[];
  datasets: LineChartDataSet[];
}

export interface LineChartDataSet {
  data: number[];
  borderColor: string;
  borderWidth: number;
  tension: number;
  pointRadius: number;
  fill: boolean;
  borderDash: number[];
}

export interface LineChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: LineChartPlugins;
  scales: LineChartScales;
}

export interface LineChartPlugins {
  legend: LineChartLegend;
}

export interface LineChartLegend {
  display: boolean;
}

export interface LineChartScales {
  y: LineChartScaleGlobal;
  x: { border: { display: boolean } };
}

export interface LineChartScaleGlobal {
  min: number;
  max: number;
  title: LineChartScaleTitle;
  ticks: LineChartScaleTicks;
  grid: LineChartScaleGrid;
  border: LineChartScaleBorder;
  beginAtZero: boolean;
}

export interface LineChartScaleTitle {
  display: boolean;
  text: string;
}
export interface LineChartScaleTicks {
  stepSize: number;
}

export interface LineChartScaleGrid {
  drawOnChartArea: boolean;
  offset: boolean;
}

export interface LineChartScaleBorder {
  display: boolean;
}
