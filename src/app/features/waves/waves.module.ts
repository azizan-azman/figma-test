import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesViewComponent } from './waves-view/waves-view.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetWrapperModule } from 'src/app/ui/reusable/widget-wrapper/widget-wrapper.module';
import { CardBasicModule } from 'src/app/ui/reusable/card-basic/card-basic.module';
import { LineChartModule } from 'src/app/ui/reusable/chart/line-chart/line-chart.module';

const wavesRoutes: Routes = [{ path: '', component: WavesViewComponent }];

@NgModule({
  declarations: [WavesViewComponent],
  imports: [
    CommonModule,
    WidgetWrapperModule,
    CardBasicModule,
    RouterModule.forChild(wavesRoutes),
  ],
  exports: [WavesViewComponent],
})
export class WavesModule {}
