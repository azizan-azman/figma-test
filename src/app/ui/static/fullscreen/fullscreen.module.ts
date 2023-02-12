import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen.component';
import { IconModule } from '../../customizable/icon/icon.module';

@NgModule({
  declarations: [FullscreenComponent],
  imports: [CommonModule, IconModule],
  exports: [FullscreenComponent],
})
export class FullscreenModule {}
