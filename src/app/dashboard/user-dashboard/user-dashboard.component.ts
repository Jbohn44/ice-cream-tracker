import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
    console.log("user", this.user);
  }

}
