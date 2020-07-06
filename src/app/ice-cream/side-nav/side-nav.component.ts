import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output("addIceCream") addIceCream: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  add(){
    this.addIceCream.emit("emitted");
  }

}
