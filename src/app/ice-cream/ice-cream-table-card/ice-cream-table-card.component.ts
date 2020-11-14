import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-table-card',
  templateUrl: './ice-cream-table-card.component.html',
  styleUrls: ['./ice-cream-table-card.component.css']
})
export class IceCreamTableCardComponent implements OnInit {
  @Input() iceCream: IceCream;
  
  constructor() { }

  ngOnInit() {
  }

  detailView($event){
    
  }
}
