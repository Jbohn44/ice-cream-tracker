import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceCreamRoutingModule } from './ice-cream-routing.module';
import { StarComponent } from './star/star.component';
import { StarFilledComponent } from './star-filled/star-filled.component';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [StarComponent, StarFilledComponent, IceCreamPageComponent, IceCreamCardComponent, RatingComponent],
  imports: [
    CommonModule,
    IceCreamRoutingModule
  ]
})
export class IceCreamModule { }
