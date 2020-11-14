import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef, ModalBackdropOptions, ModalOptions } from 'ngx-bootstrap/modal';
import { User } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  iceCream: IceCream = new IceCream();
  iceCreamPage = true;
  iceCreams: IceCream[] = [];
  ratingList = [];
  user: User;
  addBoolean: boolean = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  //TODO: maybe get rid of modal service, modal will be call from side nav
  constructor(private iceCreamService: IceCreamService, private authService: AuthenticationService, private modalService: BsModalService) {
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
  addClick(){
    this.addBoolean = true;
  }
  onSubmitted($event){
    this.addBoolean = false;
    this.iceCreams.push(<IceCream>$event);
  }
  logOut(){
    this.user = null;
    this.authService.logout();
  }
  closeAdd(){
    this.addBoolean = false;
  }
  onSort($event) {
    //sort functions. figure out how to make this more DRY
    switch ($event) {
      //sort by flavor name A-Z
      case 1:
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
      //sort by Flavor Name Z-A
      case 2:
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
      //sort by Over All rating big to small
      case 3:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.OverAllRating.RatingValue;
          var nameB = b.OverAllRating.RatingValue;
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
      //sort by OverAll rating small to big
      case 4:
        this.iceCreams.sort(function (a, b) {
          var nameA = a.OverAllRating.RatingValue;
          var nameB = b.OverAllRating.RatingValue;
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
        //sort by newest
        case 5:
          this.iceCreams.sort(function (a, b) {
            var nameA = a.ReviewDate;
            var nameB = b.ReviewDate;
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
    }

  }
}
