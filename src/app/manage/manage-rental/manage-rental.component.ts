import { Component, OnInit } from '@angular/core';
import {RentalService} from "../../rental/shared/rental.service";
import {Rental} from "../../rental/shared/rental.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-manage-rental',
  templateUrl: './manage-rental.component.html',
  styleUrls: ['./manage-rental.component.scss']
})
export class ManageRentalComponent implements OnInit {
  rentals: Rental[];
  rentalDeleteIndex: number

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    this.rentalService.getUserRentals().subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals
      },
      () => {}
    )
  }
  deleteRental(rentalId: string){
    this.rentalService.deleteRental(rentalId).subscribe(
      () => {
        this.rentals.splice(this.rentalDeleteIndex, 1)
        this.rentalDeleteIndex = undefined
      },
      (errorResponse: HttpErrorResponse) => {
        console.log(errorResponse.error.errors[0].detail)
      }
    )
  }

}
