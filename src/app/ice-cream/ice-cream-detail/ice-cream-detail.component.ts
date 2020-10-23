import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-detail',
  templateUrl: './ice-cream-detail.component.html',
  styleUrls: ['./ice-cream-detail.component.css']
})
export class IceCreamDetailComponent implements OnInit {
  iceCream: IceCream;
  iceCreamId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.iceCreamId = this.route.snapshot.params['id'];
    //TODO: get single ice cream here.
  }


  delete($event){
    //this will possibly emit an event to remove the icecream from the list
  }

}
