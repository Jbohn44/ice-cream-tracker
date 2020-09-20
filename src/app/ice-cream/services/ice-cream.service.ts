import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../../shared/utilities';
import { apiUrls } from 'src/app/shared/constants';
import { map } from 'rxjs/operators';
import { IceCream } from '../models/ice-cream.model';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService extends BaseService {

  constructor(http: HttpClient) { 
    super(http);
  }

  getIceCreams(userId){
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

  putIceCream(iceCream: IceCream){
    return this.put(apiUrls.PUT_ICE_CREAM, iceCream).pipe(map(response => {return response}));
  }

  deleteIceCream(id: number){
    return this.delete(formatUrl(apiUrls.DELETE_ICE_CREAM, id)).pipe(map(response => {return response}));
  }
}
