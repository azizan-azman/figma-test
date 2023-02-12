import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  currentDateTime: any = '';

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.currentDateTime = this.datePipe.transform(
      new Date(),
      'dd-MMM-yyyy h:mm:ss'
    );
  }
}
