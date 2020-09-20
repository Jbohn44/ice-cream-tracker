import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // selectedFile: IceCreamImage;
  fileList: string[] = [];
  formData = new FormData();
  iceCreamId: number;
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.iceCreamId = this.route.snapshot.params['id'];
    console.log('icecreamid', this.iceCreamId);
  }

  processFile(imageInput: any) {
    
    if (imageInput.length === 0) {
      alert("no files selected");
      return;
    }

    for(let file of imageInput){
      this.fileList.push(file.name);
      this.formData.append(file.name, file);
    }

  }

  onSubmit(){
    this.formData.append('IceCreamId', this.iceCreamId.toString());
    this.imageService.postImages(this.formData).subscribe((res)=>{
      this.fileList = [];
      this.formData = new FormData();
    }, (err)=>{});
  }

}
