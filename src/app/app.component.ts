import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-shell-default>
    <router-outlet></router-outlet>
  </app-shell-default> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'figma-test-new';
}
