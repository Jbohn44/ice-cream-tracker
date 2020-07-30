import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSignUpComponent } from '../shared/user-sign-up/user-sign-up.component';
import { FormsModule } from '@angular/forms';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [HomePageComponent, UserSignUpComponent, HomeCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CarouselModule.forRoot()
  ]
})
export class HomeModule { }
