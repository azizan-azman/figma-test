import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent {
  @Input() widgetWidth!: string;
  @Input() widgetHeight!: string;
  @Input() widgetPadding!: string;
  @Input() widgetBorder!: string;
  @Input() widgetBorderRadius!: string;
  @Input() widgetTitle!: string;
}
