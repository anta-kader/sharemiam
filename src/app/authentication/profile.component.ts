import { Component, OnInit }            from '@angular/core';
import { AuthService }                  from './auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) 
  { 
    auth.handleAuthentication();
  }

  ngOnInit() 
  {
    if (this.auth.userProfile) 
      this.profile = this.auth.userProfile;
    else 
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
  }

}