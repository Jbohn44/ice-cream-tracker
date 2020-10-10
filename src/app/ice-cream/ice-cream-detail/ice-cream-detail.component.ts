import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-detail',
  templateUrl: './ice-cream-detail.component.html',
  styleUrls: ['./ice-cream-detail.component.css']
})
export class IceCreamDetailComponent implements OnInit {
  @Input() iceCream: IceCream;
  constructor() { }

  ngOnInit() {
  }


  delete($event){
    //this will possibly emit an event to remove the icecream from the list
  }

}
