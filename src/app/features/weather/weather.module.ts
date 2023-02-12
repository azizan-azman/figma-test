import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetWrapperModule } from 'src/app/ui/customizable/widget-wrapper/widget-wrapper.module';
import { CardBasicModule } from 'src/app/ui/customizable/card-basic/card-basic.module';

const weatherRoutes: Routes = [{ path: '', component: WeatherViewComponent }];

@NgModule({
  declarations: [WeatherViewComponent],
  imports: [
    CommonModule,
    WidgetWrapperModule,
    CardBasicModule,
    RouterModule.forChild(weatherRoutes),
  ],
  exports: [WeatherViewComponent],
})
export class WeatherModule {}
