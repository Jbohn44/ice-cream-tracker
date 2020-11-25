import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user.model';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  @Output() signedIn: EventEmitter<any> = new EventEmitter();
  user: SocialUser;
  loggedIn: boolean
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user !== null);
    });
    console.log("Google User", this.user);
  }

  googleSignIn(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut() {
    this.authService.signOut();
  }
}
