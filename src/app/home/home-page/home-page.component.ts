import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('lastDiv', {static: false}) lastDiv: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

}
