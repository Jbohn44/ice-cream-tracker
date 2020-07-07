import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

//TODO: refactor event emitter to update ice cream page when ice cream added
export class SideNavComponent implements OnInit {
  @Output("addIceCream") addIceCream: EventEmitter<any> = new EventEmitter();
  iceCreamModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  add(template: TemplateRef<any>){
    this.iceCreamModalRef = this.modalService.show(template);
  }

}
