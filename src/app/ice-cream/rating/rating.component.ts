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
  @Input() ratingValue;
  constructor() { }

  ngOnInit() {
    this.rating = {
      RatingType: this.ratingType,
      RatingValue: 0
    }
  }

  onClick(ratingValue){
    this.rating.RatingValue = ratingValue;
  }

}
