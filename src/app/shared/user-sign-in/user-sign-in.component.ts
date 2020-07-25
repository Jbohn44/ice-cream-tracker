import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  user = new User();
  @Output() signedIn: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(x => {this.signedIn.emit(), x});
  }
}
