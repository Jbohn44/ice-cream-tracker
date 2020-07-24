import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  userSignUp: User = new User();
  currentUserNames: string[];
  passwordCheck: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(x => {
      if (x.length > 0) {
        x.forEach(i => {
          this.currentUserNames.push(i.toLowerCase())
        });
      }
    });
  }
  onSubmit() {
    if (this.checkUserName(this.userSignUp.Username) === true) {
      //show errror message, username already exists
    } else {
      this.userService.createUser(this.userSignUp).subscribe(x => x); // need to handle successful user sign up.  authenticate and sign in
    }
  }

  checkUserName(userName: string): boolean {
    if (this.currentUserNames.length > 0) {
      if (this.currentUserNames.includes(userName.toLowerCase())) {
        return true;
      }
      return false;

    }
    return false;
  }
}
