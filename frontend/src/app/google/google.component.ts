import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../services/google.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  constructor( private googleService: GoogleService ) { }

  ngOnInit() {
  }

  login(): void {
  	this.googleService.login();
  }

}
