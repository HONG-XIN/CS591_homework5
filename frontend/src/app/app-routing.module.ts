import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoogleComponent } from './google/google.component';

const routes: Routes = [
  { path: '', redirectTo: '/google', pathMatch: 'full' },
  { path: 'google', component: GoogleComponent },
];

@NgModule({ 
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule { }
