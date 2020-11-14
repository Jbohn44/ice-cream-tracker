import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { formatUrl } from '../../shared/utilities';
import { apiUrls } from 'src/app/shared/constants';
import { map } from 'rxjs/operators';
import { IceCream } from '../models/ice-cream.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService extends BaseService {
  // experiment keeping icecream array in this service
  private IceCreamData: IceCream[] = [];
  constructor(http: HttpClient) { 
    super(http);
  }

  loadIceCreamData(userId){
    return this.get(formatUrl(apiUrls.GET_ICE_CREAMS, userId)).pipe(map(res => {

     this.IceCreamData = <IceCream[]>res;
     console.log("this is ice cream data", this.IceCreamData);
     return this.IceCreamData;
    }));
  }

  getDataFeed(userId){
    return this.get(formatUrl(apiUrls.GET_DATA_FEED, userId)).pipe(map(res => {
      return <IceCream[]>res;
    }));
  }
  getIceCreams(userId){
    console.log("this fired")
  }

  getSingelIceCream(iceCreamId){
    return this.get(formatUrl(apiUrls.GET_DETAIL_VIEW, iceCreamId)).pipe(map(res => {
      return <IceCream>res;
    }))
  }
  postIceCream(iceCream: IceCream){
    return this.post(apiUrls.POST_ICE_CREAM, iceCream).pipe(map(response => 
      {
        this.IceCreamData.push(<IceCream>response);
        console.log("New Data", this.IceCreamData);
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
