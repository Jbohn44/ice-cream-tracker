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
  iceCream: IceCream = new IceCream();
  iceCreamPage = true;
  iceCreams: IceCream[] = [];
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

  initPage() {
    // maybe init user to class variable
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
    console.log("user", this.user);
    // this.clearPage();
    this.iceCreamService.loadIceCreamData(this.user.UserId).subscribe(x => { this.iceCreams = x });
  }

  delete($event) {
    console.log($event);
    this.iceCreams = this.iceCreams.filter(x => x.IceCreamId !== $event);
  }

  onSort($event) {
    console.log($event);
    switch ($event) {
      case 1:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.FlavorName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.FlavorName.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      case 2:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.FlavorName.toUpperCase(); // ignore upper and lowercase
          var nameB = b.FlavorName.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          // names must be equal
          return 0;
        });
        break;
      case 3:
        break;
      case 4:
        break;
    }

  }
}
