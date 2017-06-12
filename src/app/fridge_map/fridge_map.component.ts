import { Component, OnInit }                from '@angular/core';
import { AgmMap, AgmMarker }                from '@agm/core';
import { AuthHttp }                         from 'angular2-jwt';

@Component({
  selector: 'fridge_map',
  templateUrl: 'fridge_map.component.html',
  styleUrls: ['fridge_map.component.css'],
})
export class FridgeMapComponent implements OnInit{
  title: string = 'My first AGM project';
  lat: number = 48.2973451;
  lng: number = 4.0744009000000005;
  lat_utt: number = 48.26916199999999;
  lng_utt: number = 4.06677609999997;
  lat_esc: number = 48.2839245;
  lng_esc: number = 4.07906509999998;
  lat_iut: number = 48.2683218;
  lng_iut: number = 4.079674599999976;


  ngOnInit() {
    //Get the fridges from the API
   /* this.authHttp.get('http://localhost:3000/api/fridges_with_last_items')
      .subscribe(
        data => this.thing = JSON.stringify(data),
        err => console.log(err),
        () => console.log('Request Complete')
      ); */
  }

}