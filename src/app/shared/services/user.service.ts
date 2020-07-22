import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseService } from './base.service';
import { User } from '../models/user.model';
import { apiUrls } from '../constants';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(http: HttpClient) { 
    super(http);
  }

  getAllUsers() {
    return this.get(apiUrls.GET_ALL_USERS).pipe(map(response => {return <User[]>response}));
  }

  createUser(user: User) {
    return this.post(apiUrls.CREATE_USER, user).pipe(map(response => {return response}));
  }
}
