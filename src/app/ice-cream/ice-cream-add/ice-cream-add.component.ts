import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { FlavorArray, MouthFeelArray, DensityArray } from 'src/app/shared/constants';
import { IceCreamService } from '../services/ice-cream.service';

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
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    console.log("ice cream: ", this.iceCream)
  }


  submitForm($event){
    console.log(event);
  }

  onSubmit(){
    // this handles the submit of the icecream
    console.log("ice cream", this.iceCream);
    this.iceCreamService.postIceCream(this.iceCream).subscribe(x => console.log("response from Add Component: ", x));
    // resets the ice cream
    this.iceCream = new IceCream();
  }

}
