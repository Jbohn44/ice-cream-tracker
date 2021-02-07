import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { RatingTypes } from '../../shared/constants';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { timeout } from 'rxjs/operators';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  @Input() iceCream: IceCream;
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  ratingTypes = RatingTypes.RatingTypes;
  iceCreamModalRef: BsModalRef;
  loading = false;
  deleteMessage = false;
  imageModalRef: BsModalRef;
  imageList: any[] = [];
  deleteModalRef: BsModalRef;
  ratingList = []; // move to constants as it's used in more than one place
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  // this is an input into the rating component to disallow editing of ratings on card.  editing will be done it edit section
  edit = false;
  constructor(private iceCreamService: IceCreamService, private modalService: BsModalService, private imageService: ImageService) { }

  ngOnInit() {
    console.log("icecream comin in", this.iceCream)
    this.ratingList = [
      {RatingType: "FlavorRating", RatingName: "Flavor"},
      {RatingType: "CreaminessRating", RatingName: "Creaminess"},
      {RatingType: "IcinessRating", RatingName: "Iciness"},
      {RatingType: "DensityRating", RatingName: "Density"},
      {RatingType: "ValueRating", RatingName: "Value"},
      {RatingType: "OverAllRating", RatingName: "Over All"}
    ]
  }

  editIceCream(template: TemplateRef<any>) {
    this.iceCreamModalRef = this.modalService.show(template, this.config);
  }

  onSaved() {
    this.iceCreamModalRef.hide();
    //could just use toastr here but... adding an ngIf with save message
    this.showSavedMessage();
  }

  showSavedMessage() {
    this.loading = true;
    setTimeout(() => { this.loading = false }, 2000);
  }

  onDelete($event) {
    console.log($event);
    this.deleteModalRef.hide();
    this.iceCreamService.deleteIceCream(this.iceCream.IceCreamId).subscribe(x => x);
    this.deleted.emit(this.iceCream.IceCreamId);
  }

  showDeleteMessage() {
    this.deleteMessage = true;
    setTimeout(() => { this.deleteMessage = false }, 2000);
  }

  openImageModal(templateRef: any) {
    this.imageService.getImages(this.iceCream.IceCreamId).subscribe(x => {
      x.forEach(element => {
        console.log(element.Image);
        let image = new Image(300, 500);
        image.src = 'data:image/jpg;base64,' + element.Image;
        this.imageList.push(image);
      });
    });
    this.imageModalRef = this.modalService.show(templateRef);

  }

  closeImageModal(){
    this.imageModalRef.hide();
    this.clearImageList();
  }
  clearImageList() {
    //right now this is clearing imageList, may be better to cache images instead of reloading them each time?
    this.imageList = [];
  }

  openDeleteModal(templateRef: any){
    this.deleteModalRef = this.modalService.show(templateRef);

  }
}
