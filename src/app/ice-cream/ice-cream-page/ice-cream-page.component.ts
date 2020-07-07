import { Component, OnInit, Input } from '@angular/core';
import { iceCreamList } from '../../shared/constants'
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  iceCreams: IceCream[] = [];
  iceCreamModalRef: BsModalRef;

  //TODO: maybe get rid of modal service, modal will be call from side nav
  constructor(private iceCreamService: IceCreamService, private modalService: BsModalService) { }

  ngOnInit() {
    //for testing: move to service call
    iceCreamList.forEach(x => {
      this.iceCreams.push(x);
    });
  }
  ngOnChanges() {
  }

  addIceCream(){
    // this will handle the new ice cream submitted
  }

}
