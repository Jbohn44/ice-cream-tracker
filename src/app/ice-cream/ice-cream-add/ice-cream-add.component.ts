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
  selectNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  user: User = new User();
  serviceList = [];
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
  }


  submitForm($event) {
    console.log(event);
  }

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
