import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { IceCreamModule } from '../ice-cream/ice-cream.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDataFeedComponent } from './user-data-feed/user-data-feed.component';
import { OtherUserFeedComponent } from './other-user-feed/other-user-feed.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { RatingModule } from 'ngx-bootstrap/rating';


@NgModule({
  declarations: [
    UserDashboardComponent, 
    UserProfileComponent, 
    UserDataFeedComponent, 
    OtherUserFeedComponent, 
    UserStatsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IceCreamModule,
    RatingModule
  ]
})
export class DashboardModule { }
