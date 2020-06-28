import { Component, OnInit } from '@angular/core';
import { IceCreamsForTesting } from '../../shared/constants'
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.css']
})
export class IceCreamPageComponent implements OnInit {
  iceCreams: IceCream[] = [];
  constructor() { }

  ngOnInit() {
    //for testing
    IceCreamsForTesting.iceCreamList.forEach(x => {
      this.iceCreams.push(x);
    });
  }

}
