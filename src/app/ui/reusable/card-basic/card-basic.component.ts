import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/data-access/models/card-data.model';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss'],
})
export class CardBasicComponent implements OnInit {
  @Input() cardData!: CardData;

  ngOnInit(): void {
    // this.cardData = {
    //   cardHeader: [
    //     { cardHeaderTitle: 'Clouds layer 1', cardHeaderWidth: 'w-full' },
    //     { cardHeaderTitle: 'Height layer 1', cardHeaderWidth: 'w-full' },
    //   ],
    //   cardContent: [
    //     { cardContentText: 'OVC', cardContentWidth: 'w-full' },
    //     { cardContentText: '188 ft', cardContentWidth: 'w-full' },
    //   ],
    // };
  }
}
