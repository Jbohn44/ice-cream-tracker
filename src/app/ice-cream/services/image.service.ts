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

  getImages() {

  }

  postImages(iceCreamImage: IceCreamImage) {
    const formData = new FormData();
    formData.append('image', iceCreamImage.Image, iceCreamImage.Image.name);
    formData.append('iceCreamId', iceCreamImage.IceCreamId.toString());
    formData.append('description', iceCreamImage.Description);
    return this.post(apiUrls.POST_IMAGE, formData).pipe(map(x => x));
  }

  deleteImages() {

  }
}
