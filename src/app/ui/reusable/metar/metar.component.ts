import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss'],
})
export class MetarComponent {
  @Input() metarText!: string;
}
