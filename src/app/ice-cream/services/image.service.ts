import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseService{

  constructor(http: HttpClient) {
    super(http);
   }

   getImages(){

   }

   postImages(){

   }

   deleteImages(){
     
   }
}
