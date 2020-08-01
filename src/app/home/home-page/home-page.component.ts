import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('picOne', { static: false }) picOne: ElementRef;
  @ViewChild('headerText', {static: false}) headerText: ElementRef;
  @ViewChild('textOne', {static: false}) textOne: ElementRef;
  constructor() { }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {

  //   const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (number >= 50) {
  //     this.picOne.nativeElement.style.height = '0px';
  //     this.textOne.nativeElement.style.fontSize = '85px';
  //   } else{
  //     this.picOne.nativeElement.style.height = '900px';
  //     this.textOne.nativeElement.style.fontSize = '0px';
  //   }
  //   console.log(number)
  // }

  ngOnInit() {
  }

}
