import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/helpers/auth.guard'
import { importType } from '@angular/compiler/src/output/output_ast';
const routes: Routes = [{path: 'dashboard', loadChildren: () => import('./ice-cream/ice-cream.module').then(m => m.IceCreamModule), canActivate: [AuthGuard]},
                        {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
                        {path: '**', redirectTo: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
