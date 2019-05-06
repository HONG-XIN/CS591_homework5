import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

	API_URL = 'http://localhost:8080';

  constructor( private httpClient: HttpClient ) { }

  login() {
  	window.location.assign(`${this.API_URL}/auth/google`);
  }
}
