import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAvatarComponent } from './user-avatar.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [UserAvatarComponent],
  imports: [CommonModule, IconModule],
  exports: [UserAvatarComponent],
})
export class UserAvatarModule {}
