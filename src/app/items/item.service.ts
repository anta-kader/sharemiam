import { Injectable }                         from '@angular/core';
import { Router }                             from '@angular/router';
import { Http, Response, Headers }            from '@angular/http';
import { Observable }                         from 'rxjs';
import { CLOUD_NAME, API_KEY, UPLOAD_PRESET } from './cloudinary-variables';
import { AuthHttp }                           from 'angular2-jwt';

@Injectable()
export class ItemService {
  userProfile: any;

  constructor(private http: Http, 
    private authHttp: AuthHttp) {}

  postImage(image_url: string): Observable<any> 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let link = "https://api.cloudinary.com/v1_1/" + CLOUD_NAME + "/image/upload";

    let body = JSON.stringify({ "file": image_url, "api_key": API_KEY, "upload_preset": UPLOAD_PRESET});

    return this.http.post(link, body, {headers: headers});                          
  }
  
  getItem(item_id: number): Observable<any>
  {
    return this.authHttp.get('http://localhost:3000/api/images/' + item_id);
  }

  postItem(name: string, picture: string, fridge_id: number, user_id: string, expiration_date?: string): Observable<any>
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify({ "name": name, "picture": picture, "fridge_id": fridge_id, "user_id": user_id, "expiration_date": expiration_date});

    return this.authHttp.post('http://localhost:3000/api/items', {headers: headers}); 
  }

}