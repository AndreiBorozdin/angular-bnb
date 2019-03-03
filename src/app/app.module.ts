import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import {RentalModule} from "./rental/rental.module";
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ManageModule} from "./manage/manage.module";
import {UserModule} from "./user/user.module";



const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,



  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule,
    AuthModule,
    BrowserAnimationsModule,
    ManageModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    UserModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
