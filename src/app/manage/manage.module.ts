import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ManageComponent} from "./manage.component";
import {ManageBookingComponent} from "./manage-booking/manage-booking.component";
import {ManageRentalComponent} from "./manage-rental/manage-rental.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth/shared/auth.guard";
import {NgPipesModule} from "ngx-pipes";
import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';

const routes: Routes = [
  {path: 'manage', component: ManageComponent, children: [
      {path: 'rentals', component: ManageRentalComponent, canActivate: [AuthGuard]},
      {path: 'bookings', component: ManageBookingComponent, canActivate: [AuthGuard]}
    ]}

]
@NgModule({
  declarations: [ManageComponent, ManageBookingComponent, ManageRentalComponent, ManageRentalBookingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgPipesModule
  ],
  providers: [AuthGuard]
})
export class ManageModule { }
