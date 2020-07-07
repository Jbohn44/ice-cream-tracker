import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/base.service';
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../../shared/utilities';
import { apiUrls } from 'src/app/shared/constants';
import { map } from 'rxjs/operators';
import { IceCream } from '../models/ice-cream.model';
import { iceCreamList } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService extends BaseService {

  iceCreamList = iceCreamList;
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

  postIceCream(iceCream: IceCream){
    //TODO: handle http call.  For now we will push to constants iceCreamList.
    this.iceCreamList.push(iceCream);
  }
}
