import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamAddComponent } from './ice-cream-add/ice-cream-add.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [{path: 'icecream', component: IceCreamPageComponent}, {path: 'addtest', component: IceCreamAddComponent}, {path: 'upload', component: UploadComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IceCreamRoutingModule { }
