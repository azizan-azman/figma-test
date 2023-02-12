import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { ShellDefaultModule } from './layouts/shell-default/shell-default.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShellDefaultModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
