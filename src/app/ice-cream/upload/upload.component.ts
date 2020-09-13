import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: IceCreamImage;
  fileList: string[] = [];
  formData = new FormData();
  @Input() iceCreamId: number = 0;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  processFile(imageInput: any) {
    
    if (imageInput.length === 0) {
      alert("no files selected");
      return;
    }

    for(let file of imageInput){
      this.fileList.push(file.name);
      this.formData.append(file.name, file);
      console.log("filename list", this.fileList);
    }

    this.formData.append('IceCreamId', this.iceCreamId.toString());
  }

  onSubmit(){
    this.imageService.postImages(this.formData).subscribe((res)=>{}, (err)=>{});
  }

}
