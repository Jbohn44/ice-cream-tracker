import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceCreamRoutingModule } from './ice-cream-routing.module';
import { StarComponent } from './star/star.component';
import { StarFilledComponent } from './star-filled/star-filled.component';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';
import { RatingComponent } from './rating/rating.component';
import { RatingDisplayComponent } from './rating-display/rating-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IceCreamAddComponent } from './ice-cream-add/ice-cream-add.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [StarComponent, 
    StarFilledComponent, 
    IceCreamPageComponent, 
    IceCreamCardComponent, 
    RatingComponent, 
    RatingDisplayComponent, 
    IceCreamAddComponent, 
    SideNavComponent],
  imports: [
    CommonModule,
    IceCreamRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule, 
    BsDatepickerModule

  ]
})
export class IceCreamModule { }
