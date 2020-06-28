import { Component, OnInit, Input } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { RatingTypes } from '../../shared/constants';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.css']
})
export class IceCreamCardComponent implements OnInit {
  @Input() iceCream: IceCream;
  ratingTypes = RatingTypes.RatingTypes;
  // this is an input into the rating component to disallow editing of ratings on card.  editing will be done it edit section
  edit = false;
  constructor() { }

  ngOnInit() {
 
  }

}
