import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: 'ice-creams', loadChildren: () => import('./ice-cream/ice-cream.module').then(m => m.IceCreamModule)},
                        {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
