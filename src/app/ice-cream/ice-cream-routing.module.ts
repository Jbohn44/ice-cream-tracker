import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { RatingComponent } from './rating/rating.component';
import { IceCreamCardComponent } from './ice-cream-card/ice-cream-card.component';


const routes: Routes = [{path: '', component: IceCreamPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IceCreamRoutingModule { }
