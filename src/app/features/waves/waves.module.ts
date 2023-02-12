import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WavesViewComponent } from './waves-view/waves-view.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetWrapperModule } from 'src/app/ui/customizable/widget-wrapper/widget-wrapper.module';
import { CardBasicModule } from 'src/app/ui/customizable/card-basic/card-basic.module';

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
