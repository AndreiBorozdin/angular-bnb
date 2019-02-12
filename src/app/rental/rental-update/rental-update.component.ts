import { Component, OnInit } from '@angular/core';
import {Rental} from "../shared/rental.model";
import {ActivatedRoute} from "@angular/router";
import {RentalService} from "../shared/rental.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Subject} from "rxjs";
import {UcWordsPipe} from "ngx-pipes";

@Component({
  selector: 'app-rental-update',
  templateUrl: './rental-update.component.html',
  styleUrls: ['./rental-update.component.scss']
})
export class RentalUpdateComponent implements OnInit {
  rental: Rental
  errors: any[] = []
  rentalCategories: string[] = Rental.CATEGORIES;
  locationSubject: Subject<any> = new Subject();
  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              private upperPipe: UcWordsPipe
  ) {
    this.transformLocation = this.transformLocation.bind(this)
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getRental(params['rentalId'])
      }
    )
  }
  transformLocation(location: string): string{
    return this.upperPipe.transform(location);
  }
  getRental(rentalId: string){
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental
      });
  }
  updateRental(rentalId: string, rentalData: any){
   this.rentalService.updateRental(rentalId, rentalData).subscribe(
     (updatedRental: Rental) => {
       this.rental = updatedRental
       if(rentalData.city || rentalData.street){
        this.locationSubject.next(this.rental.city + ', ' + this.rental.street)
       }
     },
     (errorResponse: HttpErrorResponse) => {
       console.log(this.errors = errorResponse.error.errors);
       this.getRental(rentalId)
     }
   )
  }
  countBedroomAssets(assetsNum: number){
    return parseInt(<any>this.rental.bedrooms || 0, 10) + assetsNum
  }
}
