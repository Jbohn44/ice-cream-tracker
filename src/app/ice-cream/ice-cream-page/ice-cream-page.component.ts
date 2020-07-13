import { Component, OnInit, Input, TemplateRef } from '@angular/core';
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
    
    this.iceCreamService.getIceCreams(0).subscribe(x => {
        //this may need to be changed
        console.log("This is x :", x);
        x.forEach(i => {console.log("this is i: ", i), this.iceCreams.push(i)});
    });
  }
  ngOnChanges() {
  }

  add(template: TemplateRef<any>){
    this.iceCreamModalRef = this.modalService.show(template);
  }

}
