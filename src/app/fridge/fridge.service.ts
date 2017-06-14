import { Injectable }                         from '@angular/core';
import { Router }                             from '@angular/router';
import { Http, Response, Headers }            from '@angular/http';
import { Observable }                         from 'rxjs';
import { AuthHttp }                           from 'angular2-jwt';

@Injectable()
export class FridgeService {
  userProfile: any;

  constructor(private http: Http, 
    private authHttp: AuthHttp) {}

  //Get all information regarding a fridge
  getFridge(fridge_id: number): Observable<any>
  {
    return this.authHttp.get('http://localhost:3000/api/fridges/' + fridge_id);
  }

  //Get all items inside a fridge
  getFridgeContent(fridge_id: number): Observable<any>
  {
    return this.authHttp.get('http://localhost:3000/api/fridges/' + fridge_id);
  }

  getAllFridges(): Observable<any>
  {
    return this.authHttp.get('http://localhost:3000/api/fridges');
  }

  getAllFridgesWithLastItems(): Observable<any>
  {
    return this.authHttp.get('http://localhost:3000/api/fridges_with_last_items');
  }

}