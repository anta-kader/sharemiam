import { BrowserModule }                              from '@angular/platform-browser';
import { NgModule }                                   from '@angular/core';
import { FormsModule }                                from '@angular/forms';
import { HttpModule, Http, RequestOptions }           from '@angular/http';
import { Routes, RouterModule }                       from '@angular/router';
import { AuthHttp, AuthConfig }                       from 'angular2-jwt';

/** Angular Google Maps**/
import { AgmCoreModule }                              from '@agm/core';
import { GM_API_KEY }                                 from './variables';

/*** Routing File ***/
import { routing }                                    from './app.routing';


import { AppComponent }                               from './app.component';
import { AuthService }                                from './authentication/auth.service';
import { ProfileComponent }                           from './authentication/profile.component';
import { HomeComponent }                              from './home/home.component';
import { NotFoundComponent }                          from './not_found/not_found.component';
import { FridgeMapComponent }                         from './fridge_map/fridge_map.component';
import { AddItemComponent }                           from './items/add_item.component';
import { ItemService }                                from './items/item.service';
import { FridgeService }                              from './fridge/fridge.service';
import { MyDatePickerModule }                         from 'mydatepicker';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'access_token',
    tokenGetter: (() => localStorage.getItem('access_token')),
    globalHeaders: [{'Content-Type':'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    FridgeMapComponent,
    HomeComponent,
    AddItemComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing/*, { useHash: true }*/),
    AgmCoreModule.forRoot({
      apiKey: GM_API_KEY
    }),
    MyDatePickerModule
  ],
  providers: [
      AuthService,
      FridgeService,
      ItemService,
      {
        provide: AuthHttp,
        useFactory: authHttpServiceFactory,
        deps: [Http, RequestOptions]
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
