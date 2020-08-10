import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
import { FlavorArray, MouthFeelArray, DensityArray } from 'src/app/shared/constants';
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
  selectNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
  user: User = new User();
  serviceList = [];

  // ServiceId: number;
  // ServiceTypeId: number;
  // IceCreamId: number;
  // ServiceName: string;
  constructor(private iceCreamService: IceCreamService) { }

  ngOnInit() {
    this.user =  <User>JSON.parse(localStorage.getItem('currentUser'));
    //this can be changed to edit true or false
    if (this.iceCream === null || this.iceCream === undefined) {
      this.iceCream = new IceCream();
      this.iceCream.UserId = this.user.UserId;
      this.serviceList = [
        {ServiceTypeId: 1, ServiceName: 'Dine-In', Selected: false}, 
        {ServiceTypeId: 2, ServiceName: 'Carry-Out', Selected: false}, 
        {ServiceTypeId: 3, ServiceName: 'Drive-Thru', Selected: false}
      ];
    }
  }


  submitForm($event) {
    console.log(event);
  }

  onSubmit() {
    this.addServices();
    // const addServicePromise = new Promise(this.addServices);
    // this handles the submit of the icecream
    // addServicePromise.then(x =>
      this.iceCreamService.postIceCream(this.iceCream).subscribe(x => this.submitted.emit(<IceCream>x));

    // );
    // resets the ice cream
  }

  onSave() {
    this.iceCreamService.putIceCream(this.iceCream).subscribe(x => console.log("saved Ice Cream", x));
    this.saved.emit();
  }

  onDelete(iceCreamId){
    this.iceCreamService.deleteIceCream(iceCreamId).subscribe(x => x);
    this.deleted.emit(iceCreamId);
  }

  addServices(){
    this.serviceList.forEach(i => {
      if(i.Selected === true) {
        let service = <Service>{
          ServiceTypeId: i.ServiceTypeId
        };
        if(!this.iceCream.Services.includes(service)){
          this.iceCream.Services.push(service);
        }
      }
    });
  }
}
