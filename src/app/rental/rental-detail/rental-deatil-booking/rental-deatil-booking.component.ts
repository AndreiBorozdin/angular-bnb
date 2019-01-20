import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rental-deatil-booking',
  templateUrl: './rental-deatil-booking.component.html',
  styleUrls: ['./rental-deatil-booking.component.scss']
})
export class RentalDeatilBookingComponent implements OnInit {

  @Input() price: number
  constructor() { }

  ngOnInit() {
  }
  daterange: any = {};


   options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
    opens: 'left',
    drops: 'down'
  };

  selectedDate(value: any, datepicker?: any) {
    console.log(value);

      datepicker.start = value.start;
    datepicker.end = value.end;

    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
}
