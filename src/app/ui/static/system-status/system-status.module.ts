import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemStatusComponent } from './system-status.component';
import { IconModule } from '../../customizable/icon/icon.module';

@NgModule({
  declarations: [SystemStatusComponent],
  imports: [CommonModule, IconModule],
  exports: [SystemStatusComponent],
})
export class SystemStatusModule {}
