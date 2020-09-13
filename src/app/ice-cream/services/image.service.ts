import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/shared/services/base.service';
import { apiUrls } from 'src/app/shared/constants';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getSingleImage(){

  }

  getImages() {

  }

  postImages(formData: FormData) {
   
    return this.post(apiUrls.POST_IMAGE, formData).pipe(map(x => x));
  }

  deleteImage() {

  }
}
