import { Component, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { RatingTypes } from '../../shared/constants';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  iceCream: IceCream;
  ratingTypes = RatingTypes.RatingTypes;
  constructor() { }

  ngOnInit() {
    this.iceCream = {
      IceCreamId: 1,
      Name: "Plain Vanilla",
      Business: "Test Business",
      Location: "Test Location",
      Flavor: "Vanilla",
      FlavorRating: {
        RatingValue: 3,
        RatingType: "FlavorRating"
      },
      TextureRating: {
        RatingValue: 4,
        RatingType: "TextureRating"
      },
      ValueRating: {
        RatingValue: 1,
        RatingType: "ValueRating"
      }


    }
  }

}
