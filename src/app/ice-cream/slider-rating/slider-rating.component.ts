import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../models/rating.model';

@Component({
  selector: 'app-slider-rating',
  templateUrl: './slider-rating.component.html',
  styleUrls: ['./slider-rating.component.css']
})
export class SliderRatingComponent implements OnInit {
  @Input() rating: Rating;
  
  constructor() { }

  ngOnInit() {
  }

}
