import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Daterangepicker } from 'ng2-daterangepicker';
import {RentalListComponent} from "./rental-list/rental-list.component";
import {RentalListItemComponent} from "./rental-list-item/rental-list-item.component";
import {RentalComponent} from "./rental.component";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {NgPipesModule} from "ngx-pipes";
import {UppercasePipe} from "../common/pipes/uppercase.pipe";
import {MapModule} from "../common/map/map.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "../auth/shared/auth.guard";
import { RentalDeatilBookingComponent } from './rental-detail/rental-deatil-booking/rental-deatil-booking.component';


const routes: Routes = [
  {path: 'rentals', component: RentalComponent, children: [
      {path: '', component: RentalListComponent},
      {path: ':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard]}
    ]}

];
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalDeatilBookingComponent
  ],
 imports:[
   CommonModule,
   RouterModule.forChild(routes),
   NgPipesModule,
   HttpClientModule,
   MapModule, Daterangepicker
 ]

})
export class RentalModule { }
