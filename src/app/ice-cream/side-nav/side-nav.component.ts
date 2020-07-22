import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

//TODO: refactor event emitter to update ice cream page when ice cream added
export class SideNavComponent implements OnInit {
  @Output() addIceCream: EventEmitter<any> = new EventEmitter();
  @Output() switchPage: EventEmitter<any> = new EventEmitter();
  iceCreamModalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  }
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  add(template: TemplateRef<any>){
    this.iceCreamModalRef = this.modalService.show(template, this.config);
  }

  onSubmitted($event){
    this.addIceCream.emit($event);
    this.iceCreamModalRef.hide();
  }

  pageSwitch($event){
    this.switchPage.emit($event);
  }

  
}
