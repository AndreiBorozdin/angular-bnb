import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RentalListComponent} from "./rental-list/rental-list.component";
import {RentalListItemComponent} from "./rental-list-item/rental-list-item.component";
import {RentalComponent} from "./rental.component";
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {NgPipesModule} from "ngx-pipes";
import {UppercasePipe} from "../common/pipes/uppercase.pipe";
import {MapModule} from "../common/map/map.module";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  {path: 'rentals', component: RentalComponent, children: [
      {path: '', component: RentalListComponent},
      {path: ':rentalId', component: RentalDetailComponent}
    ]}

];
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
 imports:[
   CommonModule,
   RouterModule.forChild(routes),
   NgPipesModule,
   HttpClientModule,
   MapModule
 ]
})
export class RentalModule { }
