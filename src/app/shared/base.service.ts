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
    return this.http.get(this.getFullUrl(url));

  }
  post(url, params: any[]) {
    return this.http.post(this.getFullUrl(url), params);
  }
  put(url, params: any[]) {
    return this.http.put(this.getFullUrl(url), params);
  }
  delete(url) {
    return this.http.delete(this.getFullUrl(url));
  }

  protected getFullUrl(url) {
    return `${this.baseUrl}${url}`;
  }

  // url formatter, may need work.  need more test cases
  formatUrl(...params) {
    let args = params;
    let url = args[0];
    args.shift();
    console.log("args: ", args)
    if (args.length > 0) {
      for(let i = 0; i < args.length; i++){
        url = url.replace("{" + i + "}", args[i]);
      }

      return url;
    }
  }
}
