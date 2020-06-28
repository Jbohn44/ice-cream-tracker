import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../models/rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating: Rating;
  // rating type is bound to ratings of ice cream class, probably should refactor to input 'rating'
  // instead of rating type, since the rating objects are what is coming in and at some point should be bound with ngModel
  @Input() ratingType;
  // this input will allow the editing of rating
  @Input() edit: boolean;
  constructor() { }

  ngOnInit() {
    this.rating = {
      RatingType: this.ratingType.RatingType,
      RatingValue: this.ratingType.RatingValue
    }
  }

  onClick(ratingValue) {
    if (this.edit === true) {
      this.rating.RatingValue = ratingValue;

    }
  }

}
