import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellDefaultComponent } from './shell-default.component';
import { RouterModule } from '@angular/router';
import { IconModule } from 'src/app/ui/reusable/icon/icon.module';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NavigationLinkModule } from 'src/app/ui/reusable/navigation-link/navigation-link.module';
import { DidYouKnowModule } from 'src/app/ui/reusable/did-you-know/did-you-know.module';
import { UserAvatarModule } from 'src/app/ui/reusable/user-avatar/user-avatar.module';
import { SelectStationModule } from 'src/app/ui/static/select-station/select-station.module';
import { ClockModule } from 'src/app/ui/static/clock/clock.module';
import { NotificationModule } from 'src/app/ui/static/notification/notification.module';
import { FullscreenModule } from 'src/app/ui/static/fullscreen/fullscreen.module';
import { SystemStatusModule } from 'src/app/ui/static/system-status/system-status.module';

@NgModule({
  declarations: [ShellDefaultComponent],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    NavigationLinkModule,
    DidYouKnowModule,
    ClockModule,
    NotificationModule,
    FullscreenModule,
    SystemStatusModule,
    UserAvatarModule,
    SelectStationModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  exports: [ShellDefaultComponent],
})
export class ShellDefaultModule {}
