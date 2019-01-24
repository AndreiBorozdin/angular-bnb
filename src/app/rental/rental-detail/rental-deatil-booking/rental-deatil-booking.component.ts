import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Booking} from "../../../booking/shared/booking.model";
import {HelperService} from "../../../common/service/helper.service";
import * as moment from 'moment';
import {Rental} from "../../shared/rental.model";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BookingService} from "../../../booking/shared/booking.service";
import {DaterangePickerComponent} from "ng2-daterangepicker";



@Component({
  selector: 'app-rental-deatil-booking',
  templateUrl: './rental-deatil-booking.component.html',
  styleUrls: ['./rental-deatil-booking.component.scss']
})
export class RentalDeatilBookingComponent implements OnInit {

  @Input() rental: Rental
  @ViewChild(DaterangePickerComponent) private picker: DaterangePickerComponent
  newBooking: Booking;
  modalRef: any;
  errors: any[] = [];
  daterange: any = {};
  bookedOutDates:any[] = [];
  options: any = {
    locale: { format: Booking.BOOKING_FORMAT },
    minYear: 2018,
    maxYear: parseInt(moment().format('YYYY'),10),
    alwaysShowCalendars: false,
    opens: 'left',
    autoUpdateInput: false,
    isInvalidDate: this.checkForInvalidDates.bind(this)
  };
   constructor(private helper: HelperService,
               private modalService: NgbModal,
               private bookingService: BookingService,
              ){
   }
  ngOnInit() {
     this.newBooking = new Booking()

   this.getBooksOutDates();
  }
  private checkForInvalidDates(date){
   return this.bookedOutDates.includes(this.helper.formatBookingDate(date)) || date.diff(moment(), 'days') > 0;
  }
  private getBooksOutDates(){
     const bookings: Booking[] = this.rental.bookings

    if(bookings && bookings.length > 0){
      bookings.forEach((booking: Booking) => {
          const dateRange =  this.helper.getBookingRangeofDates(booking.startAt, booking.endAt)
         this.bookedOutDates.push(...dateRange);
      })
    }
  }
  private addNewBookedOutDates(bookingData: any){
    const dateRange =  this.helper.getBookingRangeofDates(bookingData.startAt, bookingData.endAt);
    this.bookedOutDates.push(...dateRange);
  }


  selectedDate(value: any, datepicker?: any) {
    this.options.autoUpdateInput = true;
    this.newBooking.startAt = this.helper.formatBookingDate(value.start);
    this.newBooking.endAt = this.helper.formatBookingDate(value.end);
    this.newBooking.days = -(value.start.diff(value.end, 'days'));
    this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }
  private resetDatePicker(){
    this.picker.datePicker.setStartDate(moment())
    this.picker.datePicker.setEndDate(moment())
    this.picker.datePicker.element.val('')
  }
  openConfirmModal(content){
     this.errors = [];
   this.modalRef = this.modalService.open(content);

  }
  createBooking(){
     this.newBooking.rental = this.rental
    this.bookingService.createBooking(this.newBooking).subscribe(
      (bookingData: any) => {
        this.addNewBookedOutDates(bookingData)
        this.newBooking = new Booking();
        this.modalRef.close();
        this.resetDatePicker();
      },
      (errorResponse:any) => {this.errors = errorResponse.error.errors }
    )
  }
}
