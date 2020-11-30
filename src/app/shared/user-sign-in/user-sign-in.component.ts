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
  constructor(private authService: AuthService, private backEndAuth: AuthenticationService) { }

  ngOnInit() {
    this.setAuthState();
  }

  googleSignIn(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {this.setAuthState()});
  }

  signOut() {
    this.authService.signOut();
    this.backEndAuth.logout();
  }


  setAuthState(){
    this.authService.authState.subscribe((user)=>{
      this.user = user;
      this.loggedIn = (user !== null);
      this.backEndAuth.login(user).subscribe(x => x);
    });
  }
}
