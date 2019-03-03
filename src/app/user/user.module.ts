import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from "./user.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth/shared/auth.guard";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'users',
    component: UserComponent,
    children: [
      { path: 'profile', canActivate: [AuthGuard], component: UserDetailComponent }
    ]
  }
]

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class UserModule { }
