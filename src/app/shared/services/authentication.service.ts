import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, windowToggle } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { BaseService } from './base.service';
import { apiUrls } from '../constants';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  public currentUser: Observable<User>;
  private googleUserSubject: BehaviorSubject<User>;
  public photoUrl: string;
  constructor(http: HttpClient, private router: Router, private googleAuth: AuthService) {
    super(http);
    this.googleUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.googleUserSubject.asObservable();
  }

  public get googleUserValue(): User {
    return this.googleUserSubject.value;
  }
  public getPhotoUrl(): string {
    return this.photoUrl;
  }
  login(user: SocialUser) {
    let backEndUser = new User();
    backEndUser.IdToken = user.idToken;
    return this.post(apiUrls.LOGIN_USER, backEndUser).pipe(map(response => {
      console.log("login response", response);
      if (response) {
        // localStorage.setItem('currentUser', JSON.stringify(response));
        this.googleUserSubject.next(<User>response);
        this.setGoogleUser(user);
        localStorage.setItem('currentUser', JSON.stringify(<User>this.googleUserSubject.value));
        // this.router.navigate(['dashboard']).then(() => window.location.reload());
        // this.router.navigate(['dashboard']);
        // need to figure this out, on refresh it logs in again and redirects to dashboard
      }
    }));
  }

  logout() {
    this.googleAuth.signOut();
    localStorage.removeItem('currentUser');
    this.googleUserSubject.next(null);
    // for now this is what will handle logouts
    this.router.navigate(['']).then(() => { window.location.reload() });
    
  }

  private setGoogleUser(user: SocialUser) {
    this.googleUserSubject.value.Token = user.authToken;
    this.googleUserSubject.value.IdToken = user.idToken;
    this.googleUserSubject.value.PhotoUrl = user.photoUrl;
    this.photoUrl = user.photoUrl;
  }
}
