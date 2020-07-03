import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../../shared/utilities';
import { apiUrls } from 'src/app/shared/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService extends BaseService {

  constructor(http: HttpClient) { 
    super(http);
  }

  //maybe needs work
  getIceCreams(userId){
    console.log("userId", userId);
    return this.get(formatUrl(apiUrls.TEST_URL, userId)).pipe(map(response => 
      {
        return response;
      }));
  }
}
