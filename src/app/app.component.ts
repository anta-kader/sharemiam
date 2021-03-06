import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	profile: any;

	constructor(public auth: AuthService) {
		auth.handleAuthentication();
	}

	ngOnInit() 
	{
		if(this.auth.isAuthenticated()){
		    if (this.auth.userProfile) 
		      	this.profile = this.auth.userProfile;
		    else 
		      	this.auth.getProfile((err, profile) => {
		        	this.profile = profile;
		      	});
	    }
	}
  
}
