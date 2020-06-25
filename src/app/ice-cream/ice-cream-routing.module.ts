import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [{path: 'ice-creams', component: IceCreamPageComponent}, {path: 'rating', component: RatingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IceCreamRoutingModule { }
