import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinkComponent } from './navigation-link.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [NavigationLinkComponent],
  imports: [CommonModule, RouterModule, IconModule],
  exports: [NavigationLinkComponent],
})
export class NavigationLinkModule {}
