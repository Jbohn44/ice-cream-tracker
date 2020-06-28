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
  // this is an input into the rating component to disallow editing of ratings on card.  editing will be done it edit section
  edit = false;
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
      },
      Comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


    }
  }

}
