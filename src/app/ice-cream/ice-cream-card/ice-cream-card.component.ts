import { Component, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { RatingTypes } from '../../shared/constants';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  IceCream: IceCream;
  ratingTypes = RatingTypes.RatingTypes;
  constructor() { }

  ngOnInit() {
    console.log(this.ratingTypes);
  }

}
