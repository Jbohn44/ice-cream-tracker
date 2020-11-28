import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, windowToggle } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { BaseService } from './base.service';
import { apiUrls } from '../constants';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public googleUser: User = new User();
  constructor(http: HttpClient, private router: Router) {
    super(http);
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public get googleUserValue(): User {
    return this.googleUser;
  }
  login(user) {
    return this.post(apiUrls.LOGIN_USER, user).pipe(map(response => {
      console.log("login response", response);
      if(response){
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(<User>response);
        this.router.navigate(['dashboard']).then(() => window.location.reload());
      }
    }));
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['']).then(() => {window.location.reload()});
  }

  setGoogleUser(user: SocialUser){
    debugger;
    this.googleUser.Token = user.authToken;
  }
}
