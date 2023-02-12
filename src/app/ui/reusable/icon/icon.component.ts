import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconClass!: string;
  @Input() iconID!: string;

  constructor() {}

  ngOnInit(): void {}
}
