import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: IceCreamImage;
  @Input() iceCreamId: number = 0;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = <IceCreamImage>{
        IceCreamId: this.iceCreamId,
        Src: event.target.result,
        Image: file
      };

      console.log("selected File", this.selectedFile);
      this.imageService.postImages(this.selectedFile).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }

}
