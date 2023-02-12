import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetarComponent } from './metar.component';
import { WidgetWrapperModule } from '../widget-wrapper/widget-wrapper.module';

@NgModule({
  declarations: [MetarComponent],
  imports: [CommonModule, WidgetWrapperModule],
  exports: [MetarComponent],
})
export class MetarModule {}
