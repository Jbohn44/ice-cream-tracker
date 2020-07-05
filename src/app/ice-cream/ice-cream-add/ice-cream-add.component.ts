import { Component, OnInit } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { FlavorArray, MouthFeelArray, DensityArray } from 'src/app/shared/constants';

@Component({
  selector: 'app-ice-cream-add',
  templateUrl: './ice-cream-add.component.html',
  styleUrls: ['./ice-cream-add.component.css']
})
export class IceCreamAddComponent implements OnInit {
  iceCream: IceCream = new IceCream();
  flavorArray = FlavorArray;
  mouthFeelArray = MouthFeelArray;
  densityArray = DensityArray;
  constructor() { }

  ngOnInit() {
    console.log("ice cream: ", this.iceCream)
  }


  submitForm($event){
  }

}
