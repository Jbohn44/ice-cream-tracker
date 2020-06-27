import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../models/rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating: Rating;
  @Input() ratingType;
  editMode = false;
  constructor() { }

  ngOnInit() {
    this.rating = {
      RatingType: this.ratingType.RatingType,
      RatingValue: this.ratingType.RatingValue
    }
  }

  onClick(ratingValue) {
    if (this.editMode === true) {
      this.rating.RatingValue = ratingValue;

    }
  }

}
