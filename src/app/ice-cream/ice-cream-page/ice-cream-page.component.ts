import { Component, OnInit } from '@angular/core';
import { iceCreamList } from '../../shared/constants'
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  iceCreams: IceCream[] = [];
  testIceCreamList: IceCream[] = [];
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    //for testing: move to service call
    iceCreamList.forEach(x => {
      this.iceCreams.push(x);
    });
    this.iceCreamService.getIceCreams(8904).subscribe(x => this.testIceCreamList = <IceCream[]>x);
  }


  addIceCream(){
    console.log("fired!");
  }

}
