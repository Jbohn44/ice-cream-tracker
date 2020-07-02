import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl = "this/base/url";

  constructor(private http: HttpClient) { }

  get(url){
    return this.http.get(this.baseUrl + url);

  }
  post(url, params: any[]){
    return this.http.post(this.baseUrl + url, params);
  }
  put(url, params: any[]){
    return this.http.put(this.baseUrl + url, params);
  }
  delete(url){
    return this.http.delete(this.baseUrl + url);
  }
}
