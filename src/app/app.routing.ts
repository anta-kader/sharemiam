/** 
 * IF11 | LO10 - ShareMiam!
 * 
 * author : Anta-Kader Konfrou
 *
 * Routing file
 */

import { ModuleWithProviders }                                    from '@angular/core';
import { Routes, RouterModule }                                   from '@angular/router';

//ACCUEIL
import { HomeComponent }                                          from './home/home.component';

// 404
import { NotFoundComponent }                                      from './not_found/not_found.component';


export const routing: Routes = [

/***** 
************************** ACCUEIL
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

