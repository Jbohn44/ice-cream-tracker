import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { IceCreamService } from '../services/ice-cream.service';
import { User } from 'src/app/shared/models/user.model';
import { Service } from '../models/service.model';
import { addListener } from 'process';

@Component({
  selector: 'app-ice-cream-add',
  templateUrl: './ice-cream-add.component.html',
  styleUrls: ['./ice-cream-add.component.css']
})
export class IceCreamAddComponent implements OnInit {
  @Input() iceCream: IceCream;
  @Input() edit: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Output() saved: EventEmitter<IceCream> = new EventEmitter();
  @Output() deleted: EventEmitter<number> = new EventEmitter();
  user: User = new User();
  serviceList = []; // try to move this to icecream class
  ratingList = [];  // try to move this to icecream class
  max: number = 10;
  rate: number = 0;
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    this.user = <User>JSON.parse(localStorage.getItem('currentUser'));
    //this can be changed to edit true or false
    if (this.iceCream === null || this.iceCream === undefined) {
      this.iceCream = new IceCream();
      this.iceCream.UserId = this.user.UserId;
    }
    this.serviceList = [
      { ServiceTypeId: 1, ServiceName: 'Dine-In' },
      { ServiceTypeId: 2, ServiceName: 'Carry-Out' },
      { ServiceTypeId: 3, ServiceName: 'Drive-Thru' }
    ];

    this.ratingList = [
      {RatingType: "FlavorRating", RatingName: "Flavor"},
      {RatingType: "CreaminessRating", RatingName: "Creaminess"},
      {RatingType: "IcinessRating", RatingName: "Iciness"},
      {RatingType: "DensityRating", RatingName: "Density"},
      {RatingType: "ValueRating", RatingName: "Value"},
      {RatingType: "OverAllRating", RatingName: "Over All"}
    ]
  }


  submitForm($event) {
    console.log(event);
  }

  //create toasts for submittal and errors
  onSubmit() {
    this.iceCreamService.postIceCream(this.iceCream).subscribe(x => this.submitted.emit(<IceCream>x));
  }

  onSave() {
    this.iceCreamService.putIceCream(this.iceCream).subscribe(x => console.log("saved Ice Cream", x));
    this.saved.emit();
  }

  onDelete(iceCreamId) {
    this.iceCreamService.deleteIceCream(iceCreamId).subscribe(x => x);
    this.deleted.emit(iceCreamId);
  }

  addService(service) {
    console.log(service);
    let serviceIdList = [];
    this.iceCream.Services.forEach(s => {
      serviceIdList.push(s.ServiceTypeId);
    });

    if(!serviceIdList.includes(service.ServiceTypeId)){
      this.iceCream.Services.push(<Service>service);
    }
  }

  removeService(service) {
    console.log(service);
    this.iceCream.Services = this.iceCream.Services.filter(x => x !== service);
  }
}
