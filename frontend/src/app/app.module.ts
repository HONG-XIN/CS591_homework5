import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // <-- Http Services

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleComponent } from './google/google.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
