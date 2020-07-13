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
    return this.get(formatUrl(apiUrls.GET_ICE_CREAMS, userId)).pipe(map(response => 
      {
        return <IceCream[]>response;
      }));
  }

  postIceCream(iceCream: IceCream){
    return this.post(apiUrls.POST_ICE_CREAM, iceCream).pipe(map(response => 
      {
        console.log(response)
        return response
      }));
  }
}
