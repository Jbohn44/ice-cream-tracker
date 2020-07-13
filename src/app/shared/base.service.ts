import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  get(url) {
    console.log("url: ", url);
    return this.http.get(this.getFullUrl(url));

  }
  post(url, params: any) {
    console.log("Url from Base post: ", url)
    return this.http.post(this.getFullUrl(url), params);
  }
  put(url, params: any) {
    return this.http.put(this.getFullUrl(url), params);
  }
  delete(url) {
    return this.http.delete(this.getFullUrl(url));
  }

  protected getFullUrl(url) {
    let fullUrl = `${this.baseUrl}${url}`;
    console.log("Full URL: ", fullUrl);
    return fullUrl;
  }

  
}
