import { Component, OnInit } 				from '@angular/core';
import { AuthHttp }                         from 'angular2-jwt';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})

export class FridgeComponent implements OnInit{
	fridge_id: string;
	thing : string;


	constructor(
		private authHttp: AuthHttp,
		private router: Router,
	  	private route: ActivatedRoute) {}

	ngOnInit(){
		this.route.params.forEach((params: Params) => {
			if(params["fridge_id"] !== undefined) {
				this.fridge_id = params["fridge_id"];
			} //else navigate to notfound
		});
		
	}

  
}
