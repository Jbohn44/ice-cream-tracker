import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserSignUpPageComponent } from './user-sign-up-page/user-sign-up-page.component';


const routes: Routes = [{ path: '', component: HomePageComponent },
{ path: 'signup', component: UserSignUpPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
