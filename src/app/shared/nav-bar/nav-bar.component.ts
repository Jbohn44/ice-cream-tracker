import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
signInModalRef: BsModalRef;
user: User;
config = {
  backdrop: true,
  ignoreBackdropClick: true
}
  constructor(private modalService: BsModalService, private authService: AuthenticationService) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')) {
      this.setCurrentUser();
    }
    console.log("currentuser", this.user);
  }


  signInClick(template: TemplateRef<any>){
    this.signInModalRef = this.modalService.show(template, this.config);
  }

  logout() { 
    this.user = null;
    this.authService.logout();
  }

  signedIn(){
    this.signInModalRef.hide();
  }

  setCurrentUser(){
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
  }
}
