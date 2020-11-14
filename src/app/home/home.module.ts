import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSignUpComponent } from '../shared/user-sign-up/user-sign-up.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UserSignUpPageComponent } from './user-sign-up-page/user-sign-up-page.component';
import { UserSignInComponent } from '../shared/user-sign-in/user-sign-in.component';


@NgModule({
  declarations: [HomePageComponent, UserSignUpComponent, UserSignUpPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CarouselModule.forRoot()
  ]
})
export class HomeModule { }
