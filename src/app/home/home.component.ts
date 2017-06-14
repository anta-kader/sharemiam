import { Component, OnInit } 				from '@angular/core';
import { AuthHttp }                         from 'angular2-jwt';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
	thing : string;

	constructor(private authHttp: AuthHttp) {}

	ngOnInit(){
		this.authHttp.get('http://localhost:3000/api')
		    .subscribe(
		      data => this.thing = JSON.stringify(data),
		      err => console.log(err),
		      () => console.log('Request Complete')
		    );
	}

  
}
