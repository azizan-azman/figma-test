import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DidYouKnowComponent } from './did-you-know.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [DidYouKnowComponent],
  imports: [CommonModule, IconModule],
  exports: [DidYouKnowComponent],
})
export class DidYouKnowModule {}
