import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewViewComponent } from './overview-view/overview-view.component';
import { RouterModule, Routes } from '@angular/router';
import { CardBasicModule } from 'src/app/ui/customizable/card-basic/card-basic.module';
import { WidgetWrapperModule } from 'src/app/ui/customizable/widget-wrapper/widget-wrapper.module';
import { IconModule } from 'src/app/ui/customizable/icon/icon.module';
import { MetarModule } from 'src/app/ui/customizable/metar/metar.module';

const overviewRoutes: Routes = [{ path: '', component: OverviewViewComponent }];

@NgModule({
  declarations: [OverviewViewComponent],
  imports: [
    CommonModule,
    CardBasicModule,
    WidgetWrapperModule,
    MetarModule,
    IconModule,
    RouterModule.forChild(overviewRoutes),
  ],
})
export class OverviewModule {}
