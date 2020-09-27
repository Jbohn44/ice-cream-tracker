import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef, ModalBackdropOptions, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  // iceCreams: IceCream[] = [];
  // iceCreamModalRef: BsModalRef;
  iceCream: IceCream = new IceCream();
  iceCreamPage = true;
  user: User;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  //TODO: maybe get rid of modal service, modal will be call from side nav
  constructor(private iceCreamService: IceCreamService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.initPage();
  }
  ngOnChanges() {
  }

  // add(template: TemplateRef<any>) {
  //   this.iceCreamModalRef = this.modalService.show(template, this.config);
  // }

  // onSubmitted($event) {
  //   console.log("event: ", $event);
  //   // this.iceCreams.push(<IceCream>$event);
  //   this.iceCreamModalRef.hide();
  // }

  initPage() {
    // maybe init user to class variable
    this.user =  <User>JSON.parse(localStorage.getItem('currentUser'));
    console.log("user",this.user);
    // this.clearPage();
  //  this.iceCreamService.loadIceCreamData(this.user.UserId).subscribe(x => x);
  }

  // clearPage() {
  //   this.iceCreams = [];
  // }

  // onDelete($event) {
  //   this.iceCreams = this.iceCreams.filter(i => i.IceCreamId !== $event);
  // }

}
