import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
signInModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  signInClick(template: TemplateRef<any>){
    this.signInModalRef = this.modalService.show(template);
  }
}
