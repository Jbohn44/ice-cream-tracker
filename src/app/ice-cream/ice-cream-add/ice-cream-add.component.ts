import { Component, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-add',
  templateUrl: './ice-cream-add.component.html',
  styleUrls: ['./ice-cream-add.component.css']
})
export class IceCreamAddComponent implements OnInit {
  iceCream: IceCream = new IceCream();

  constructor() { }

  ngOnInit() {
  }

}
