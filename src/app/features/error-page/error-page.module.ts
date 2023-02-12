import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { IconModule } from 'src/app/ui/customizable/icon/icon.module';

const errorPageRoutes: Routes = [{ path: '', component: ErrorPageComponent }];

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, IconModule, RouterModule.forChild(errorPageRoutes)],
  exports: [ErrorPageComponent],
})
export class ErrorPageModule {}
