import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindViewComponent } from './wind-view/wind-view.component';
import { RouterModule, Routes } from '@angular/router';
import { LineChartModule } from 'src/app/ui/reusable/chart/line-chart/line-chart.module';
import { WidgetWrapperModule } from 'src/app/ui/reusable/widget-wrapper/widget-wrapper.module';
import { CardBasicModule } from 'src/app/ui/reusable/card-basic/card-basic.module';
import { IconModule } from 'src/app/ui/reusable/icon/icon.module';
const windRoutes: Routes = [{ path: '', component: WindViewComponent }];

@NgModule({
  declarations: [WindViewComponent],
  imports: [
    CommonModule,
    WidgetWrapperModule,
    CardBasicModule,
    IconModule,
    RouterModule.forChild(windRoutes),
  ],
  exports: [WindViewComponent],
})
export class WindModule {}
