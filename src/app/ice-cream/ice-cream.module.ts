import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IceCreamRoutingModule } from './ice-cream-routing.module';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IceCreamAddComponent } from './ice-cream-add/ice-cream-add.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { UploadComponent } from './upload/upload.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddPageComponent } from './add-page/add-page.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SortComponent } from './sort/sort.component';
@NgModule({
  declarations: [
    IceCreamPageComponent,
    IceCreamCardComponent,
    IceCreamAddComponent,
    SideNavComponent, 
    UploadComponent, 
    UserProfileComponent, 
    AddPageComponent, 
    CategoryDisplayComponent, 
    CategoryAddComponent, SortComponent],
  imports: [
    CommonModule,
    IceCreamRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    BsDatepickerModule,
    RatingModule,
    AccordionModule.forRoot(),


  ]
})
export class IceCreamModule { }
