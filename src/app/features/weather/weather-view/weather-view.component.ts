import { Component, OnInit } from '@angular/core';
import { FeatureData } from 'src/app/data-access/models/feature-data.model';
import { weatherData } from '../../../data-access/mock-data/weather-data';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.scss'],
})
export class WeatherViewComponent implements OnInit {
  data: FeatureData[] = weatherData;

  constructor() {}

  ngOnInit(): void {}
}
