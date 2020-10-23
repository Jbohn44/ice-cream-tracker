import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamPageComponent } from '../ice-cream/ice-cream-page/ice-cream-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [{path: '', component: UserDashboardComponent}, {path: 'icecream', component: IceCreamPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
