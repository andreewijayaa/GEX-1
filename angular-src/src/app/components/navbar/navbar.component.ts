/*
By: Omar
The main navbar component file used to implement the main navigation bar in GEX. We used a basic navbar initially and edited it to function appropriately.
*/
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { StoreFetchService } from '../../services/storeFetch.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConditionFunc } from 'rxjs/internal/observable/generate';
import { Config } from 'protractor';
import { Title } from '@angular/platform-browser'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private registerService: RegisterService,
    private storeFetchService: StoreFetchService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private titleService: Title) { }
    

  ngOnInit() {
    // This line of code sets the browser tab title when a user is navigating through the GEX application.
    this.titleService.setTitle("GEX");
  }

}
