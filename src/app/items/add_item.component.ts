import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Http, Response, Headers }            from '@angular/http';
import { ItemService } from './item.service';
import { FridgeService } from '../fridge/fridge.service';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'add_item',
  templateUrl: './add_item.component.html',
  styleUrls: ['./add_item.component.css']
})

export class AddItemComponent implements OnInit {

	myDatePickerOptions: IMyDpOptions = {dateFormat: 'dd/mm/yyyy'};
	profile: any;
	name: string;
	picture: string;
	fridge_id: number = 1;
	fridges: any[];
	expiration_date: string;
	submit_text: string = "Donner";

	constructor(private auth: AuthService,
		private itemService: ItemService,
		private fridgeService: FridgeService) {
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

	    this.fridgeService.getAllFridges()
	    	.subscribe(
	    		res => {this.fridges = res.json().items;},
	    		err => console.log(err),
	    		()  => console.log("Frides gotten")
	    	);

	}

	fileEvent(fileInput: any) {
	    let file = fileInput.target.files[0];
	    this.picture = file.name;
	}

	submit()
	{
		let comp = this;
		console.log(this.picture);
		this.itemService.postImage(this.picture)
			.subscribe(
				res => {
					this.itemService.postItem(comp.name, res.url, comp.fridge_id, comp.profile.sub, comp.expiration_date)
						.subscribe(
							res => console.log(res),
							err => console.log(err),
							() => console.log('Request Complete')
						);
				},
		        err => console.log(err),
		        () => console.log('Request Complete')
		    );
	}
  
}
