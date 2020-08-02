import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { RatingTypes, MouthFeelArray, FlavorArray, DensityArray } from '../../shared/constants';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { timeout } from 'rxjs/operators';

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
  saveMessage = false;
  deleteMessage = false;

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  // this is an input into the rating component to disallow editing of ratings on card.  editing will be done it edit section
  edit = false;
  constructor(private iceCreamService: IceCreamService, private modalService: BsModalService) { }

  ngOnInit() {
 
  }

  editIceCream(template: TemplateRef<any>) {
    this.iceCreamModalRef = this.modalService.show(template, this.config);
  }

  onSaved() {
    this.iceCreamModalRef.hide();
    //could just use toastr here but... adding an ngIf with save message
    this.showSavedMessage();
  }

  showSavedMessage(){
    this.saveMessage = true;
    setTimeout(() => {this.saveMessage = false}, 2000);
  }

  onDelete($event) {
    console.log($event);
    this.deleted.emit($event);
    this.iceCreamModalRef.hide();
  }

  showDeleteMessage(){
    this.deleteMessage = true;
    setTimeout(() => {this.deleteMessage = false}, 2000);
  }

}
