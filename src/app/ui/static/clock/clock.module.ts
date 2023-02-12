import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ClockComponent } from './clock.component';
import { IconModule } from '../../reusable/icon/icon.module';

@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule, IconModule],
  exports: [ClockComponent],
  providers: [DatePipe],
})
export class ClockModule {}
