import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceCreamPageComponent } from './ice-cream-page/ice-cream-page.component';
import { IceCreamAddComponent } from './ice-cream-add/ice-cream-add.component';
import { UploadComponent } from './upload/upload.component';
import { IceCreamDetailComponent } from './ice-cream-detail/ice-cream-detail.component';


const routes: Routes = [{path: '', component: IceCreamPageComponent}, {path: 'addtest', component: IceCreamAddComponent}, {path: 'upload/:id', component: UploadComponent},
{path:'detail/:id', component: IceCreamDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IceCreamRoutingModule { }
