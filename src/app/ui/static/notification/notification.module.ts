import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { IconModule } from '../../reusable/icon/icon.module';

@NgModule({
  declarations: [NotificationComponent],
  imports: [CommonModule, IconModule],
  exports: [NotificationComponent],
})
export class NotificationModule {}
