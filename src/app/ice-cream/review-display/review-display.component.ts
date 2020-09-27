import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrls: ['./review-display.component.css']
})
export class ReviewDisplayComponent implements OnInit {
  @Input() userId: number;
  iceCreams: IceCream[] = [];
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    this.iceCreamService.loadIceCreamData(this.userId).subscribe(x => {
      this.iceCreams = x;
    });
  }

}
