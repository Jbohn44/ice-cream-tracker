import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSignUpComponent } from '../shared/user-sign-up/user-sign-up.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomePageComponent, UserSignUpComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
