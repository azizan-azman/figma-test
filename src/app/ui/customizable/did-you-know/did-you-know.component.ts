import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-did-you-know',
  templateUrl: './did-you-know.component.html',
  styleUrls: ['./did-you-know.component.scss'],
})
export class DidYouKnowComponent {
  @Input() infoText!: string;
  @Input() isSidebarCollapse!: boolean;
}
