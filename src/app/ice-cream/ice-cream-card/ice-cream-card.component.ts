import { Component, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  IceCream: IceCream;
  FlavorRating = "FlavorRating";
  TextureRating = "TextureRating";
  ValueRating = "ValueRating";
  constructor() { }

  ngOnInit() {
  }

}
