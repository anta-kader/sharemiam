import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { Routes, RouterModule }         from '@angular/router';
import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';


/*** Routing File ***/
import { routing }                      from './app.routing';


import { AppComponent } from './app.component';
import { AuthService } from './authentication/auth.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not_found/not_found.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing/*, { useHash: true }*/)
  ],
  providers: [
      AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
