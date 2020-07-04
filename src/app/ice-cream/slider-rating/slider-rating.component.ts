import { Component, OnInit, Input } from '@angular/core';
import { Rating } from '../models/rating.model';
import { FlavorEnum } from '../../shared/constants';
import { MouthFeelEnum } from '../../shared/constants';
import { DensityEnum } from '../../shared/constants';

@Component({
  selector: 'app-slider-rating',
  templateUrl: './slider-rating.component.html',
  styleUrls: ['./slider-rating.component.css']
})
export class SliderRatingComponent implements OnInit {
  @Input() rating: Rating;
  flavor = FlavorEnum;
  mouthFeel = MouthFeelEnum;
  density = DensityEnum;
  
  constructor() { }

  ngOnInit() {
  }

}
