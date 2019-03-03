import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/shared/auth.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.getUser()
  }
  getUser() {
    const userId = this.auth.getUserId();

    this.userService.getUser(userId).subscribe((user) => {
      this.user = user;
    }, (err) => {

    })
  }
}
