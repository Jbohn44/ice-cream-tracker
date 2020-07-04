import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { RatingComponent } from './rating/rating.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';
import { IceCreamAddComponent } from './ice-cream-add/ice-cream-add.component';


const routes: Routes = [{path: '', component: IceCreamPageComponent}, {path: 'form', component: IceCreamAddComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IceCreamRoutingModule { }
