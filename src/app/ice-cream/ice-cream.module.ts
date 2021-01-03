import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IceCreamRoutingModule } from './ice-cream-routing.module';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IceCreamAddComponent } from './ice-cream-add/ice-cream-add.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { UploadComponent } from './upload/upload.component';
import { AddPageComponent } from './add-page/add-page.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SortComponent } from './sort/sort.component';
import { IceCreamTableCardComponent } from './ice-cream-table-card/ice-cream-table-card.component';
import { IceCreamDetailComponent } from './ice-cream-detail/ice-cream-detail.component';
import { ImagePageComponent } from './image-page/image-page.component';
@NgModule({
  declarations: [
    IceCreamPageComponent,
    IceCreamCardComponent,
    IceCreamAddComponent,
    UploadComponent, 
    AddPageComponent, 
    CategoryDisplayComponent, 
    CategoryAddComponent, SortComponent, IceCreamTableCardComponent, IceCreamDetailComponent, ImagePageComponent],
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
