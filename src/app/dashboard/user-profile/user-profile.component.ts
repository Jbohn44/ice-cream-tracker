import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { User } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user: User;
  imagesource: string;
  constructor() { }

  ngOnInit() {
    this.imagesource = this.user.PhotoUrl;
  }

}
