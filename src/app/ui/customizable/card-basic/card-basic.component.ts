import { Component, Input } from '@angular/core';
import { CardData } from 'src/app/data-access/models/card-data.model';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss'],
})
export class CardBasicComponent {
  // This customizable card component accepts a cardData input
  @Input() cardData!: CardData;
}
