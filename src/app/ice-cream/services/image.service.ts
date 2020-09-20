import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { BaseService } from 'src/app/shared/services/base.service';
import { apiUrls } from 'src/app/shared/constants';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { formatUrl } from 'src/app/shared/utilities';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getSingleImage(){

  }

  getImages(iceCreamId: number) {
    return this.get(formatUrl(apiUrls.GET_IMAGES, iceCreamId)).pipe(map(x =>{
        return <IceCreamImage[]>x;
      }));
  }

  postImages(formData: FormData) {
   
    return this.post(apiUrls.POST_IMAGE, formData).pipe(map(x => x));
  }

  deleteImage() {

  }
}
