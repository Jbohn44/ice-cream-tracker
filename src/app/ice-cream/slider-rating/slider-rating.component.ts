import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../models/rating.model';
import { FlavorArray } from '../../shared/constants';
import { MouthFeelArray } from '../../shared/constants';
import { DensityArray } from '../../shared/constants';

@Component({
  selector: 'app-slider-rating',
  templateUrl: './slider-rating.component.html',
  styleUrls: ['./slider-rating.component.css']
})
export class SliderRatingComponent implements OnInit {
  @Input() rating: Rating;
  flavor = FlavorArray;
  mouthFeel = MouthFeelArray;
  density = DensityArray;
  
  constructor() { }

  ngOnInit() {
  }

}
