import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick(ratingValue){
    this.rating = ratingValue;
  }

}
