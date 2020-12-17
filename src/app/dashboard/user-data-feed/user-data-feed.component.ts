import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from 'src/app/ice-cream/models/ice-cream.model';
import { IceCreamService } from 'src/app/ice-cream/services/ice-cream.service';

@Component({
  selector: 'app-user-data-feed',
  templateUrl: './user-data-feed.component.html',
  styleUrls: ['./user-data-feed.component.css']
})
export class UserDataFeedComponent implements OnInit {
  @Input() userId: number;
  iceCreams: IceCream[] = [];
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    this.iceCreamService.getDataFeed(this.userId).subscribe(x => { this.iceCreams = x });
  }

}
