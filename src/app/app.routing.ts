/** 
 * IF11 | LO10 - ShareMiam!
 * 
 * author : Anta-Kader Konfrou
 *
 * Routing file
 */

import { ModuleWithProviders }                                    from '@angular/core';
import { Routes, RouterModule }                                   from '@angular/router';

//HOME
import { HomeComponent }                                          from './home/home.component';

import { AddItemComponent }                                          from './items/add_item.component';

//MAP
import { FridgeMapComponent }                                     from './fridge_map/fridge_map.component';

//PROFILE
import { ProfileComponent }                                       from './authentication/profile.component';

// 404
import { NotFoundComponent }                                      from './not_found/not_found.component';


export const routing: Routes = [

/***** 
************************** HOME
*****/ 
  {
    path: 'home',
    component: HomeComponent,
  },   
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

/***** 
************************** FRIDGES
*****/ 
  {
    path: 'fridge/map',
    component: FridgeMapComponent,
  }, 

/***** 
************************** ITEM
*****/ 
  {
    path: 'item/add',
    component: AddItemComponent,
  }, 

/***** 
************************** PROFILE
*****/ 
  {
    path: 'profile',
    component: ProfileComponent,
  }, 

/***** 
************************** NOTFOUND
*****/ 
  {
    path: 'notfound', 
    component: NotFoundComponent
  },
  { // cette route doit toujours être la dernière
    path: '**', 
    redirectTo: '/notfound',
    pathMatch: 'full'

  }

];

