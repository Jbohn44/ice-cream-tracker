import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [IceCreamPageComponent, IceCreamCardComponent, RatingComponent],
  imports: [
    CommonModule
  ]
})
export class IceCreamModule { }
