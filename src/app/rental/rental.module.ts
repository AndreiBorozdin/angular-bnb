import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Daterangepicker } from 'ng2-daterangepicker';
import {RentalListComponent} from "./rental-list/rental-list.component";
import {RentalListItemComponent} from "./rental-list-item/rental-list-item.component";
import {RentalComponent} from "./rental.component";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {NgPipesModule, UcWordsPipe} from "ngx-pipes";
import {UppercasePipe} from "../common/pipes/uppercase.pipe";
import {MapModule} from "../common/map/map.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "../auth/shared/auth.guard";
import { RentalDeatilBookingComponent } from './rental-detail/rental-deatil-booking/rental-deatil-booking.component';
import {FormsModule} from "@angular/forms";
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalUpdateComponent } from './rental-update/rental-update.component';
import {EditableModule} from "../common/components/editable.module";
import {RentalGuard} from "./shared/rental.guard";
import {ImageUploadModule} from "../common/components/image-upload/image-upload.module";


const routes: Routes = [
  {path: 'rentals', component: RentalComponent, children: [
      {path: '', component: RentalListComponent},
      {path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
      {path: ':rentalId/edit', component: RentalUpdateComponent, canActivate: [AuthGuard, RentalGuard]},
      {path: ':rentalId', component: RentalDetailComponent},
      {path: ':city/homes', component:RentalSearchComponent}
    ]}

];
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalDeatilBookingComponent,
    RentalSearchComponent,
    RentalCreateComponent,
    RentalUpdateComponent
  ],
 imports:[
   CommonModule,
   RouterModule.forChild(routes),
   NgPipesModule,
   HttpClientModule,
   MapModule,
   Daterangepicker,
   FormsModule,
   EditableModule,
   ImageUploadModule
 ],
  providers: [
    UcWordsPipe, RentalGuard
  ]

})
export class RentalModule { }
