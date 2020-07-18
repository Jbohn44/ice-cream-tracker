import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef, ModalBackdropOptions, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  iceCreams: IceCream[] = [];
  iceCreamModalRef: BsModalRef;
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

  add(template: TemplateRef<any>) {
    this.iceCreamModalRef = this.modalService.show(template, this.config);
  }

  onSubmitted() {
    this.iceCreamModalRef.hide();
  }

  initPage() {
    this.iceCreamService.getIceCreams(0).subscribe(x => {
      x.forEach(i => { this.iceCreams.push(i) });
    });
  }
}
